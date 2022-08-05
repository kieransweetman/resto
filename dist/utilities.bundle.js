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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/utilities.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFpQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9yZXZpZXdzLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3V0aWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpdkdlbiwgcmVtb3ZlQ29udGVudCwgQmFubmVySW1hZ2UsIHN0eWxlciB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgbGV0IGJhbm5lckRpdiA9IGRpdkdlbigpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBiYW5uZXIgPSBCYW5uZXJJbWFnZSgpO1xyXG5cclxuICBzdHlsZXIoW1wiZmxleFwiLCBcImNvbnRlbnQtY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIl0sIGJhbm5lckRpdik7XHJcbiAgYmFubmVyRGl2LmFwcGVuZENoaWxkKGJhbm5lcik7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xyXG59O1xyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwidGVzdCBob21lLmpzXCIpO1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGEsXHJcbiAgbGksXHJcbiAgdWwsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBwLFxyXG4gIHN0eWxlcixcclxufSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBib2R5U3R5bGVzID0gW1xyXG4gICAgXCJjb250YWluZXJcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcImNvbnRlbnQtY2VudGVyXCIsXHJcbiAgICBcImp1c3RpZnktY2VudGVyXCIsXHJcbiAgICBcImdhcC00XCIsXHJcbiAgXTtcclxuXHJcbiAgbGV0IGdyaWRTdHlsZXMgPSBbXHJcbiAgICBcImdyaWRcIixcclxuICAgIFwic206Z3JpZC1jb2xzLTRcIixcclxuICAgIFwic206Z3JpZC1yb3dzLTFcIixcclxuICAgIFwiYmctc2xhdGUtMjAwXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICAgIFwiZ2FwLTVcIixcclxuICAgIFwiZ3JpZC1jb2xzLTFcIixcclxuICAgIFwiZ3JpZC1yb3dzLTRcIixcclxuICBdO1xyXG5cclxuICBsZXQgY2FyZFN0eWxlcyA9IFtcclxuICAgIFwicHgtM1wiLFxyXG4gICAgXCJweS0zXCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICAgIFwic2hhZG93XCIsXHJcbiAgICBcInRleHQtY2VudGVyXCIsXHJcbiAgICBcImJnLXNsYXRlLTcwMFwiLFxyXG4gIF07XHJcblxyXG4gIGxldCBib2R5ID0gZGl2R2VuKFwiYm9keVwiLCBib2R5U3R5bGVzKTtcclxuICBsZXQgdGl0bGVTdHlsZXMgPSBbXCJ0ZXh0LWNlbnRlclwiXTtcclxuICBsZXQgdGl0bGUgPSBkaXZHZW4oXCJ0aXRsZS5pbmZvXCIsIHRpdGxlU3R5bGVzKTtcclxuICBsZXQgZ3JpZCA9IGRpdkdlbihcImNhcmRzXCIsIGdyaWRTdHlsZXMpO1xyXG4gIGxldCBjYXJkcyA9IFtkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKV07XHJcblxyXG4gIC8vdGl0bGUgc2V0dGluZ3NcclxuICBsZXQgbWVudVRpdGxlID0gaDIoXCJPaGF5byBSYW1lbiBNZW51XCIpO1xyXG4gIGxldCBtZW51RGVzYyA9IHAoXHJcbiAgICBcIk91ciBicm90aHMgYXJlIG1hZGUgd2l0aCB0aW1lIGFuZCBsb3ZlIHRvIHByb2R1Y2UgdGhlIG1vc3QgVW1hbWktZXNxdWUgZmxhdm9ycyB5b3Ugd2lsbCBldmVyIHRhc3RlXCJcclxuICApO1xyXG5cclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcclxuXHJcbiAgLy8gY2FyZCBnZW5lcmF0b3JcclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID1cclxuICAgICAgXCJodHRwczovL2Zsb3diaXRlLnMzLmFtYXpvbmF3cy5jb20vYmxvY2tzL21hcmtldGluZy11aS9hdmF0YXJzL2Jvbm5pZS1ncmVlbi5wbmdcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gZGl2R2VuKCk7XHJcblxyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChoMihcIlRvbmt1dHN1IFJhbWVuXCIpKTtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHAoXHJcbiAgICAgICAgXCJBIHBvcmMgcmljaCBicm90aCAtIFNlcnZlZCB3aXRoIGJyYWlzZWQgcG9yYywgdmVnZ2llcywgMSBwb2FjaGVkIGVnZyBhbmQgZWdnIG5vb2RsZXNcIlxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgY2FyZC5pZCA9IFwiY2FyZFwiO1xyXG4gICAgc3R5bGVyKGNhcmRTdHlsZXMsIGNhcmQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkb20gbWFuaXBcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJyZXZpZXdzLmpzIHRlc3RcIik7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLmpwZ1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9pbWFnZXMvYmFubmVyLnBuZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XHJcbmltcG9ydCAqIGFzIG1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0ICogYXMgcmV2aWV3cyBmcm9tIFwiLi4vcGFnZXMvcmV2aWV3c1wiO1xyXG5pbXBvcnQgKiBhcyBob21lIGZyb20gXCIuLi9wYWdlcy9ob21lXCI7XHJcblxyXG5jb25zdCBkaXZHZW4gPSAoSUQsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBkaXYuaWQgPSBJRDtcclxuICBzdHlsZXIoY2xhc3NTdHlsZXMsIGRpdik7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IE5hdiA9IChuYXZTdHlsZXMpID0+IHtcclxuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cclxuICBzdHlsZXIobmF2U3R5bGVzLCBlbCk7XHJcblxyXG4gIHJldHVybiBlbDtcclxufTtcclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICBjb25zdCByYW1lbkxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wiaC0xMFwiLCBcIm1yLTNcIiwgXCJzbTpoLTE0XCJdO1xyXG4gIHN0eWxlcihzdHlsZXMsIHJhbWVuTG9nbyk7XHJcblxyXG4gIHJhbWVuTG9nby5zcmMgPSBMb2dvO1xyXG5cclxuICByZXR1cm4gcmFtZW5Mb2dvO1xyXG59O1xyXG5cclxuY29uc3QgQmFubmVySW1hZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFubmVyID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcIm9iamVjdC1maWxsXCJdO1xyXG4gIHN0eWxlcihzdHlsZXMsIGJhbm5lcik7XHJcblxyXG4gIGJhbm5lci5zcmMgPSBCYW5uZXI7XHJcblxyXG4gIHJldHVybiBiYW5uZXI7XHJcbn07XHJcblxyXG5jb25zdCBhID0gKGhyZWYgPSBcIlwiLCB0ZXh0Y29udGVudCA9IFwiXCIsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gaHJlZjtcclxuICBhLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcbiAgc3R5bGVyKGNsYXNzU3R5bGVzLCBhKTtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5jb25zdCBsaSA9ICgpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG59O1xyXG5cclxuY29uc3QgdWwgPSAoY291bnQgPSAwLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbGkoKTtcclxuICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICBzdHlsZXIoY2xhc3NTdHlsZXMsIHVsKTtcclxuXHJcbiAgcmV0dXJuIHVsO1xyXG59O1xyXG5cclxuY29uc3QgSHIgPSAoY3NzKSA9PiB7XHJcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIGhyO1xyXG4gIH1cclxuXHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBoci5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGhyO1xyXG59O1xyXG5cclxuY29uc3Qgc3BhbiA9ICh0ZXh0ID0gXCJcIiwgY3NzKSA9PiB7XHJcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgc3R5bGVyKGNzcywgc3Bhbik7XHJcblxyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgdGFiQnV0dG9uID0gKHRleHQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGJ0bi5pZCA9IGAke3RleHR9LXRhYmA7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgc3R5bGVyKGNsYXNzU3R5bGVzLCBidG4pO1xyXG4gIHJldHVybiBidG47XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVDb250ZW50ID0gKHdyYXBwZXIpID0+IHtcclxuICB3cmFwcGVyLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaDIgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBoMjtcclxufTtcclxuXHJcbmNvbnN0IHAgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VyID0gKGlkKSA9PiB7XHJcbiAgaWYgKGlkLmluY2x1ZGVzKFwiaG9tZVwiKSkge1xyXG4gICAgaG9tZS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJtZW51XCIpKSB7XHJcbiAgICBtZW51LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcImFib3V0XCIpKSB7XHJcbiAgICBhYm91dC5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXZpZXdzLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVyID0gKGxpc3QgPSBbXSwgZWxlbWVudCkgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgbGlzdCA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBsaXN0ID09IFwic3RyaW5nXCJcclxuICAgID8gZWxlbWVudFxyXG4gICAgOiBsaXN0LmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGRpdkdlbixcclxuICBsb2dvLFxyXG4gIHVsLFxyXG4gIGxpLFxyXG4gIGEsXHJcbiAgcCxcclxuICBIcixcclxuICBzcGFuLFxyXG4gIHRhYkJ1dHRvbixcclxuICBwYXJzZXIsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBCYW5uZXJJbWFnZSxcclxuICBzdHlsZXIsXHJcbiAgTmF2LFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlscy91dGlsaXRpZXMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=