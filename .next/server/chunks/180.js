exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 2218:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 4625:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23))

/***/ }),

/***/ 4901:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7152));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8131))

/***/ }),

/***/ 8131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MenuContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Menu/style.module.scss
var style_module = __webpack_require__(6179);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/Menu/Menu.jsx



function Menu({ isOpen , toggleButton  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "menu menu-primary font-secondary",
        role: "navigation",
        id: "menu-primary",
        itemScope: "itemScope",
        itemType: "http://schema.org/SiteNavigationElement",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                id: "menu-toggle",
                className: `menu-toggle hamburger hamburger--spin main-menu-btn is-not-active font-secondary ${(style_module_default()).buttonHamburger}`,
                type: "button",
                onClick: ()=>{
                    toggleButton(isOpen);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "hamburger-box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hamburger-inner"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "screen-reader-text",
                        children: "Menu"
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                id: "menu-primary-items",
                className: "menu-items sm sm-simple",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-item menu-item-type-post_type menu-item-object-page",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/page/projects-react-next/",
                            children: "React/Next"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-item menu-item-type-taxonomy menu-item-object-category",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/post/simple-bot-for-telegram-php/",
                            children: "Telegram Bots"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-item menu-item-type-post_type menu-item-object-post",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/post/%d1%85%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b3/",
                            children: "Хостинг"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-item menu-item-type-custom menu-item-object-custom",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:info@consultapp.ru",
                            children: "info@consultapp.ru"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/client/Menu/Menu.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const words = (/* unused pure expression or super */ null && ([
    "mobile",
    "iphone",
    "android"
]));
function isMobile() {
    if (false) {}
    return false;
}
function MenuContainer() {
    const pathname = (0,navigation.usePathname)();
    const isMobileDevice = (0,react_.useMemo)(isMobile, []);
    const [isOpen, setIsOpen] = (0,react_.useState)(!isMobileDevice);
    const toggleButton = (0,react_.useCallback)((flag)=>{
        setIsOpen(!flag);
    }, []);
    (0,react_.useLayoutEffect)(()=>{
        if (isMobileDevice && isOpen) {
            setIsOpen(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
        isOpen: isOpen,
        toggleButton: toggleButton
    });
}


/***/ }),

/***/ 7152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/constants/index.js
const LOADING_STATUS = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected",
    idle: "idle"
};

// EXTERNAL MODULE: ./src/components/LoadingWheel/styles.module.css
var styles_module = __webpack_require__(2876);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/LoadingWheel/LoadingWheel.jsx


function LoadingWheel() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).loader
    });
}

// EXTERNAL MODULE: ./src/components/Plugins/style.module.css
var style_module = __webpack_require__(4611);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./src/components/Plugins/Search.jsx





function Search({ result , search , handleSearchChange  }) {
    const { loadingStatus , data  } = result;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "search-2",
        className: "widget widget_search",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            role: "search",
            className: "search-form",
            action: "/",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "font-secondary label-search",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "screen-reader-text",
                            children: "Поиск:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "search",
                            className: "search-field font-primary",
                            placeholder: "Поиск…",
                            value: search,
                            onChange: handleSearchChange
                        })
                    ]
                }),
                data.length > 0 && loadingStatus === LOADING_STATUS.fulfilled && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (style_module_default()).search,
                    children: data.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (style_module_default()).searchLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.url,
                                children: item.title
                            })
                        }, item.url);
                    })
                }),
                data.length === 0 && loadingStatus === LOADING_STATUS.fulfilled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).search,
                    children: "No results"
                }),
                loadingStatus === LOADING_STATUS.pending && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).search,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingWheel, {})
                }),
                loadingStatus === LOADING_STATUS.rejected && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).search,
                    children: "Loading error."
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/utils/functions.js
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

;// CONCATENATED MODULE: ./src/client/Search/Search.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const initialState = {
    loadingStatus: LOADING_STATUS.idle,
    data: []
};
function SearchContainer() {
    const [search, setSearch] = (0,react_.useState)("");
    const [result, setResult] = (0,react_.useState)(initialState);
    const pathname = (0,navigation.usePathname)();
    const timer = (0,react_.useRef)();
    const handleSearchChange = (0,react_.useCallback)((event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }, []);
    (0,react_.useEffect)(()=>{
        if (search.length < 1) {
            if (timer) clearTimeout(timer.current);
            setResult(initialState);
            return;
        }
        if (timer) clearTimeout(timer.current);
        setResult({
            ...initialState,
            loadingStatus: LOADING_STATUS.pending
        });
        timer.current = setTimeout(()=>{
            searchByText(search).then((data)=>{
                setResult({
                    data,
                    loadingStatus: LOADING_STATUS.fulfilled
                });
            }).catch(()=>{
                setResult({
                    ...initialState,
                    loadingStatus: LOADING_STATUS.rejected
                });
            });
        }, 300);
    }, [
        search
    ]);
    (0,react_.useEffect)(()=>{
        setResult(initialState);
        setSearch("");
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Search, {
        handleSearchChange: handleSearchChange,
        search: search,
        result: result
    });
}


/***/ }),

