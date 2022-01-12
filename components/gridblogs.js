import BlogElement from './blog.js';

export const GridBlog = ({type,title,blogs}) => {
  return (
    <div className={`blog-grid ${type}`}>
      <h2>{title}</h2>
      <div className="grid-blogs">
        {
          blogs.map((blog,index)=>{
            return (
              <BlogElement key={index} blog={blog} title={title}/>
            )
          })
        }
       
      </div>
    </div>
  );
};
