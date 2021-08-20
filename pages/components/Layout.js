import React from 'react';
import Head from 'next/head';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>{props.pageTitle}</title>
        
        <meta name="title" content="Digital dollars for Africans everywhere. "/>
        <meta name="description" content="Send and receive digital dollars with anyone anywhere, make online payments and earn yield."/>
        <meta name="facebook-domain-verification" content="90dtiyvkvo4o12fykq5cp7s9inbpeq" />
        <meta name="facebook-domain-verification" content="jtjhek2y2k1ie3q7z09pzfyqawydb4" />
        <meta itemProp="name" content="Digital dollars for Africans everywhere. "/>
        <meta itemProp="description" content="Send and receive digital dollars with anyone anywhere, make online payments and earn yield."/>
        <meta itemProp="image" content="/images/favicon.png"/>
        
        {/* <!-- Open Graph / Facebook --> */}  
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://facebook.com/moneymie/"/>
        <meta property="og:title" content="Digital dollars for Africans everywhere. "/>
        <meta property="og:description" content="Send and receive digital dollars with anyone anywhere, make online payments and earn yield."/>
        <meta property="og:image" content="/images/favicon.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://twitter.com/getMoneymie"/>
        <meta property="twitter:title" content="Digital dollars for Africans everywhere. "/>
        <meta property="twitter:description" content="Send and receive digital dollars with anyone anywhere, make online payments and earn yield."/>
        <meta property="twitter:image" content="/images/favicon.png"/>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
        <link rel="icon" href="/images/favicon.png" type="image/x-icon"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
        <meta
        name="description"
        content="Send and receive digital dollars with anyone anywhere, make online payments and earn yield."
        />
        <link rel="manifest" href="/images/manifest.json"/>
        <link rel="apple-touch-icon" href="/images/favicon.png"/>
        
      </Head>
      <div className="initdiv">
        {props.children}
      </div>
        </div>
  )
}
export default Layout;