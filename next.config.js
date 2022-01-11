module.exports = {
  reactStrictMode: true,
  compress:false,
  env:{
    API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    loader: "imgix",
    path: "",
  }
}
