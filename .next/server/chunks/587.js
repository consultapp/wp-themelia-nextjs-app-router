exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 4960:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 701, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23))

/***/ }),

/***/ 543:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "styles_loader__bu5BF",
	"spin": "styles_spin__GfjcW"
};


/***/ }),

/***/ 9317:
/***/ ((module) => {

// Exports
module.exports = {
	"line": "style_line__3KA3S"
};


/***/ }),

/***/ 6800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pagination)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/LoadingWheel/styles.module.css
var styles_module = __webpack_require__(543);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/LoadingWheel/LoadingWheel.jsx


function LoadingWheel() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).loader
    });
}

;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.jsx



function Pagination({ postsCount , pageIndex  }) {
    if (!postsCount) return /*#__PURE__*/ jsx_runtime_.jsx(LoadingWheel, {});
    const pageCount = Math.ceil(postsCount / 10);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navigation pagination",
        "aria-label": "Записи",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "screen-reader-text font-headlines",
                children: "Навигация по записям"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav-links",
                children: [
                    pageCount > 1 && pageIndex != 1 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "prev page-numbers",
                        href: `/posts/${pageIndex - 1}/`,
                        children: "← Ранее"
                    }, `pageIndex-${pageIndex - 1}`),
                    new Array(pageCount).fill(0).map((_, i)=>{
                        const page = i + 1;
                        return page === pageIndex ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-current": "page",
                            className: "page-numbers current",
                            children: pageIndex
                        }, `pageIndex-${page}`) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "page-numbers",
                            href: `/posts/${page}/`,
                            children: page
                        }, `pageIndex-${page}`);
                    }),
                    pageCount > 1 && pageIndex < pageCount && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "next page-numbers",
                        href: `/posts/${pageIndex + 1}/`,
                        children: "Далее →"
                    }, `pageIndex-${pageIndex + 1}`)
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Posts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/Author/Author.jsx
var Author = __webpack_require__(4721);
// EXTERNAL MODULE: ./src/components/PostShort/style.module.css
var style_module = __webpack_require__(9317);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/functions.js
var functions = __webpack_require__(8834);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(8875);
;// CONCATENATED MODULE: ./src/components/PostShort/PostShort.jsx






function PostShort({ post  }) {
    if (!post) return (0,navigation.redirect)("/404");
    const { id , excerpt , slug , title , date  } = post;
    const excerptRendered = (0,functions/* trimLinkReadNext */.vC)(excerpt?.rendered || "");
    const titleRendered = title?.rendered;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: id,
        className: `entry author-consultapp post type-post status-publish format-standard has-post-thumbnail category-stati ${(style_module_default()).line}`,
        itemScope: "itemScope",
        itemType: "http://schema.org/BlogPosting",
        itemProp: "blogPost",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Author/* default */.Z, {
                date: date
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "entry-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "entry-title font-headlines",
                    itemProp: "headline",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/post/${slug}`,
                        rel: "bookmark",
                        itemProp: "url",
                        dangerouslySetInnerHTML: {
                            __html: titleRendered
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "entry-summary",
                itemProp: "description",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: excerptRendered
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `/post/${slug}`,
                        className: "entry-more-link",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Читать далее"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "screen-reader-text",
                                children: titleRendered
                            })
                        ]
                    })
                ]
            })
        ]
    }, id);
}

;// CONCATENATED MODULE: ./src/components/Posts/Posts.jsx



function Posts({ posts  }) {
    if (!posts || !posts.length) return (0,navigation.redirect)("/404");
    return posts.map((post)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(PostShort, {
            post: post
        }, post.id);
    }).reverse();
}


/***/ })

};
;