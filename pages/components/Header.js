import React, { useState } from "react";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { isLoggedIn, user, getUser } from "../../components/user";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";
const HeaderNavBar = (props) => {
  const history = useRouter();
  const [mobilemenu, setMobile] = useState(false);
  const loggedin = isLoggedIn();



  
  const toggleMenu = (e) => {
    setMobile(!mobilemenu);
  };
  const handleToggle = (event) => {
    if (event.target === event.currentTarget) {
      toggleMenu();
    }
  };
  var user = {}
  if(loggedin){
    if (typeof window !== 'undefined') {
          user = getUser();
          console.log(user);
    }
  }
  return (
    <ChakraProvider>
      <Fade duration={3000} top>
        <div className="nav navbar navdesktop">
          <Link href="/" passHref>
            {/* <Image src={Logo} alt="Moneymie Logo" className="navlogo"/> */}
            <img
              src="https://tech-244-new-design.d3std8zbt7sjj7.amplifyapp.com/static/media/moneymie-logo.e19bcead.png"
              className="navlogo"
              alt="Moneymie Logo"
            />
          </Link>
          <div className="align-right navlinks">
            <a
              href="https://business.moneymie.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Moneymie for Business &nbsp;&nbsp;
              <i className="fa fa-angle-right"></i>{" "}
            </a>
            <Link href="/support">Seek Advice </Link>

            <Link href="/blogs" passHref>
              Blog
            </Link>
            {!loggedin && (
              <>
                <Link href="/login" class="login" passHref>
                  <a>Login</a>
                </Link>
                <Link href="/signup" class="register" passHref>
                  Signup
                </Link>
              </>
            )}
            {loggedin&&(
              <div className='dn'>
              <Menu className="dn">
                <MenuButton
                  className="rounded profile-img"
                  rightIcon={<ChevronDownIcon />}
                >
                {/* <i className="fa fa-angle-down"></i> */}
                  {user.firstname[0]+user.lastname[0]}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={()=>history.push('/profile')}>Profile</MenuItem>
                  <MenuItem onClick={()=>history.push('/logout')}>Logout</MenuItem>
                </MenuList>
              </Menu>
              </div>
            )}
            
          </div>
        </div>
        <div className="nav navbar mobilenav">
          <Link href="/" passHref>
            <img
              src="images/logo.svg"
              className="navlogo"
              alt="Moneymie Logo"
            />
          </Link>
          <div className="align-right navlinks">
            <button className="menubtn" onClick={toggleMenu.bind(this)}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </Fade>
      <div
        className={mobilemenu ? "navmobile" : "hidden"}
        onClick={handleToggle.bind(this)}
      >
        <div className="navcontents">
          <header>
            <img src="images/logo.svg" alt="Moneymie Logo" />
            <i className="fa fa-times" onClick={toggleMenu.bind(this)}></i>
          </header>
          <ul>
            <li>
              <a
                href="https://medium.com/moneymie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/moneymie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seek Advice
              </a>
            </li>
            <li>
              <a
                href="https://business.moneymie.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Moneymie for Business <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ChakraProvider>
  );
};
export default HeaderNavBar;
