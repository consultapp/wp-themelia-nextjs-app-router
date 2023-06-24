/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MAIN_TITLE: "ConsultApp.ru",
    SITE_BASE_URL: "https://consultapp.ru",
    API_BASE_URL: "https://consultapp.ru/wp-json/wp/v2/",
    POSTS_PER_PAGE: 10,
    SEARCH_PER_PAGE: 5,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
