/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContent": () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./src/utils/utilities.js");


const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  let bannerDiv = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

  let banner = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.BannerImage)();

  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.styler)(["flex", "content-center", "justify-center"], bannerDiv);
  bannerDiv.appendChild(banner);
  wrapper.appendChild(bannerDiv);
};



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContent": () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./src/utils/utilities.js");


const displayContent = () => {
  console.log("test home.js");
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);
};




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContent": () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./src/utils/utilities.js");


const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

  let bodyStyles = [
    "container",
    "mx-auto",
    "flex",
    "flex-col",
    "content-center",
    "justify-center",
    "gap-4",
  ];

  let gridStyles = [
    "grid",
    "sm:grid-cols-4",
    "sm:grid-rows-1",
    "bg-slate-200",
    "mx-auto",
    "gap-5",
    "grid-cols-1",
    "grid-rows-4",
  ];

  let cardStyles = [
    "px-3",
    "py-3",
    "items-center",
    "flex",
    "flex-col",
    "rounded-lg",
    "shadow",
    "text-center",
    "bg-slate-700",
  ];

  let body = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)("body", bodyStyles);
  let titleStyles = ["text-center"];
  let title = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)("title.info", titleStyles);
  let grid = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)("cards", gridStyles);
  let cards = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)()];

  //title settings
  let menuTitle = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
  let menuDesc = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
    "Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste"
  );

  title.appendChild(menuTitle);
  title.appendChild(menuDesc);

  // card generator
  cards.forEach((card) => {
    const image = new Image();
    image.src =
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png";
    card.appendChild(image);

    let text = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();

    text.appendChild((0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Tonkutsu Ramen"));
    text.appendChild(
      (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
        "A porc rich broth - Served with braised porc, veggies, 1 poached egg and egg noodles"
      )
    );

    card.appendChild(text);

    card.id = "card";
    (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.styler)(cardStyles, card);
  });

  // dom manip

  cards.forEach((card) => {
    grid.appendChild(card);
  });
  body.appendChild(title);
  body.appendChild(grid);
  wrapper.appendChild(body);
};




/***/ }),

/***/ "./src/pages/reviews.js":
/*!******************************!*\
  !*** ./src/pages/reviews.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContent": () => (/* binding */ displayContent)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./src/utils/utilities.js");

const displayContent = () => {
  console.log("reviews.js test");
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);
};




/***/ }),

/***/ "./src/utils/utilities.js":
/*!********************************!*\
  !*** ./src/utils/utilities.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerImage": () => (/* binding */ BannerImage),
/* harmony export */   "Hr": () => (/* binding */ Hr),
/* harmony export */   "Nav": () => (/* binding */ Nav),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "divGen": () => (/* binding */ divGen),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "li": () => (/* binding */ li),
/* harmony export */   "logo": () => (/* binding */ logo),
/* harmony export */   "p": () => (/* binding */ p),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "removeContent": () => (/* binding */ removeContent),
/* harmony export */   "span": () => (/* binding */ span),
/* harmony export */   "styler": () => (/* binding */ styler),
/* harmony export */   "tabButton": () => (/* binding */ tabButton),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.jpg */ "./src/images/logo.jpg");
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banner.png */ "./src/images/banner.png");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/reviews */ "./src/pages/reviews.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");








const divGen = (ID, classStyles = []) => {
  const div = document.createElement("div");

  div.id = ID;
  styler(classStyles, div);
  return div;
};

const Nav = (navStyles) => {
  let el = document.createElement("nav");

  styler(navStyles, el);

  return el;
};
const logo = () => {
  const ramenLogo = new Image();
  let styles = ["h-10", "mr-3", "sm:h-14"];
  styler(styles, ramenLogo);

  ramenLogo.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;

  return ramenLogo;
};

const BannerImage = () => {
  const banner = new Image();
  let styles = ["object-fill"];
  styler(styles, banner);

  banner.src = _images_banner_png__WEBPACK_IMPORTED_MODULE_1__;

  return banner;
};

const a = (href = "", textcontent = "", classStyles = []) => {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = textcontent;
  styler(classStyles, a);

  return a;
};

const li = () => {
  return document.createElement("li");
};

const ul = (count = 0, classStyles = []) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const list = li();
    list.id = i;
    ul.appendChild(list);
  }

  styler(classStyles, ul);

  return ul;
};

const Hr = (css) => {
  const hr = document.createElement("hr");
  if (css.lenght <= 0) {
    return hr;
  }

  css.forEach((style) => {
    hr.classList.add(style);
  });

  return hr;
};

const span = (text = "", css) => {
  let span = document.createElement("span");

  span.textContent = text;
  styler(css, span);

  return span;
};

const tabButton = (text = "", classStyles = []) => {
  const btn = document.createElement("button");

  btn.type = "button";
  btn.id = `${text}-tab`;
  btn.textContent = text;

  styler(classStyles, btn);
  return btn;
};

const removeContent = (wrapper) => {
  wrapper.childNodes.forEach((child) => {
    child.remove();
  });
};

