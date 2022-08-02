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

  let body = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let title = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let grid = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let cards = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)()];

  //body settings
  body.id = "body";

  let bodyStyles = [
    "container",
    "mx-auto",
    "flex",
    "flex-col",
    "content-center",
    "justify-center",
    "gap-4",
  ];

  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.styler)(bodyStyles, body);

  //title settings
  let menuTitle = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
  let menuDesc = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
    "Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste"
  );

  let titleStyles = ["text-center"];
  (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.styler)(titleStyles, title);

  title.appendChild(menuTitle);
  title.appendChild(menuDesc);

  //grid settings
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

  gridStyles.forEach((style) => {
    grid.classList.add(style);
  });

  grid.id = "cards";

  //card settings

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








const divGen = () => {
  const div = document.createElement("div");
  return div;
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

const a = (href = "", textcontent = "") => {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = textcontent;

  return a;
};

const li = () => {
  return document.createElement("li");
};

const ul = (count = 0) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const list = li();
    list.id = i;
    ul.appendChild(list);
  }

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

const span = (css, textcontent = "") => {
  let span = document.createElement("span");
  if (css.lenght <= 0) {
    return span;
  }
  span.textContent = textcontent;
  css.forEach((style) => {
    span.classList.add(style);
  });

  return span;
};

