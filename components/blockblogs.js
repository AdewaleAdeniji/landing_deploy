
import Block from './blockblog';
export const BlockBlog = ({type,title,blogs}) => {
  ////console.log(blogs);
    var blog_items = blogs||[];
    return (
      
      <div className={`blog-block ${type}`}>
        <h2>{title}</h2>
        <div className="block-blogs">
          {blog_items.map((blog,index)=>{
            return (
              <Block blog={blog} key={index}/>
            )
          })}
        </div>
      </div>
    );
  };
  