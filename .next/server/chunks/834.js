"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 8834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FS": () => (/* binding */ getPostsCountApi),
/* harmony export */   "Hr": () => (/* binding */ getPostsBySlug),
/* harmony export */   "Oi": () => (/* binding */ getPostByPostIndexApi),
/* harmony export */   "VH": () => (/* binding */ getPostBySlugApi),
/* harmony export */   "Yi": () => (/* binding */ getPostsByPageIndex),
/* harmony export */   "hd": () => (/* binding */ getPageBySlugApi),
/* harmony export */   "it": () => (/* binding */ getPageBySlug),
/* harmony export */   "tm": () => (/* binding */ getPagesCount),
/* harmony export */   "vC": () => (/* binding */ trimLinkReadNext)
/* harmony export */ });
/* unused harmony export searchByText */
function trimLinkReadNext(str) {
    const regex = /<a.*entry-more-link.*\/a>/gi;
    const result = str.replace(regex, "");
    return result;
}
async function getPostsByPageIndex(pageIndex = 1) {
    if (true) {
        return await getPostByPostIndexApi(pageIndex);
    }
    const response = await fetch(`${window.location.origin}/api/postsByPageIndex?page=${pageIndex}`);
    return await response.json();
}
async function getPostsBySlug(slug) {
    if (true) {
        return await getPostBySlugApi(slug);
    }
    const response = await fetch(`/api/postBySlug?slug=${slug}`);
    return await response.json();
}
async function getPagesCount() {
    if (true) {
        return await getPostsCountApi();
    }
    const response = await fetch("/api/postsCount");
    return await response.json();
}
async function getPageBySlug(slug) {
    if (true) {
        return await getPageBySlugApi(slug);
    }
    const response = await fetch(`/api/pageBySlug?slug=${slug}`);
    return await response.json();
}
async function searchByText(text) {
    if (!text && !"undefined") {}
    const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    const response = await fetch(`/api/search?s=${text.replaceAll(regexp, "")}`);
    return await response.json();
}
async function getPageBySlugApi(slug) {
    const url = new URL("pages", "https://consultapp.ru/wp-json/wp/v2/");
    const fields = `id,title,content,date,link,slug,modified,author`;
    url.searchParams.set("_fields", fields);
    url.searchParams.set("slug", slug);
    const response = await fetch(url);
    return await response.json();
}
async function getPostBySlugApi(slug) {
    const url = new URL("posts", "https://consultapp.ru/wp-json/wp/v2/");
    url.searchParams.set("_fields", "id,title,categories,excerpt,date,link,type,slug,modified,content");
    url.searchParams.set("slug", slug);
    const response = await fetch(url);
    return await response.json();
}
async function getPostByPostIndexApi(pageIndex) {
    const url = new URL("posts", "https://consultapp.ru/wp-json/wp/v2/");
    url.searchParams.set("per_page", 10 || 0);
    url.searchParams.set("_fields", "id,title,categories,excerpt,date,link,type,slug,modified,content");
    url.searchParams.set("pageIndex", pageIndex);
    const response = await fetch(url);
    return await response.json();
}
async function getPostsCountApi() {
    const url = new URL("posts", "https://consultapp.ru/wp-json/wp/v2/");
    url.searchParams.set("_fields", "id");
    url.searchParams.set("per_page", "100");
    const response = await fetch(url);
    return await response.json();
}


/***/ })

};
;