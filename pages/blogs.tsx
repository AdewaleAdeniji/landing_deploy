import Layout from "./components/Layout";
import HeaderNavBar from "./components/Header";
import Footer from "./components/footer";
import BlogTabs from "../components/blogtab";
import { FeaturedBlog } from "../components/featured";
import { GridBlog } from "../components/gridblogs";
import { BlockBlog } from "../components/blockblogs";

const BLOG_URL = "http://ec2-3-18-44-14.us-east-2.compute.amazonaws.com";
const CONTENT_API_KEY = "ed21690cfdb1a24af4718cbfa8";

type Post = {
  title: string;
  slug: string;
  feature_image: string;
  excerpt: string;
  published_at: string;
  blogdetail: object;
  tags: object;
};

async function getPosts() {
  // curl ""

  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=feature_image,tags`
  ).then((res) => res.json());
  ////console.log(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=feature_image,tags`);
  const posts = res.posts;

  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  const dataStuff = posts;
const grouped = Object.create(null); 
 dataStuff.forEach(function (a) {
   
   if(a.tags.length!==0){
     grouped[a.tags[0].name] = grouped[a.tags[0].name] || [];
     grouped[a.tags[0].name].push(a);
   }
    else {
     grouped['Uncategorized'] = grouped[a.tags] || [];
     grouped['Uncategorized'].push(a)
    }
  });

  const otherposts = Object.entries(grouped);
  return (
    <Layout pageTitle="Moneymie Blog: Better Banking for African Migrants">
      <HeaderNavBar />
      <BlogTabs active="all" />
      {posts.length > 0 ? (
        <div>
          <FeaturedBlog blogdetail={posts[0]} />
		  {
			  otherposts.map((category,index)=>{
				return (
					<GridBlog type="health" title={category[0]} key={index} blogs={category[1]}/>
				)
			  })
		  }
        </div>
      ) : (
        "No Blog found"
      )}
      <Footer />
    </Layout>
  );
};

export default Home;
