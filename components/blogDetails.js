import React from "react";
import moment from "moment";
import readingTime from "reading-time";
import ReactHtmlParser from 'react-html-parser';

export default function BlogDetails({blog}) {
  ////console.log(blog);
  return (
    <div className="blog-details">
      <div className="category">{blog?.tags?blog.tags[0].name:''}</div>
      <div className="blog-title">{blog?.title}</div>
      <div className="blog-meta">
        <ul>
          <li>By {blog?.authors&&blog?.authors[0].name}</li>
          <li>{moment(blog?.published_at).format("MMM, Do, Y")}</li>
          <li>{readingTime(blog?.html).text}</li>
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
      <img src={blog?.feature_image||`/images/logo.svg`} alt="Featured blog" />
      </div>
      <div className="blog-content">
        {
          ReactHtmlParser(blog?.html)
        }
      </div>
    </div>
  );
}
