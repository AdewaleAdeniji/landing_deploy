import React from "react";

export default function BlogDetails() {
  return (
    <div className="blog-details">
      <div className="catergory">Finance</div>
      <div className="blog-title">How to build credit score in the US</div>
      <div className="blog-meta">
        <ul>
          <li>By Feranmi Adeniji</li>
          <li>May 20, 2021</li>
          <li>20 minutes read</li>
        </ul>
      </div>
      <div className="footer-item">
        <ul>
          <li>
            <a
              href="mailto:hello@moneymie.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contacticon"
            >
              <img src="/images/@.png" alt="Email Icon" />
            </a>
            <a
              href="https://facebook.com/moneymie/"
              target="_blank"
              rel="noopener noreferrer"
              className="contacticon"
            >
              <img
                src="/images/facebooknew.png"
                className="fb"
                alt="Facebook Image"
              />
            </a>
            <a
              href="https://twitter.com/getMoneymie"
              target="_blank"
              rel="noopener noreferrer"
              className="contacticon"
            >
              <img src="/images/twitternew.png" alt="Twitter Image" />
            </a>
            <a
              href="https://www.instagram.com/moneymieapp"
              target="_blank"
              rel="noopener noreferrer"
              className="contacticon"
            >
              <img src="/images/instanew.png" alt="Instagram Icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="blog-image">
        <img src="/images/blog.svg" alt="Featured blog" />
      </div>
      <div className="blog-content">
        n 1999, the first Web Content Accessibility Guidelines were released to
        the public. They ushered in an era of making the web accessible for
        people with disabilities. While accessibility is a key component of
        inclusive design, it’s only one part of the pictu re. Inclusive design
        goes a step further to create a positive user experience for all people
        on the web. <br/><br/>
        
        In this article, we’ll explore 6 ways you can start
        designing more inclusive digital products that take into account the
        full spectrum of human diversity. “To effectively design for modern,
        multicultural audiences, we have to be willing to challenge our usual
        ways of gathering inspiration & conceptualizing our projects.” — Senongo
        Apkem, Author of Cross-Cultural Design What is inclusive design?
      </div>
    </div>
  );
}
