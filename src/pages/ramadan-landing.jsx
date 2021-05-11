import React,{ useState } from 'react';
import { RWebShare } from "react-web-share";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './styles/Home.module.css';
import Accordion from './components/Accordion'
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Food1 from "../assets/images/food1.jpeg";
import Food2 from "../assets/images/food2.jpeg";
import Food3 from "../assets/images/food3.jpeg";
import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/hamburger.svg";
import './styles/global.css';
import {Link} from 'react-router-dom';

export default function Home() {
  


  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const accordionData = [
    {
      title: 'What is Moneymie?',
      content:
        <>
          <p>
            Moneymie is a digital bank for African migrants. We make it easy for you to spend money in Nigeria from the US.
          </p>
          <p>
            At ZERO fees, you:
          </p>
          <ul>
            <li>Get instant USD and NGN wallets</li>
            <li>Exchange USD to NGN</li>
            <li>Exchange NGN to USD</li>
            <li>Send money to Nigeria</li>
            <li>Receive money from Nigeria</li>
          </ul>
        </>
    },
    {
      title: 'Is there a limit on how much I can send to Nigeria?',
      content: `You can deposit, spend or transfer up to $2, 000 daily and up to $20, 000 monthly on Moneymie once you complete your verification`
    },
    {
      title: 'What are the terms and conditions?',
      content: `Moneymie is free to use, simply send money home this period and we’ll match with a 1 % donation on whatever amount you transfer`
    },
    {
      title: 'What do I need to complete my verification?',
      content: `You only need a selfie, government recognized ID e.g.International passport or drivers’ license and your SSN / ITIN`
    }

  ];

  const imageData = [Image2, Food1, Food2, Food3];

  return (
    <div className={styles.container}>
      <div>
        <title>Moneymie</title>
        <meta name="description" content="Support the cause to feed families this ramadan" />
        <link rel="icon" href="/icon.ico" />
      </div>
      <main className={styles.main}>
        <div className={styles.navContainer}>
          <div className={styles.nav}>
            <Link to="/">
              <img src={Logo} alt="Vercel Logo" width={140} height={28} />
            </Link>
            <div className={styles.navLinkContainer}>
              <h4 className={styles.navLink}><a href="#faq">FAQ</a></h4>
              {isOpen ? <svg onClick={() => setIsOpen(false)} id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" fill="none">
                <path d="M2 30 L30 2 M30 30 L2 2" />
              </svg> : <img className={styles.hamburger} width={24} height={24} src={Hamburger} alt="hamburger" onClick={() => setIsOpen(true)} />}

            </div>
          </div>

          {isOpen &&
            <div className={styles.navContainerSmall}>
              <ul>
                <li>
                  <h4 className={styles.navLinkSm}><a href="#faq">FAQ</a></h4>
                </li>
              </ul>
            </div>
          }
        </div>

        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
            <div className={styles.bannerHeading}>
              <h6 className={styles.bannerText}>#RAMADANBLESSINGS</h6>
              <h1 className={styles.bannerHeading}>
                Support the cause to feed families this ramadan.
            </h1>

              <h5 className={styles.bannerSubHeading}>
                We donated $1000, Now its your turn
            </h5>
              <a href="https://moneymie.link/app">
                <button className={styles.bannerButton}>Make a donation</button>
              </a>

              <RWebShare
                data={{
                  text: "Support the cause to feed families this ramadan.",
                  url: "moneymie.link/app",
                  title: "Moneymie",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className={styles.senderButton}>Share to sender</button>
              </RWebShare>

            </div>

            <img src={Image1} alt="Image 1" width={517} height={466} priority layout="responsive" />
          </div>
        </div>
        <div className={styles.talkSectionContainer} id="talk">
          <div className={styles.talkSection}>
            <div className={styles.talkSectionImageContainer}>
              {/* <div className={styles.circularIconContainer}>
                <svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40" height="40" fill="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M10 2 L10 30 24 16 Z" />
                </svg>
              </div> */}
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                selectedItem={currentIndex}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                onChange={(i) => setCurrentIndex(i)}
              >

                {imageData.map((data, i) => (
                  <div key={i} className={styles.carouselContainer}>
                    <img src={data} alt="Image 1" id="image1" width={495} height={506} priority layout="responsive" />
                  </div>
                ))}
              </Carousel>
              <div className={styles.thumbContainer}>

                {imageData.map((_, i) => (
                  <div
                    onClick={() => setCurrentIndex(i)}
                    className={i === currentIndex ? styles.activeThumb : styles.thumb}></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={styles.talkSectionHeading}>
                How to Donate
              </h3>
              <h5 className={styles.talkSectionSubHeading}>
                Support the <strong>#RamadanFeedingProgramme2021</strong> By making donations to <strong>@moneymiedonations </strong> on Moneymie.
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.faqContainer} id="faq">
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>

          {accordionData.map(({ title, content }) => (
            <Accordion key={title} title={title} content={content} />
          ))}
        </div>
      </main>
    </div >
  )
}
