from flask import Flask, render_template, request
import openai
from langchain import OpenAI
from langchain.agents import initialize_agent, Tool
from langchain.chains import LLMChain, SimpleSequentialChain
from langchain.prompts import PromptTemplate
from langchain.tools import DuckDuckGoSearchRun, WikipediaQueryRun
from langchain.utilities import WikipediaAPIWrapper
import os

app = Flask(__name__)

openai_api_key = os.environ.get('OPENAI_API_KEY')

def create_llm(openai_api_key):
    llm = OpenAI(
        openai_api_key=openai_api_key,
        temperature=0.8,
        model_name="text-davinci-003",
        max_tokens=1000
    )

    prompt_a = PromptTemplate(
        input_variables=["ideas"],
        template= """
            instruction:
            ///
            You are an advanced story researcher AI with an expansive 
            knowledge base that covers countless works of 
            world literature and pop culture.
            Your task is to assist me 
            in researching about other narratives 
            similar to my ideas. 
            My ideas: {ideas}. 
            Now, let's think about what questions should I ask to Google
            to get a big list of the most relevant stories.
        """
    )

    llm_chain_a = LLMChain(llm=llm, prompt=prompt_a)

    search = DuckDuckGoSearchRun()
    search_tool = Tool(
        name="Web Search",
        func=search.run,
        description="""A useful tool for 
        searching the Internet to find the title of a story 
        based on similar ideas. 
        Worth using for getting inspiration. 
        Use precise questions and use it once for each story"""
    )

    wikipedia = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper())
    wiki_tool = Tool(
        name="Wikipedia",
        func=wikipedia.run,
        description="""A useful tool for going deep 
        to retrieve information about the story"""
    )

    agent = initialize_agent(
        agent="zero-shot-react-description",
        tools=[search_tool, wiki_tool],
        llm=llm,
        verbose=True,
        max_iterations=5
    )

    prompt_b = PromptTemplate(
        input_variables=["story_list"],
        template= """
            instruction:
            ///
            You are going to read a list of stories as input and, 
            by using semantic analysis, similarity detection, and 
            multi-dimensional clustering algorithms, from different genres and time periods.
            You should identify narratives and storytelling techniques.

            Upon completion of this process, return a list of stories you analyzed in structured markdown text format.
            A list should include 'Title', 'Author', 'Genre', 'Publication Year', 
            'Summary', 'Similarity Score', 'Storytelling frameworks', and 'Key takeaway from the story'. 
            ///

            Story list:
            ///
            {story_list}.
            ///
        """
    )

    llm_chain_b = LLMChain(llm=llm, prompt=prompt_b)

    overall_chain = SimpleSequentialChain(
        chains=[llm_chain_a, agent, llm_chain_b],
        verbose=True
    )

    return overall_chain

def generate_response(input_text, overall_chain):
    response = overall_chain(input_text)
    return response['output']

@app.route('/', methods=['GET', 'POST'])
def story_explorer():
    response = None

    if request.method == 'POST':
        text = request.form.get('text')
        agent = create_llm(openai_api_key)
        response = generate_response(text, agent)

    return render_template('index.html', response=response)

if __name__ == '__main__':
    app.run(debug=True)