/***/ 2876:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "styles_loader__bu5BF",
	"spin": "styles_spin__GfjcW"
};


/***/ }),

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "style_search__HIje6",
	"searchLi": "style_searchLi__GH0k_"
};


/***/ }),

/***/ 6179:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonHamburger": "style_buttonHamburger___AMU6"
};


/***/ }),

/***/ 2010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(913);
// EXTERNAL MODULE: ./src/css/unsemantic.css
var unsemantic = __webpack_require__(1578);
;// CONCATENATED MODULE: ./src/components/MainArea/MainArea.jsx

function MainArea({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        id: "content",
        className: "content grid-70 tablet-grid-66",
        role: "main",
        tabIndex: "-1",
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/client/Search/Search.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/dmitry/Projects/Next/wp-themelia-nextjs-app-router/src/client/Search/Search.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Search = (__default__);
;// CONCATENATED MODULE: ./src/components/Plugins/About.jsx

function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "block-2",
                className: "widget widget_block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "font-headlines",
                    children: "О нас"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "block-3",
                className: "widget widget_block widget_text",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Мы занимаемся автоматизацией бизнес-процессов и сопровождением информационных систем. Если есть вопросы, желание поговорить о Вашем проекте или интерес к сотрудничеству — пишите\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:info@consultapp.ru",
                            children: "info@consultapp.ru"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.jsx



function Sidebar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "sidebar sidebar-primary grid-30 tablet-grid-33",
        role: "complementary",
        id: "sidebar-primary",
        "aria-label": "Primary Sidebar",
        itemScope: "itemscope",
        itemType: "http://schema.org/WPSideBar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                id: "sidebar-primary-title",
                className: "screen-reader-text font-headlines",
                children: "Sidebar"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Search, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sidebar-inner"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Workarea/Workarea.jsx



function Workarea({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "main",
        className: "main",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid-100 grid-parent main-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MainArea, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/client/Menu/Menu.jsx

const Menu_proxy = (0,module_proxy.createProxy)(String.raw`/Users/dmitry/Projects/Next/wp-themelia-nextjs-app-router/src/client/Menu/Menu.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Menu_esModule, $$typeof: Menu_$$typeof } = Menu_proxy;
const Menu_default_ = Menu_proxy.default;


/* harmony default export */ const Menu = (Menu_default_);
;// CONCATENATED MODULE: ./src/components/Header/Header.jsx



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "header",
        className: "site-header",
        role: "banner",
        itemScope: "itemScope",
        itemType: "http://schema.org/WPHeader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "branding",
            className: "site-branding grid-container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "access",
                className: "site-access grid-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "access-inner",
                    className: "access-inner relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "site-title-wrap clearfix",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "branding-item-wrap flex-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "titles-wrap branding-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            id: "site-title",
                                            className: "site-title",
                                            itemProp: "headline",
                                            children: "ConsultApp.ru"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            id: "site-description",
                                            className: "site-description font-primary",
                                            itemProp: "description",
                                            children: "Автоматизация бизнес-процессов, сопровождение информационных систем"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        className: "site-footer",
        role: "contentinfo",
        itemScope: "itemscope",
        itemType: "http://schema.org/WPFooter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid-container site-footer-inner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "site-footer-01",
                    children: [
                        "Напишите нам:",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:info@consultapp.ru",
                            children: "info@consultapp.ru"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-02",
                    children: `© 2016-${new Date().getFullYear()} consultapp.ru`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "\xa0"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Next.js | Wordpress Headless | Themelia",
    description: "Theme Themelia for Wordpress - Next.js/React SSR"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Workarea, {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "404 | Page not found"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: "Got to main."
            })
        ]
    });
}


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 913:
/***/ (() => {



/***/ }),

/***/ 1578:
/***/ (() => {



/***/ })

};
;