const targetAddress = new URL(
  process.env.TARGET_ADDRESS || `http://blog.rsmb.tv`
);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rsmb.tv",
    title: "rsmbtv",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
        region: process.env.AWS_REGION,
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
        acl: null,
        params: {},
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
  ],
};
