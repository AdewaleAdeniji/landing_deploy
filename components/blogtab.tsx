import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
export const getStaticProps = async () => {
  var tag = null;
  try {
    tag = await getTags();
    if (!tag) {
      return {
        props: { error: true },
      };
    }
  } catch (err) {}
  return {
    props: { tag },
    revalidate: 10,
  };
};
async function getTags() {
  const BLOG_URL = "http://ec2-3-18-44-14.us-east-2.compute.amazonaws.com";
  const CONTENT_API_KEY = "ed21690cfdb1a24af4718cbfa8";
  console.log(
    `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}&include=feature_image,tags,authors`
  );
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}&include=feature_image,tags,authors`
  ).then((res) => res.json());
  if (res.errors) {
    return false;
  }
  console.log(res);
}
export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};
const BlogTabs = (props) => {
  const { active } = props;
  const [tags, setTags] = useState([]);
  async function getTags() {
    if (tags.length == 0) {
      const BLOG_URL = "http://ec2-3-18-44-14.us-east-2.compute.amazonaws.com";
      const CONTENT_API_KEY = "ed21690cfdb1a24af4718cbfa8";
    //   console.log(
    //     `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}&include=feature_image,tags,authors`
    //   );
      const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}&include=feature_image,tags,authors`
      ).then((res) => res.json());
      if (res.errors) {
        return false;
      }
      if (res.tags) {
        setTags(res.tags);
      }
    }
  }
  getTags();
  return (
    <div className="blog-tabs">
      <div className="tabs">
        <ul>
          <Link href="/blogs" passHref>
          <li className={`tab ${active=='all'&&'active'}`}>
            <a>All Categories</a>
          </li>
          </Link>
          {tags.map((tag, index) => {
            return (
                <Link href={`/categories/${tag.slug}`} passHref  key={index}>
              <li className={`tab ${active==tag.name&&'active'}`}>
                <a>{tag.name}</a>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="search-tab"></div>
    </div>
  );
};
export default BlogTabs;
