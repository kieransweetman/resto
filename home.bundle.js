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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/home.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCLElBQUk7QUFDSixJQUFJLHVEQUFtQjtBQUN2QixJQUFJO0FBQ0osSUFBSSx3REFBb0I7QUFDeEIsSUFBSTtBQUNKLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQWdCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbktGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvdXRpbHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGl2R2VuLCByZW1vdmVDb250ZW50LCBCYW5uZXJJbWFnZSwgc3R5bGVyIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICBsZXQgYmFubmVyRGl2ID0gZGl2R2VuKCk7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJhbm5lciA9IEJhbm5lckltYWdlKCk7XHJcblxyXG4gIHN0eWxlcihbXCJmbGV4XCIsIFwiY29udGVudC1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiXSwgYmFubmVyRGl2KTtcclxuICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoYmFubmVyKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJhbm5lckRpdik7XHJcbn07XHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ0ZXN0IGhvbWUuanNcIik7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgYSxcclxuICBsaSxcclxuICB1bCxcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIHAsXHJcbiAgc3R5bGVyLFxyXG59IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJvZHkgPSBkaXZHZW4oKTtcclxuICBsZXQgdGl0bGUgPSBkaXZHZW4oKTtcclxuICBsZXQgZ3JpZCA9IGRpdkdlbigpO1xyXG4gIGxldCBjYXJkcyA9IFtkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKV07XHJcblxyXG4gIC8vYm9keSBzZXR0aW5nc1xyXG4gIGJvZHkuaWQgPSBcImJvZHlcIjtcclxuXHJcbiAgbGV0IGJvZHlTdHlsZXMgPSBbXHJcbiAgICBcImNvbnRhaW5lclwiLFxyXG4gICAgXCJteC1hdXRvXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwiY29udGVudC1jZW50ZXJcIixcclxuICAgIFwianVzdGlmeS1jZW50ZXJcIixcclxuICAgIFwiZ2FwLTRcIixcclxuICBdO1xyXG5cclxuICBzdHlsZXIoYm9keVN0eWxlcywgYm9keSk7XHJcblxyXG4gIC8vdGl0bGUgc2V0dGluZ3NcclxuICBsZXQgbWVudVRpdGxlID0gaDIoXCJPaGF5byBSYW1lbiBNZW51XCIpO1xyXG4gIGxldCBtZW51RGVzYyA9IHAoXHJcbiAgICBcIk91ciBicm90aHMgYXJlIG1hZGUgd2l0aCB0aW1lIGFuZCBsb3ZlIHRvIHByb2R1Y2UgdGhlIG1vc3QgVW1hbWktZXNxdWUgZmxhdm9ycyB5b3Ugd2lsbCBldmVyIHRhc3RlXCJcclxuICApO1xyXG5cclxuICBsZXQgdGl0bGVTdHlsZXMgPSBbXCJ0ZXh0LWNlbnRlclwiXTtcclxuICBzdHlsZXIodGl0bGVTdHlsZXMsIHRpdGxlKTtcclxuXHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51RGVzYyk7XHJcblxyXG4gIC8vZ3JpZCBzZXR0aW5nc1xyXG4gIGxldCBncmlkU3R5bGVzID0gW1xyXG4gICAgXCJncmlkXCIsXHJcbiAgICBcInNtOmdyaWQtY29scy00XCIsXHJcbiAgICBcInNtOmdyaWQtcm93cy0xXCIsXHJcbiAgICBcImJnLXNsYXRlLTIwMFwiLFxyXG4gICAgXCJteC1hdXRvXCIsXHJcbiAgICBcImdhcC01XCIsXHJcbiAgICBcImdyaWQtY29scy0xXCIsXHJcbiAgICBcImdyaWQtcm93cy00XCIsXHJcbiAgXTtcclxuXHJcbiAgZ3JpZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgZ3JpZC5pZCA9IFwiY2FyZHNcIjtcclxuXHJcbiAgLy9jYXJkIHNldHRpbmdzXHJcblxyXG4gIGxldCBjYXJkU3R5bGVzID0gW1xyXG4gICAgXCJweC0zXCIsXHJcbiAgICBcInB5LTNcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJzaGFkb3dcIixcclxuICAgIFwidGV4dC1jZW50ZXJcIixcclxuICAgIFwiYmctc2xhdGUtNzAwXCIsXHJcbiAgXTtcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9mbG93Yml0ZS5zMy5hbWF6b25hd3MuY29tL2Jsb2Nrcy9tYXJrZXRpbmctdWkvYXZhdGFycy9ib25uaWUtZ3JlZW4ucG5nXCI7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRpdkdlbigpO1xyXG5cclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoaDIoXCJUb25rdXRzdSBSYW1lblwiKSk7XHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKFxyXG4gICAgICBwKFxyXG4gICAgICAgIFwiQSBwb3JjIHJpY2ggYnJvdGggLSBTZXJ2ZWQgd2l0aCBicmFpc2VkIHBvcmMsIHZlZ2dpZXMsIDEgcG9hY2hlZCBlZ2cgYW5kIGVnZyBub29kbGVzXCJcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICAgIGNhcmQuaWQgPSBcImNhcmRcIjtcclxuICAgIHN0eWxlcihjYXJkU3R5bGVzLCBjYXJkKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZG9tIG1hbmlwXHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvZHkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHsgZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmV2aWV3cy5qcyB0ZXN0XCIpO1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCBMb2dvIGZyb20gXCIuLi9pbWFnZXMvbG9nby5qcGdcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vaW1hZ2VzL2Jhbm5lci5wbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5pbXBvcnQgKiBhcyBtZW51IGZyb20gXCIuLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCAqIGFzIHJldmlld3MgZnJvbSBcIi4uL3BhZ2VzL3Jldmlld3NcIjtcclxuaW1wb3J0ICogYXMgaG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiO1xyXG5cclxuY29uc3QgZGl2R2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFtZW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcImgtMTBcIiwgXCJtci0zXCIsIFwic206aC0xNFwiXTtcclxuICBzdHlsZXIoc3R5bGVzLCByYW1lbkxvZ28pO1xyXG5cclxuICByYW1lbkxvZ28uc3JjID0gTG9nbztcclxuXHJcbiAgcmV0dXJuIHJhbWVuTG9nbztcclxufTtcclxuXHJcbmNvbnN0IEJhbm5lckltYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJvYmplY3QtZmlsbFwiXTtcclxuICBzdHlsZXIoc3R5bGVzLCBiYW5uZXIpO1xyXG5cclxuICBiYW5uZXIuc3JjID0gQmFubmVyO1xyXG5cclxuICByZXR1cm4gYmFubmVyO1xyXG59O1xyXG5cclxuY29uc3QgYSA9IChocmVmID0gXCJcIiwgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IGhyZWY7XHJcbiAgYS50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG5cclxuICByZXR1cm4gYTtcclxufTtcclxuXHJcbmNvbnN0IGxpID0gKCkgPT4ge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbn07XHJcblxyXG5jb25zdCB1bCA9IChjb3VudCA9IDApID0+IHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3QgPSBsaSgpO1xyXG4gICAgbGlzdC5pZCA9IGk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1bDtcclxufTtcclxuXHJcbmNvbnN0IEhyID0gKGNzcykgPT4ge1xyXG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBocjtcclxuICB9XHJcblxyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgaHIuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBocjtcclxufTtcclxuXHJcbmNvbnN0IHNwYW4gPSAoY3NzLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IHRhYkJ1dHRvbiA9ICh0ZXh0ID0gXCJcIiwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29uc3Qgc3R5bGVzID0gW1xyXG4gICAgXCJ1bmRlcmxpbmVcIixcclxuICAgIFwidGV4dC1ibGFja1wiLFxyXG4gICAgXCJob3Zlcjp1bmRlcmxpbmUtb2Zmc2V0LThcIixcclxuICAgIFwiaG92ZXI6dGV4dC1ncmF5LTYwMFwiLFxyXG4gICAgXCJob3Zlcjpib3JkZXItZ3JheS0zMDBcIixcclxuICAgIFwidHJhbnNpdGlvbi1hbGxcIixcclxuICAgIFwiZWFzZS1pbi1vdXRcIixcclxuICAgIFwiZHVyYXRpb24tMzAwXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgXTtcclxuICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgYnRuLmlkID0gYCR7dGV4dH0tdGFiYDtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICBpZiAoY2xhc3NTdHlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY2xhc3NTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdHlsZXIoc3R5bGVzLCBidG4pO1xyXG5cclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5jb25zdCByZW1vdmVDb250ZW50ID0gKHdyYXBwZXIpID0+IHtcclxuICB3cmFwcGVyLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaDIgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBoMjtcclxufTtcclxuXHJcbmNvbnN0IHAgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VyID0gKGlkKSA9PiB7XHJcbiAgaWYgKGlkLmluY2x1ZGVzKFwiaG9tZVwiKSkge1xyXG4gICAgaG9tZS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJtZW51XCIpKSB7XHJcbiAgICBtZW51LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcImFib3V0XCIpKSB7XHJcbiAgICBhYm91dC5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXZpZXdzLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVyID0gKGxpc3QgPSBbXSwgZWxlbWVudCkgPT4ge1xyXG4gIHJldHVybiBsaXN0Lmxlbmd0aCA9PSAwXHJcbiAgICA/IG51bGxcclxuICAgIDogbGlzdC5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgbG9nbyxcclxuICB1bCxcclxuICBsaSxcclxuICBhLFxyXG4gIHAsXHJcbiAgSHIsXHJcbiAgc3BhbixcclxuICB0YWJCdXR0b24sXHJcbiAgcGFyc2VyLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgQmFubmVySW1hZ2UsXHJcbiAgc3R5bGVyLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9ob21lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9