const tabButton = (text = "", classStyles = []) => {
  const btn = document.createElement("button");
  const styles = [
    "underline",
    "text-black",
    "hover:underline-offset-8",
    "hover:text-gray-600",
    "hover:border-gray-300",
    "transition-all",
    "ease-in-out",
    "duration-300",
    "flex",
    "items-center",
  ];
  btn.type = "button";
  btn.id = `${text}-tab`;
  btn.textContent = text;

  if (classStyles.length > 0) {
    classStyles.forEach((style) => {
      btn.classList.add(style);
    });
  }

  styler(styles, btn);

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
  return list.length == 0
    ? null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFtQjtBQUN2QixJQUFJO0FBQ0osSUFBSSx1REFBbUI7QUFDdkIsSUFBSTtBQUNKLElBQUksd0RBQW9CO0FBQ3hCLElBQUk7QUFDSixJQUFJLDBEQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFnQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25LRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9yZXZpZXdzLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3V0aWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpdkdlbiwgcmVtb3ZlQ29udGVudCwgQmFubmVySW1hZ2UsIHN0eWxlciB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgbGV0IGJhbm5lckRpdiA9IGRpdkdlbigpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBiYW5uZXIgPSBCYW5uZXJJbWFnZSgpO1xyXG5cclxuICBzdHlsZXIoW1wiZmxleFwiLCBcImNvbnRlbnQtY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIl0sIGJhbm5lckRpdik7XHJcbiAgYmFubmVyRGl2LmFwcGVuZENoaWxkKGJhbm5lcik7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xyXG59O1xyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwidGVzdCBob21lLmpzXCIpO1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGEsXHJcbiAgbGksXHJcbiAgdWwsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBwLFxyXG4gIHN0eWxlcixcclxufSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBib2R5ID0gZGl2R2VuKCk7XHJcbiAgbGV0IHRpdGxlID0gZGl2R2VuKCk7XHJcbiAgbGV0IGdyaWQgPSBkaXZHZW4oKTtcclxuICBsZXQgY2FyZHMgPSBbZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCldO1xyXG5cclxuICAvL2JvZHkgc2V0dGluZ3NcclxuICBib2R5LmlkID0gXCJib2R5XCI7XHJcblxyXG4gIGxldCBib2R5U3R5bGVzID0gW1xyXG4gICAgXCJjb250YWluZXJcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcImNvbnRlbnQtY2VudGVyXCIsXHJcbiAgICBcImp1c3RpZnktY2VudGVyXCIsXHJcbiAgICBcImdhcC00XCIsXHJcbiAgXTtcclxuXHJcbiAgc3R5bGVyKGJvZHlTdHlsZXMsIGJvZHkpO1xyXG5cclxuICAvL3RpdGxlIHNldHRpbmdzXHJcbiAgbGV0IG1lbnVUaXRsZSA9IGgyKFwiT2hheW8gUmFtZW4gTWVudVwiKTtcclxuICBsZXQgbWVudURlc2MgPSBwKFxyXG4gICAgXCJPdXIgYnJvdGhzIGFyZSBtYWRlIHdpdGggdGltZSBhbmQgbG92ZSB0byBwcm9kdWNlIHRoZSBtb3N0IFVtYW1pLWVzcXVlIGZsYXZvcnMgeW91IHdpbGwgZXZlciB0YXN0ZVwiXHJcbiAgKTtcclxuXHJcbiAgbGV0IHRpdGxlU3R5bGVzID0gW1widGV4dC1jZW50ZXJcIl07XHJcbiAgc3R5bGVyKHRpdGxlU3R5bGVzLCB0aXRsZSk7XHJcblxyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xyXG5cclxuICAvL2dyaWQgc2V0dGluZ3NcclxuICBsZXQgZ3JpZFN0eWxlcyA9IFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJzbTpncmlkLWNvbHMtNFwiLFxyXG4gICAgXCJzbTpncmlkLXJvd3MtMVwiLFxyXG4gICAgXCJiZy1zbGF0ZS0yMDBcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gICAgXCJnYXAtNVwiLFxyXG4gICAgXCJncmlkLWNvbHMtMVwiLFxyXG4gICAgXCJncmlkLXJvd3MtNFwiLFxyXG4gIF07XHJcblxyXG4gIGdyaWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIGdyaWQuaWQgPSBcImNhcmRzXCI7XHJcblxyXG4gIC8vY2FyZCBzZXR0aW5nc1xyXG5cclxuICBsZXQgY2FyZFN0eWxlcyA9IFtcclxuICAgIFwicHgtM1wiLFxyXG4gICAgXCJweS0zXCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICAgIFwic2hhZG93XCIsXHJcbiAgICBcInRleHQtY2VudGVyXCIsXHJcbiAgICBcImJnLXNsYXRlLTcwMFwiLFxyXG4gIF07XHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPVxyXG4gICAgICBcImh0dHBzOi8vZmxvd2JpdGUuczMuYW1hem9uYXdzLmNvbS9ibG9ja3MvbWFya2V0aW5nLXVpL2F2YXRhcnMvYm9ubmllLWdyZWVuLnBuZ1wiO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgbGV0IHRleHQgPSBkaXZHZW4oKTtcclxuXHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGgyKFwiVG9ua3V0c3UgUmFtZW5cIikpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChcclxuICAgICAgcChcclxuICAgICAgICBcIkEgcG9yYyByaWNoIGJyb3RoIC0gU2VydmVkIHdpdGggYnJhaXNlZCBwb3JjLCB2ZWdnaWVzLCAxIHBvYWNoZWQgZWdnIGFuZCBlZ2cgbm9vZGxlc1wiXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICBjYXJkLmlkID0gXCJjYXJkXCI7XHJcbiAgICBzdHlsZXIoY2FyZFN0eWxlcywgY2FyZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRvbSBtYW5pcFxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInJldmlld3MuanMgdGVzdFwiKTtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28uanBnXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2ltYWdlcy9iYW5uZXIucG5nXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tIFwiLi4vcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgKiBhcyByZXZpZXdzIGZyb20gXCIuLi9wYWdlcy9yZXZpZXdzXCI7XHJcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcclxuXHJcbmNvbnN0IGRpdkdlbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhbWVuTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTEwXCIsIFwibXItM1wiLCBcInNtOmgtMTRcIl07XHJcbiAgc3R5bGVyKHN0eWxlcywgcmFtZW5Mb2dvKTtcclxuXHJcbiAgcmFtZW5Mb2dvLnNyYyA9IExvZ287XHJcblxyXG4gIHJldHVybiByYW1lbkxvZ287XHJcbn07XHJcblxyXG5jb25zdCBCYW5uZXJJbWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBiYW5uZXIgPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wib2JqZWN0LWZpbGxcIl07XHJcbiAgc3R5bGVyKHN0eWxlcywgYmFubmVyKTtcclxuXHJcbiAgYmFubmVyLnNyYyA9IEJhbm5lcjtcclxuXHJcbiAgcmV0dXJuIGJhbm5lcjtcclxufTtcclxuXHJcbmNvbnN0IGEgPSAoaHJlZiA9IFwiXCIsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBocmVmO1xyXG4gIGEudGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5jb25zdCBsaSA9ICgpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG59O1xyXG5cclxuY29uc3QgdWwgPSAoY291bnQgPSAwKSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbGkoKTtcclxuICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG5jb25zdCBIciA9IChjc3MpID0+IHtcclxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gaHI7XHJcbiAgfVxyXG5cclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGhyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHI7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuID0gKGNzcywgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCB0YWJCdXR0b24gPSAodGV4dCA9IFwiXCIsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHN0eWxlcyA9IFtcclxuICAgIFwidW5kZXJsaW5lXCIsXHJcbiAgICBcInRleHQtYmxhY2tcIixcclxuICAgIFwiaG92ZXI6dW5kZXJsaW5lLW9mZnNldC04XCIsXHJcbiAgICBcImhvdmVyOnRleHQtZ3JheS02MDBcIixcclxuICAgIFwiaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCIsXHJcbiAgICBcInRyYW5zaXRpb24tYWxsXCIsXHJcbiAgICBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICBcImR1cmF0aW9uLTMwMFwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gIF07XHJcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGJ0bi5pZCA9IGAke3RleHR9LXRhYmA7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgaWYgKGNsYXNzU3R5bGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNsYXNzU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVyKHN0eWxlcywgYnRuKTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufTtcclxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICh3cmFwcGVyKSA9PiB7XHJcbiAgd3JhcHBlci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjaGlsZC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGgyID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaDI7XHJcbn07XHJcblxyXG5jb25zdCBwID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gcDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlciA9IChpZCkgPT4ge1xyXG4gIGlmIChpZC5pbmNsdWRlcyhcImhvbWVcIikpIHtcclxuICAgIGhvbWUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwibWVudVwiKSkge1xyXG4gICAgbWVudS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJhYm91dFwiKSkge1xyXG4gICAgYWJvdXQuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV2aWV3cy5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHN0eWxlciA9IChsaXN0ID0gW10sIGVsZW1lbnQpID0+IHtcclxuICByZXR1cm4gbGlzdC5sZW5ndGggPT0gMFxyXG4gICAgPyBudWxsXHJcbiAgICA6IGxpc3QuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGxvZ28sXHJcbiAgdWwsXHJcbiAgbGksXHJcbiAgYSxcclxuICBwLFxyXG4gIEhyLFxyXG4gIHNwYW4sXHJcbiAgdGFiQnV0dG9uLFxyXG4gIHBhcnNlcixcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIEJhbm5lckltYWdlLFxyXG4gIHN0eWxlcixcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvYWJvdXQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=