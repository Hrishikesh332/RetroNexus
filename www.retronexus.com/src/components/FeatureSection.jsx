import React from "react";


// Feature Listing of the Project - Social Media Analyzer

function SoundSection(){
    return (
        <div className="sound-section wrapper">
        <div className='body'>
            <div className='sound-section-content content'>
                <h2 className='title'>Features of RetroNexus</h2>
                <p className='text'>Get Extra Power!</p>
                <span className = 'description'>
                📖 Engage with the narrative, shaping the story's direction with your choices. <br></br>
                🔄 Each decision impacts the storyline, creating a unique and unpredictable experience. <br></br>
                💎 Earn valuable Non-Fungible Tokens (NFTs) for clearing levels and achieving milestones. <br></br>
                🤖 Advanced language models craft coherent and engaging story segments.<br></br>


                </span>
                <ul>
                    <ul className="links">

                    <li>
                        <button className="button">StoryGeneration</button>
                    </li>
                    <li>
                        <button className="button">NFT Rewards</button>
                    </li>
                    </ul>
                </ul>
            </div>
        </div>
        </div>


    );

}

export default SoundSection;