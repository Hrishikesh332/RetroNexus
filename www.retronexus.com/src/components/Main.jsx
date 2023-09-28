import React from "react";



function Jumbotron(){
    
    const handleLearnMore = () => {
        const element= document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'

        });
    }
    
    
    
    return (

    <div className='jumbotron-section wrapper'>

        <p className='text'>RetroNexus</p>
        <span className='description'>
        Explore boundless storytelling possibilities in Game with the power in your hands
        </span>
        <ul className='links'>
            <li>
                <button disabled className='button disabled'>🏗️ In Development</button>
            </li>
            <li>
                <a target="_blank" href="https://github.com/Hrishikesh332/RetroNexus" className='button' rel="noopener noreferrer">Github</a>
            </li>

        </ul>

    </div>
    );

}

export default Jumbotron;
