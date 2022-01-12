import moment from "moment";
import Link from "next/link";

const BlockBlog = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} passHref>
      <div className="blog">
        <div className="blog-image">
          <img
            src={blog?.feature_image || `/images/logo.svg`}
            alt="Featured blog"
          />
        </div>
        <div className="content">
          <div className="category">{blog?.tags && blog?.tags[0]?.name}</div>
          <div className="blog-title">{blog?.title}</div>
          <div className="blog-date">
            {moment(blog?.published_at).format("MMM, Do, Y")}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default BlockBlog;
