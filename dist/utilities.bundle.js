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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/utilities.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkIsSUFBSTtBQUNKLElBQUksdURBQW1CO0FBQ3ZCLElBQUk7QUFDSixJQUFJLHdEQUFvQjtBQUN4QixJQUFJO0FBQ0osSUFBSSwwREFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBZ0JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuS0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXZHZW4sIHJlbW92ZUNvbnRlbnQsIEJhbm5lckltYWdlLCBzdHlsZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIGxldCBiYW5uZXJEaXYgPSBkaXZHZW4oKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICBsZXQgYmFubmVyID0gQmFubmVySW1hZ2UoKTtcclxuXHJcbiAgc3R5bGVyKFtcImZsZXhcIiwgXCJjb250ZW50LWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLCBiYW5uZXJEaXYpO1xyXG4gIGJhbm5lckRpdi5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYmFubmVyRGl2KTtcclxufTtcclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHsgZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInRlc3QgaG9tZS5qc1wiKTtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQge1xyXG4gIGRpdkdlbixcclxuICBhLFxyXG4gIGxpLFxyXG4gIHVsLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgcCxcclxuICBzdHlsZXIsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICBsZXQgYm9keSA9IGRpdkdlbigpO1xyXG4gIGxldCB0aXRsZSA9IGRpdkdlbigpO1xyXG4gIGxldCBncmlkID0gZGl2R2VuKCk7XHJcbiAgbGV0IGNhcmRzID0gW2RpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpXTtcclxuXHJcbiAgLy9ib2R5IHNldHRpbmdzXHJcbiAgYm9keS5pZCA9IFwiYm9keVwiO1xyXG5cclxuICBsZXQgYm9keVN0eWxlcyA9IFtcclxuICAgIFwiY29udGFpbmVyXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJjb250ZW50LWNlbnRlclwiLFxyXG4gICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gIF07XHJcblxyXG4gIHN0eWxlcihib2R5U3R5bGVzLCBib2R5KTtcclxuXHJcbiAgLy90aXRsZSBzZXR0aW5nc1xyXG4gIGxldCBtZW51VGl0bGUgPSBoMihcIk9oYXlvIFJhbWVuIE1lbnVcIik7XHJcbiAgbGV0IG1lbnVEZXNjID0gcChcclxuICAgIFwiT3VyIGJyb3RocyBhcmUgbWFkZSB3aXRoIHRpbWUgYW5kIGxvdmUgdG8gcHJvZHVjZSB0aGUgbW9zdCBVbWFtaS1lc3F1ZSBmbGF2b3JzIHlvdSB3aWxsIGV2ZXIgdGFzdGVcIlxyXG4gICk7XHJcblxyXG4gIGxldCB0aXRsZVN0eWxlcyA9IFtcInRleHQtY2VudGVyXCJdO1xyXG4gIHN0eWxlcih0aXRsZVN0eWxlcywgdGl0bGUpO1xyXG5cclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcclxuXHJcbiAgLy9ncmlkIHNldHRpbmdzXHJcbiAgbGV0IGdyaWRTdHlsZXMgPSBbXHJcbiAgICBcImdyaWRcIixcclxuICAgIFwic206Z3JpZC1jb2xzLTRcIixcclxuICAgIFwic206Z3JpZC1yb3dzLTFcIixcclxuICAgIFwiYmctc2xhdGUtMjAwXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICAgIFwiZ2FwLTVcIixcclxuICAgIFwiZ3JpZC1jb2xzLTFcIixcclxuICAgIFwiZ3JpZC1yb3dzLTRcIixcclxuICBdO1xyXG5cclxuICBncmlkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICBncmlkLmlkID0gXCJjYXJkc1wiO1xyXG5cclxuICAvL2NhcmQgc2V0dGluZ3NcclxuXHJcbiAgbGV0IGNhcmRTdHlsZXMgPSBbXHJcbiAgICBcInB4LTNcIixcclxuICAgIFwicHktM1wiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcInNoYWRvd1wiLFxyXG4gICAgXCJ0ZXh0LWNlbnRlclwiLFxyXG4gICAgXCJiZy1zbGF0ZS03MDBcIixcclxuICBdO1xyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID1cclxuICAgICAgXCJodHRwczovL2Zsb3diaXRlLnMzLmFtYXpvbmF3cy5jb20vYmxvY2tzL21hcmtldGluZy11aS9hdmF0YXJzL2Jvbm5pZS1ncmVlbi5wbmdcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gZGl2R2VuKCk7XHJcblxyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChoMihcIlRvbmt1dHN1IFJhbWVuXCIpKTtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHAoXHJcbiAgICAgICAgXCJBIHBvcmMgcmljaCBicm90aCAtIFNlcnZlZCB3aXRoIGJyYWlzZWQgcG9yYywgdmVnZ2llcywgMSBwb2FjaGVkIGVnZyBhbmQgZWdnIG5vb2RsZXNcIlxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgY2FyZC5pZCA9IFwiY2FyZFwiO1xyXG4gICAgc3R5bGVyKGNhcmRTdHlsZXMsIGNhcmQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkb20gbWFuaXBcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCB9IGZyb20gXCIuLi91dGlscy91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJyZXZpZXdzLmpzIHRlc3RcIik7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLmpwZ1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9pbWFnZXMvYmFubmVyLnBuZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XHJcbmltcG9ydCAqIGFzIG1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0ICogYXMgcmV2aWV3cyBmcm9tIFwiLi4vcGFnZXMvcmV2aWV3c1wiO1xyXG5pbXBvcnQgKiBhcyBob21lIGZyb20gXCIuLi9wYWdlcy9ob21lXCI7XHJcblxyXG5jb25zdCBkaXZHZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICBjb25zdCByYW1lbkxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wiaC0xMFwiLCBcIm1yLTNcIiwgXCJzbTpoLTE0XCJdO1xyXG4gIHN0eWxlcihzdHlsZXMsIHJhbWVuTG9nbyk7XHJcblxyXG4gIHJhbWVuTG9nby5zcmMgPSBMb2dvO1xyXG5cclxuICByZXR1cm4gcmFtZW5Mb2dvO1xyXG59O1xyXG5cclxuY29uc3QgQmFubmVySW1hZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFubmVyID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcIm9iamVjdC1maWxsXCJdO1xyXG4gIHN0eWxlcihzdHlsZXMsIGJhbm5lcik7XHJcblxyXG4gIGJhbm5lci5zcmMgPSBCYW5uZXI7XHJcblxyXG4gIHJldHVybiBiYW5uZXI7XHJcbn07XHJcblxyXG5jb25zdCBhID0gKGhyZWYgPSBcIlwiLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gaHJlZjtcclxuICBhLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBhO1xyXG59O1xyXG5cclxuY29uc3QgbGkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHVsID0gKGNvdW50ID0gMCkgPT4ge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgbGlzdCA9IGxpKCk7XHJcbiAgICBsaXN0LmlkID0gaTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVsO1xyXG59O1xyXG5cclxuY29uc3QgSHIgPSAoY3NzKSA9PiB7XHJcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIGhyO1xyXG4gIH1cclxuXHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBoci5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGhyO1xyXG59O1xyXG5cclxuY29uc3Qgc3BhbiA9IChjc3MsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgdGFiQnV0dG9uID0gKHRleHQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBzdHlsZXMgPSBbXHJcbiAgICBcInVuZGVybGluZVwiLFxyXG4gICAgXCJ0ZXh0LWJsYWNrXCIsXHJcbiAgICBcImhvdmVyOnVuZGVybGluZS1vZmZzZXQtOFwiLFxyXG4gICAgXCJob3Zlcjp0ZXh0LWdyYXktNjAwXCIsXHJcbiAgICBcImhvdmVyOmJvcmRlci1ncmF5LTMwMFwiLFxyXG4gICAgXCJ0cmFuc2l0aW9uLWFsbFwiLFxyXG4gICAgXCJlYXNlLWluLW91dFwiLFxyXG4gICAgXCJkdXJhdGlvbi0zMDBcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICBdO1xyXG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICBidG4uaWQgPSBgJHt0ZXh0fS10YWJgO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIGlmIChjbGFzc1N0eWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjbGFzc1N0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0eWxlcihzdHlsZXMsIGJ0bik7XHJcblxyXG4gIHJldHVybiBidG47XHJcbn07XHJcbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAod3JhcHBlcikgPT4ge1xyXG4gIHdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBoMiA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgyO1xyXG59O1xyXG5cclxuY29uc3QgcCA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZXIgPSAoaWQpID0+IHtcclxuICBpZiAoaWQuaW5jbHVkZXMoXCJob21lXCIpKSB7XHJcbiAgICBob21lLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcIm1lbnVcIikpIHtcclxuICAgIG1lbnUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwiYWJvdXRcIikpIHtcclxuICAgIGFib3V0LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldmlld3MuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXIgPSAobGlzdCA9IFtdLCBlbGVtZW50KSA9PiB7XHJcbiAgcmV0dXJuIGxpc3QubGVuZ3RoID09IDBcclxuICAgID8gbnVsbFxyXG4gICAgOiBsaXN0LmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGRpdkdlbixcclxuICBsb2dvLFxyXG4gIHVsLFxyXG4gIGxpLFxyXG4gIGEsXHJcbiAgcCxcclxuICBIcixcclxuICBzcGFuLFxyXG4gIHRhYkJ1dHRvbixcclxuICBwYXJzZXIsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBCYW5uZXJJbWFnZSxcclxuICBzdHlsZXIsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxzL3V0aWxpdGllcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==