const h2 = (text = "") => {
  let h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
};

const p = (text = "") => {
  let p = document.createElement("p");
  p.textContent = text;
  return p;
};

const parser = (id) => {
  if (id.includes("home")) {
    _pages_home__WEBPACK_IMPORTED_MODULE_5__.displayContent();
  } else if (id.includes("menu")) {
    _pages_menu__WEBPACK_IMPORTED_MODULE_3__.displayContent();
  } else if (id.includes("about")) {
    _pages_about__WEBPACK_IMPORTED_MODULE_2__.displayContent();
  } else {
    _pages_reviews__WEBPACK_IMPORTED_MODULE_4__.displayContent();
  }
};

const styler = (list = [], element) => {
  return typeof list == "undefined" || typeof list == "string"
    ? element
    : list.forEach((style) => {
        element.classList.add(style);
      });
};




/***/ }),

/***/ "./src/images/banner.png":
/*!*******************************!*\
  !*** ./src/images/banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "324ebe218fd7b5ff61d7.png";

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1428051c80982c0b3455.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/home.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBaUJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXZHZW4sIHJlbW92ZUNvbnRlbnQsIEJhbm5lckltYWdlLCBzdHlsZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIGxldCBiYW5uZXJEaXYgPSBkaXZHZW4oKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICBsZXQgYmFubmVyID0gQmFubmVySW1hZ2UoKTtcclxuXHJcbiAgc3R5bGVyKFtcImZsZXhcIiwgXCJjb250ZW50LWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLCBiYW5uZXJEaXYpO1xyXG4gIGJhbm5lckRpdi5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYmFubmVyRGl2KTtcclxufTtcclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHsgZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInRlc3QgaG9tZS5qc1wiKTtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQge1xyXG4gIGRpdkdlbixcclxuICBhLFxyXG4gIGxpLFxyXG4gIHVsLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgcCxcclxuICBzdHlsZXIsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICBsZXQgYm9keVN0eWxlcyA9IFtcclxuICAgIFwiY29udGFpbmVyXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJjb250ZW50LWNlbnRlclwiLFxyXG4gICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gIF07XHJcblxyXG4gIGxldCBncmlkU3R5bGVzID0gW1xyXG4gICAgXCJncmlkXCIsXHJcbiAgICBcInNtOmdyaWQtY29scy00XCIsXHJcbiAgICBcInNtOmdyaWQtcm93cy0xXCIsXHJcbiAgICBcImJnLXNsYXRlLTIwMFwiLFxyXG4gICAgXCJteC1hdXRvXCIsXHJcbiAgICBcImdhcC01XCIsXHJcbiAgICBcImdyaWQtY29scy0xXCIsXHJcbiAgICBcImdyaWQtcm93cy00XCIsXHJcbiAgXTtcclxuXHJcbiAgbGV0IGNhcmRTdHlsZXMgPSBbXHJcbiAgICBcInB4LTNcIixcclxuICAgIFwicHktM1wiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcInNoYWRvd1wiLFxyXG4gICAgXCJ0ZXh0LWNlbnRlclwiLFxyXG4gICAgXCJiZy1zbGF0ZS03MDBcIixcclxuICBdO1xyXG5cclxuICBsZXQgYm9keSA9IGRpdkdlbihcImJvZHlcIiwgYm9keVN0eWxlcyk7XHJcbiAgbGV0IHRpdGxlU3R5bGVzID0gW1widGV4dC1jZW50ZXJcIl07XHJcbiAgbGV0IHRpdGxlID0gZGl2R2VuKFwidGl0bGUuaW5mb1wiLCB0aXRsZVN0eWxlcyk7XHJcbiAgbGV0IGdyaWQgPSBkaXZHZW4oXCJjYXJkc1wiLCBncmlkU3R5bGVzKTtcclxuICBsZXQgY2FyZHMgPSBbZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCldO1xyXG5cclxuICAvL3RpdGxlIHNldHRpbmdzXHJcbiAgbGV0IG1lbnVUaXRsZSA9IGgyKFwiT2hheW8gUmFtZW4gTWVudVwiKTtcclxuICBsZXQgbWVudURlc2MgPSBwKFxyXG4gICAgXCJPdXIgYnJvdGhzIGFyZSBtYWRlIHdpdGggdGltZSBhbmQgbG92ZSB0byBwcm9kdWNlIHRoZSBtb3N0IFVtYW1pLWVzcXVlIGZsYXZvcnMgeW91IHdpbGwgZXZlciB0YXN0ZVwiXHJcbiAgKTtcclxuXHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51RGVzYyk7XHJcblxyXG4gIC8vIGNhcmQgZ2VuZXJhdG9yXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9mbG93Yml0ZS5zMy5hbWF6b25hd3MuY29tL2Jsb2Nrcy9tYXJrZXRpbmctdWkvYXZhdGFycy9ib25uaWUtZ3JlZW4ucG5nXCI7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRpdkdlbigpO1xyXG5cclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoaDIoXCJUb25rdXRzdSBSYW1lblwiKSk7XHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKFxyXG4gICAgICBwKFxyXG4gICAgICAgIFwiQSBwb3JjIHJpY2ggYnJvdGggLSBTZXJ2ZWQgd2l0aCBicmFpc2VkIHBvcmMsIHZlZ2dpZXMsIDEgcG9hY2hlZCBlZ2cgYW5kIGVnZyBub29kbGVzXCJcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICAgIGNhcmQuaWQgPSBcImNhcmRcIjtcclxuICAgIHN0eWxlcihjYXJkU3R5bGVzLCBjYXJkKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZG9tIG1hbmlwXHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvZHkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHsgZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmV2aWV3cy5qcyB0ZXN0XCIpO1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCBMb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nby5qcGdcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vaW1hZ2VzL2Jhbm5lci5wbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5pbXBvcnQgKiBhcyBtZW51IGZyb20gXCIuLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCAqIGFzIHJldmlld3MgZnJvbSBcIi4uL3BhZ2VzL3Jldmlld3NcIjtcclxuaW1wb3J0ICogYXMgaG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiO1xyXG5cclxuY29uc3QgZGl2R2VuID0gKElELCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZGl2LmlkID0gSUQ7XHJcbiAgc3R5bGVyKGNsYXNzU3R5bGVzLCBkaXYpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAobmF2U3R5bGVzKSA9PiB7XHJcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHJcbiAgc3R5bGVyKG5hdlN0eWxlcywgZWwpO1xyXG5cclxuICByZXR1cm4gZWw7XHJcbn07XHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFtZW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcImgtMTBcIiwgXCJtci0zXCIsIFwic206aC0xNFwiXTtcclxuICBzdHlsZXIoc3R5bGVzLCByYW1lbkxvZ28pO1xyXG5cclxuICByYW1lbkxvZ28uc3JjID0gTG9nbztcclxuXHJcbiAgcmV0dXJuIHJhbWVuTG9nbztcclxufTtcclxuXHJcbmNvbnN0IEJhbm5lckltYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJvYmplY3QtZmlsbFwiXTtcclxuICBzdHlsZXIoc3R5bGVzLCBiYW5uZXIpO1xyXG5cclxuICBiYW5uZXIuc3JjID0gQmFubmVyO1xyXG5cclxuICByZXR1cm4gYmFubmVyO1xyXG59O1xyXG5cclxuY29uc3QgYSA9IChocmVmID0gXCJcIiwgdGV4dGNvbnRlbnQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IGhyZWY7XHJcbiAgYS50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG4gIHN0eWxlcihjbGFzc1N0eWxlcywgYSk7XHJcblxyXG4gIHJldHVybiBhO1xyXG59O1xyXG5cclxuY29uc3QgbGkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHVsID0gKGNvdW50ID0gMCwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgbGlzdCA9IGxpKCk7XHJcbiAgICBsaXN0LmlkID0gaTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVyKGNsYXNzU3R5bGVzLCB1bCk7XHJcblxyXG4gIHJldHVybiB1bDtcclxufTtcclxuXHJcbmNvbnN0IEhyID0gKGNzcykgPT4ge1xyXG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBocjtcclxuICB9XHJcblxyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgaHIuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBocjtcclxufTtcclxuXHJcbmNvbnN0IHNwYW4gPSAodGV4dCA9IFwiXCIsIGNzcykgPT4ge1xyXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHN0eWxlcihjc3MsIHNwYW4pO1xyXG5cclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IHRhYkJ1dHRvbiA9ICh0ZXh0ID0gXCJcIiwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICBidG4uaWQgPSBgJHt0ZXh0fS10YWJgO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIHN0eWxlcihjbGFzc1N0eWxlcywgYnRuKTtcclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICh3cmFwcGVyKSA9PiB7XHJcbiAgd3JhcHBlci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjaGlsZC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGgyID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaDI7XHJcbn07XHJcblxyXG5jb25zdCBwID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gcDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlciA9IChpZCkgPT4ge1xyXG4gIGlmIChpZC5pbmNsdWRlcyhcImhvbWVcIikpIHtcclxuICAgIGhvbWUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwibWVudVwiKSkge1xyXG4gICAgbWVudS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJhYm91dFwiKSkge1xyXG4gICAgYWJvdXQuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV2aWV3cy5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHN0eWxlciA9IChsaXN0ID0gW10sIGVsZW1lbnQpID0+IHtcclxuICByZXR1cm4gdHlwZW9mIGxpc3QgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgbGlzdCA9PSBcInN0cmluZ1wiXHJcbiAgICA/IGVsZW1lbnRcclxuICAgIDogbGlzdC5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgbG9nbyxcclxuICB1bCxcclxuICBsaSxcclxuICBhLFxyXG4gIHAsXHJcbiAgSHIsXHJcbiAgc3BhbixcclxuICB0YWJCdXR0b24sXHJcbiAgcGFyc2VyLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgQmFubmVySW1hZ2UsXHJcbiAgc3R5bGVyLFxyXG4gIE5hdixcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaG9tZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==