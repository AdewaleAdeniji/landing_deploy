export const GridBlog = ({type,title}) => {
  return (
    <div className={`blog-grid ${type}`}>
      <h2>{title}</h2>
      <div className="grid-blogs">
        <div className="blog">
          <div className="blog-image">
            <img src="/images/blog.svg" alt="Featured blog" />
          </div>
          <div className="content">
            <div className="category">MONEYMIE CONVO</div>
            <div className="blog-title">
              How to build credit score in the US
            </div>
            <div className="blog-date">
                May 26 2022
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src="/images/blog.svg" alt="Featured blog" />
          </div>
          <div className="content">
            <div className="category">MONEYMIE CONVO</div>
            <div className="blog-title">
              How to build credit score in the US
            </div>
            <div className="blog-date">
                May 26 2022
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src="/images/blog.svg" alt="Featured blog" />
          </div>
          <div className="content">
            <div className="category">MONEYMIE CONVO</div>
            <div className="blog-title">
              How to build credit score in the US
            </div>
            <div className="blog-date">
                May 26 2022
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};
