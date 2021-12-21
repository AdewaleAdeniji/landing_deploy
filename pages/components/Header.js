import React,{useState} from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
const HeaderNavBar = (props) => {

    const [mobilemenu, setMobile] = useState(false);
    
    const toggleMenu = (e) => {
        setMobile(!mobilemenu);
    }   
    const handleToggle = (event) => {
        if(event.target===event.currentTarget){
            toggleMenu();
        }
    }
    return (
        <>
        <Fade duration={3000}top>
        <div className="nav navbar navdesktop">
            <Link href="/" passHref>
                {/* <Image src={Logo} alt="Moneymie Logo" className="navlogo"/> */}
                <img src="https://tech-244-new-design.d3std8zbt7sjj7.amplifyapp.com/static/media/moneymie-logo.e19bcead.png" className="navlogo" alt="Moneymie Logo"/>
            </Link>
            <div className="align-right navlinks">
                <a href="https://business.moneymie.com" target="_blank"  rel="noopener noreferrer">Get Moneymie for Business
                 &nbsp;&nbsp;<i className='fa fa-angle-right'></i> </a>
                <a id="my_custom_link">Seek Advice </a>
                 
                <a href="https://medium.com/moneymie" target="_blank" className="blog"  rel="noopener noreferrer">Blog</a>
            </div>
        </div>
        <div className="nav navbar mobilenav">
            <Link href="/" passHref>
                <img src="images/logo.svg" className="navlogo" alt="Moneymie Logo"/>
            </Link>
            <div className="align-right navlinks">
                <button className="menubtn" onClick={toggleMenu.bind(this)}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        </div>
        </Fade> 
        <div className={mobilemenu ? 'navmobile' : 'hidden' } onClick={handleToggle.bind(this)}>
                <div className="navcontents">
                            <header>
                                <img src='images/logo.svg' alt="Moneymie Logo"/>
                                <i className="fa fa-times" onClick={toggleMenu.bind(this)}></i>
                            </header>
                            <ul>
                                <li>
                                    <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                                            Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="https://medium.com/moneymie" target="_blank"  rel="noopener noreferrer">
                                    Seek Advice
                                    </a>
                                </li>
                                <li>
                                    <a href="https://business.moneymie.com" target="_blank"  rel="noopener noreferrer">
                                            Get Moneymie for Business <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
            </div>
            
        
        </>
    )
}
export default HeaderNavBar;