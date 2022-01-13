import React, { Component } from "react";
//import ReactHtmlParser from 'react-html-parser';
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import HeaderNavBar from "../components/Header";
import Footer from "../components/footer";
import BlogTabs from "../../components/blogtab";
import { FeaturedBlog } from "../../components/featured";
import { GridBlog } from "../../components/gridblogs";
import { BlockBlog } from "../../components/blockblogs";
import BlogDetails from "../../components/blogDetails";
import FloatingButton from "../components/FloatButton";
import Head from "next/head";
const BLOG_URL = "http://ec2-3-18-44-14.us-east-2.compute.amazonaws.com";
const CONTENT_API_KEY = "ed21690cfdb1a24af4718cbfa8";

export const getStaticProps = async ({ params }) => {
  var post = null;
  try {
    post = await getPost(params.slug);
	////console.log(post);
    if (!post) {
      return {
        props: { error: true },
      };
    }
  } catch (err) {}
  return {
    props: { post: post.post , related: post.related },
    revalidate: 10,
  };
};
async function getPost(slug) {
//   //console.log(
//     `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
//   );
  try {
    const res = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=feature_image,tags,authors`
    ).then((res) => res.json());
	////console.log(res);
    if (res.errors) {
      return false;
    }
	
    const posts = res.posts;
	var related = [];
	if(posts[0].tags){
		const tagname = posts[0].tags[0].name||'finance';
		const rel = await fetch(
			`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=feature_image,tags,authors&filter=tag:${tagname}`
		  ).then((rel) => rel.json());
		if(!rel.errors){

			
			related =  rel.posts.filter((b)=>{
				return b.slug!=slug;
			})
		}
	}
	return {
		post: posts[0],
		related: related
	}
  } catch (err) {
    return;
  }
}

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};
export default function Post(props) {
  const router = useRouter();
  const {post,related} = props;
  ////console.log(post, related);
  if (router.isFallback) {
    return (
		<Layout pageTitle="Page not found">
        <HeaderNavBar />
        <div className="col-md-12 herosection loginsection">
          Loading..
        </div>
        <Footer />
      </Layout>
	)
  }
  if (props?.error) {
    return (
      <Layout pageTitle="Page not found">
        <HeaderNavBar />
        <div className="col-md-12 herosection loginsection">
          <h1>Page not found</h1>
        </div>
        <Footer />
      </Layout>
    );
  }
  return (
	<Layout pageTitle={post?.title}>
	<Head>
	<link
          rel="shortcut icon"
          href={post?.feature_image||`/images/favicon.png`}
          type="image/x-icon"
        />
        <link rel="icon" href={post?.feature_image||`/images/favicon.png`} type="image/x-icon" />
		<link rel="apple-touch-icon" href={post?.feature_image||`/images/favicon.png`} />
	</Head>
	<HeaderNavBar />
		<BlogTabs active={post.tags?post.tags[0].name:'Others'}/>
        <BlogDetails blog={post}/>
        <FloatingButton text='Seek advice'/>

        <BlockBlog type="tax" title="Related Articles" blogs={related}/>
	<Footer />
  </Layout>
  )
}
