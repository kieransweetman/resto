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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/about.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQWlCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvdXRpbHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGl2R2VuLCByZW1vdmVDb250ZW50LCBCYW5uZXJJbWFnZSwgc3R5bGVyIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICBsZXQgYmFubmVyRGl2ID0gZGl2R2VuKCk7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJhbm5lciA9IEJhbm5lckltYWdlKCk7XHJcblxyXG4gIHN0eWxlcihbXCJmbGV4XCIsIFwiY29udGVudC1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiXSwgYmFubmVyRGl2KTtcclxuICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoYmFubmVyKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJhbm5lckRpdik7XHJcbn07XHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ0ZXN0IGhvbWUuanNcIik7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgYSxcclxuICBsaSxcclxuICB1bCxcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIHAsXHJcbiAgc3R5bGVyLFxyXG59IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJvZHlTdHlsZXMgPSBbXHJcbiAgICBcImNvbnRhaW5lclwiLFxyXG4gICAgXCJteC1hdXRvXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwiY29udGVudC1jZW50ZXJcIixcclxuICAgIFwianVzdGlmeS1jZW50ZXJcIixcclxuICAgIFwiZ2FwLTRcIixcclxuICBdO1xyXG5cclxuICBsZXQgZ3JpZFN0eWxlcyA9IFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJzbTpncmlkLWNvbHMtNFwiLFxyXG4gICAgXCJzbTpncmlkLXJvd3MtMVwiLFxyXG4gICAgXCJiZy1zbGF0ZS0yMDBcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gICAgXCJnYXAtNVwiLFxyXG4gICAgXCJncmlkLWNvbHMtMVwiLFxyXG4gICAgXCJncmlkLXJvd3MtNFwiLFxyXG4gIF07XHJcblxyXG4gIGxldCBjYXJkU3R5bGVzID0gW1xyXG4gICAgXCJweC0zXCIsXHJcbiAgICBcInB5LTNcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJzaGFkb3dcIixcclxuICAgIFwidGV4dC1jZW50ZXJcIixcclxuICAgIFwiYmctc2xhdGUtNzAwXCIsXHJcbiAgXTtcclxuXHJcbiAgbGV0IGJvZHkgPSBkaXZHZW4oXCJib2R5XCIsIGJvZHlTdHlsZXMpO1xyXG4gIGxldCB0aXRsZVN0eWxlcyA9IFtcInRleHQtY2VudGVyXCJdO1xyXG4gIGxldCB0aXRsZSA9IGRpdkdlbihcInRpdGxlLmluZm9cIiwgdGl0bGVTdHlsZXMpO1xyXG4gIGxldCBncmlkID0gZGl2R2VuKFwiY2FyZHNcIiwgZ3JpZFN0eWxlcyk7XHJcbiAgbGV0IGNhcmRzID0gW2RpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpXTtcclxuXHJcbiAgLy90aXRsZSBzZXR0aW5nc1xyXG4gIGxldCBtZW51VGl0bGUgPSBoMihcIk9oYXlvIFJhbWVuIE1lbnVcIik7XHJcbiAgbGV0IG1lbnVEZXNjID0gcChcclxuICAgIFwiT3VyIGJyb3RocyBhcmUgbWFkZSB3aXRoIHRpbWUgYW5kIGxvdmUgdG8gcHJvZHVjZSB0aGUgbW9zdCBVbWFtaS1lc3F1ZSBmbGF2b3JzIHlvdSB3aWxsIGV2ZXIgdGFzdGVcIlxyXG4gICk7XHJcblxyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xyXG5cclxuICAvLyBjYXJkIGdlbmVyYXRvclxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPVxyXG4gICAgICBcImh0dHBzOi8vZmxvd2JpdGUuczMuYW1hem9uYXdzLmNvbS9ibG9ja3MvbWFya2V0aW5nLXVpL2F2YXRhcnMvYm9ubmllLWdyZWVuLnBuZ1wiO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgbGV0IHRleHQgPSBkaXZHZW4oKTtcclxuXHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGgyKFwiVG9ua3V0c3UgUmFtZW5cIikpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChcclxuICAgICAgcChcclxuICAgICAgICBcIkEgcG9yYyByaWNoIGJyb3RoIC0gU2VydmVkIHdpdGggYnJhaXNlZCBwb3JjLCB2ZWdnaWVzLCAxIHBvYWNoZWQgZWdnIGFuZCBlZ2cgbm9vZGxlc1wiXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICBjYXJkLmlkID0gXCJjYXJkXCI7XHJcbiAgICBzdHlsZXIoY2FyZFN0eWxlcywgY2FyZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRvbSBtYW5pcFxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInJldmlld3MuanMgdGVzdFwiKTtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uanBnXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2ltYWdlcy9iYW5uZXIucG5nXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tIFwiLi4vcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgKiBhcyByZXZpZXdzIGZyb20gXCIuLi9wYWdlcy9yZXZpZXdzXCI7XHJcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcclxuXHJcbmNvbnN0IGRpdkdlbiA9IChJRCwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGRpdi5pZCA9IElEO1xyXG4gIHN0eWxlcihjbGFzc1N0eWxlcywgZGl2KTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKG5hdlN0eWxlcykgPT4ge1xyXG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblxyXG4gIHN0eWxlcihuYXZTdHlsZXMsIGVsKTtcclxuXHJcbiAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhbWVuTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTEwXCIsIFwibXItM1wiLCBcInNtOmgtMTRcIl07XHJcbiAgc3R5bGVyKHN0eWxlcywgcmFtZW5Mb2dvKTtcclxuXHJcbiAgcmFtZW5Mb2dvLnNyYyA9IExvZ287XHJcblxyXG4gIHJldHVybiByYW1lbkxvZ287XHJcbn07XHJcblxyXG5jb25zdCBCYW5uZXJJbWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBiYW5uZXIgPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wib2JqZWN0LWZpbGxcIl07XHJcbiAgc3R5bGVyKHN0eWxlcywgYmFubmVyKTtcclxuXHJcbiAgYmFubmVyLnNyYyA9IEJhbm5lcjtcclxuXHJcbiAgcmV0dXJuIGJhbm5lcjtcclxufTtcclxuXHJcbmNvbnN0IGEgPSAoaHJlZiA9IFwiXCIsIHRleHRjb250ZW50ID0gXCJcIiwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBocmVmO1xyXG4gIGEudGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuICBzdHlsZXIoY2xhc3NTdHlsZXMsIGEpO1xyXG5cclxuICByZXR1cm4gYTtcclxufTtcclxuXHJcbmNvbnN0IGxpID0gKCkgPT4ge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbn07XHJcblxyXG5jb25zdCB1bCA9IChjb3VudCA9IDAsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3QgPSBsaSgpO1xyXG4gICAgbGlzdC5pZCA9IGk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHN0eWxlcihjbGFzc1N0eWxlcywgdWwpO1xyXG5cclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG5jb25zdCBIciA9IChjc3MpID0+IHtcclxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gaHI7XHJcbiAgfVxyXG5cclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGhyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHI7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuID0gKHRleHQgPSBcIlwiLCBjc3MpID0+IHtcclxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICBzdHlsZXIoY3NzLCBzcGFuKTtcclxuXHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCB0YWJCdXR0b24gPSAodGV4dCA9IFwiXCIsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgYnRuLmlkID0gYCR7dGV4dH0tdGFiYDtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICBzdHlsZXIoY2xhc3NTdHlsZXMsIGJ0bik7XHJcbiAgcmV0dXJuIGJ0bjtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAod3JhcHBlcikgPT4ge1xyXG4gIHdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBoMiA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgyO1xyXG59O1xyXG5cclxuY29uc3QgcCA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZXIgPSAoaWQpID0+IHtcclxuICBpZiAoaWQuaW5jbHVkZXMoXCJob21lXCIpKSB7XHJcbiAgICBob21lLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcIm1lbnVcIikpIHtcclxuICAgIG1lbnUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwiYWJvdXRcIikpIHtcclxuICAgIGFib3V0LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldmlld3MuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXIgPSAobGlzdCA9IFtdLCBlbGVtZW50KSA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBsaXN0ID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGxpc3QgPT0gXCJzdHJpbmdcIlxyXG4gICAgPyBlbGVtZW50XHJcbiAgICA6IGxpc3QuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGxvZ28sXHJcbiAgdWwsXHJcbiAgbGksXHJcbiAgYSxcclxuICBwLFxyXG4gIEhyLFxyXG4gIHNwYW4sXHJcbiAgdGFiQnV0dG9uLFxyXG4gIHBhcnNlcixcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIEJhbm5lckltYWdlLFxyXG4gIHN0eWxlcixcclxuICBOYXYsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2Fib3V0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9