module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  imagesDir: "images",
  shortName: "Austin L",
  siteTitle: "Austin Lanari", // Site title.
  siteTitleAlt: "Austin Lanari's Professional Site", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://austinlanari.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Coding and comics and comics and coding.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-110790727-2", // GA tracking ID.
  disqusShortname: "personal-site-4", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Austin Lanari", // Username to display in the author segment.
  userTwitter: "AustinLanari", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Long Island, NY", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Coding and comics and comics and coding.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/austin-lanari/",
      iconClassName: "fab fa-linkedin"
    },
    {
      label: "GitHub",
      url: "https://github.com/foggy1",
      iconClassName: "fab fa-github-alt"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/AustinLanari",
      iconClassName: "fab fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:austin.lanari@gmail.com",
      iconClassName: "fas fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Austin Lanari", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
