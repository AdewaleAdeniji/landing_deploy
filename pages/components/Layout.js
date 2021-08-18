import React from 'react';
import Head from 'next/head';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>{props.pageTitle}</title>
        <title>Moneymie, digital bank for African migrants</title>
        <meta name="title" content="Moneymie, digital bank for African migrants"/>
        <meta name="description" content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."/>
        <meta itemProp="name" content="Moneymie, digital bank for African migrants"/>
        <meta itemProp="description" content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."/>
        <meta itemProp="image" content="/images/favicon.png"/>


        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://facebook.com/moneymie/"/>
        <meta property="og:title" content="Moneymie, digital bank for African migrants"/>
        <meta property="og:description" content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."/>
        <meta property="og:image" content="/images/favicon.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://twitter.com/getMoneymie"/>
        <meta property="twitter:title" content="Moneymie, digital bank for African migrants"/>
        <meta property="twitter:description" content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."/>
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
        content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."
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