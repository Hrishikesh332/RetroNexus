import React from 'react';
import Logo from '../assets/images/logo2.png';
import GithubIcon from '../assets/images/GithubIcon.png'

function Nav(){
    return (
    <nav className="nav-wrapper">
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                <img src={Logo} alt="image" height="45" width="50" />
                </li>
                
                <li></li><li></li><li></li><li></li>
                <li>
                    <a className='link-styled'>Features</a>
                </li>

                <li>
                    <a className='link-styled'>About Us</a>
                </li>
                <li>
                    <a className='link-styled'>Contact</a>
                </li>
                <li>
                    <a className='link-styled'>Feedback</a>
                </li>
                <li>
            <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub" height="35" width="35" />
            </a>
          </li>
                

            </ul>
        </div>
    </nav> );

}
export default Nav;