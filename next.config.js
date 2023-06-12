/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    SITE_BASE_URL: "https://consultapp.ru",
    API_BASE_URL: "https://consultapp.ru/wp-json/wp/v2/",
    POSTS_PER_PAGE: 10,
    SEARCH_PER_PAGE: 5,
  },
};

module.exports = nextConfig;

// experimental: {
//   appDir: false,
// },