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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

  // about sections
  let aboutText = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let banner = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.BannerImage)();

  // about text settings

  let aboutStyles = [];
  let aboutInfo = [
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen"),
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
      "Here you will find our short history, why we love making ramen, and what to expect from us in the future."
    ),
  ];

  //   aboutInfo.forEach((blurb) => {
  //     aboutText.appendChild(blurb);
  //   });

  wrapper.appendChild(aboutText);
  wrapper.appendChild(banner);
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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");

const displayContent = () => {
    console.log('test home.js');
    let wrapper = document.querySelector('#content-wrapper');
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);
}



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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

  let body = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let title = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let grid = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let cards = [(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)()];

  //body settings

  //title settings
  let menuTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
  let menuDesc = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
    "Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste"
  );

  let titleStyles = ["text-center"];

  titleStyles.forEach((style) => {
    title.classList.add(style);
  });

  title.appendChild(menuTitle);
  title.appendChild(menuDesc);

  //grid settings
  let gridStyles = [
    "grid",
    "grid-cols-4",
    "grid-rows-1",
    "bg-slate-500",
    "mx-auto",
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

    "rounded-lg",
    "shadow",

    "dark:bg-gray-800",
    "dark:border-gray-700",
  ];

  cards.forEach((card) => {
    const image = new Image();
    image.src =
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png";
    card.appendChild(image);

    let text = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();

    text.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Tonkutsu Ramen"));
    text.appendChild(
      (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
        "A porc rich broth - Served with braised porc, veggies, 1 poached egg and egg noodles"
      )
    );

    card.appendChild(text);

    card.id = "card";
    cardStyles.forEach((style) => {
      card.classList.add(style);
    });
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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");

const displayContent = ()=> {
    console.log('reviews.js test');
    let wrapper = document.querySelector('#content-wrapper');
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);
}



/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
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
/* harmony export */   "tabButton": () => (/* binding */ tabButton),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ "./src/logo.jpg");
/* harmony import */ var _banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.png */ "./src/banner.png");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reviews */ "./src/pages/reviews.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");








const divGen = () => {
  const div = document.createElement("div");
  return div;
};

const logo = () => {
  const ramenLogo = new Image();
  let styles = ["h-10", "mr-3", "sm:h-14"];

  styles.forEach((style) => {
    ramenLogo.classList.add(style);
  });

  ramenLogo.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_0__;

  return ramenLogo;
};

const BannerImage = () => {
  const banner = new Image();
  let styles = ["h-50%", "w-50%"];

  styles.forEach((style) => {
    banner.classList.add(style);
  });

  banner.src = _banner_png__WEBPACK_IMPORTED_MODULE_1__;

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

  styles.forEach((style) => {
    btn.classList.add(style);
  });

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
  let tabContent = document.querySelector(`#${id}`);

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




/***/ }),

/***/ "./src/banner.png":
/*!************************!*\
  !*** ./src/banner.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "324ebe218fd7b5ff61d7.png";

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utilities.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEdBQUc7QUFDakQ7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCLElBQUk7QUFDSixJQUFJLHVEQUFtQjtBQUN2QixJQUFJO0FBQ0osSUFBSSx3REFBb0I7QUFDeEIsSUFBSTtBQUNKLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQWVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwS0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGRpdkdlbixcclxuICBhLFxyXG4gIGxpLFxyXG4gIHVsLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgcCxcclxuICBCYW5uZXJJbWFnZSxcclxufSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIC8vIGFib3V0IHNlY3Rpb25zXHJcbiAgbGV0IGFib3V0VGV4dCA9IGRpdkdlbigpO1xyXG4gIGxldCBiYW5uZXIgPSBCYW5uZXJJbWFnZSgpO1xyXG5cclxuICAvLyBhYm91dCB0ZXh0IHNldHRpbmdzXHJcblxyXG4gIGxldCBhYm91dFN0eWxlcyA9IFtdO1xyXG4gIGxldCBhYm91dEluZm8gPSBbXHJcbiAgICBoMihcIk9oYXlvIFJhbWVuXCIpLFxyXG4gICAgcChcclxuICAgICAgXCJIZXJlIHlvdSB3aWxsIGZpbmQgb3VyIHNob3J0IGhpc3RvcnksIHdoeSB3ZSBsb3ZlIG1ha2luZyByYW1lbiwgYW5kIHdoYXQgdG8gZXhwZWN0IGZyb20gdXMgaW4gdGhlIGZ1dHVyZS5cIlxyXG4gICAgKSxcclxuICBdO1xyXG5cclxuICAvLyAgIGFib3V0SW5mby5mb3JFYWNoKChibHVyYikgPT4ge1xyXG4gIC8vICAgICBhYm91dFRleHQuYXBwZW5kQ2hpbGQoYmx1cmIpO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJhbm5lcik7XHJcbn07XHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdCBob21lLmpzJyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50LCBoMiwgcCB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJvZHkgPSBkaXZHZW4oKTtcclxuICBsZXQgdGl0bGUgPSBkaXZHZW4oKTtcclxuICBsZXQgZ3JpZCA9IGRpdkdlbigpO1xyXG4gIGxldCBjYXJkcyA9IFtkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKV07XHJcblxyXG4gIC8vYm9keSBzZXR0aW5nc1xyXG5cclxuICAvL3RpdGxlIHNldHRpbmdzXHJcbiAgbGV0IG1lbnVUaXRsZSA9IGgyKFwiT2hheW8gUmFtZW4gTWVudVwiKTtcclxuICBsZXQgbWVudURlc2MgPSBwKFxyXG4gICAgXCJPdXIgYnJvdGhzIGFyZSBtYWRlIHdpdGggdGltZSBhbmQgbG92ZSB0byBwcm9kdWNlIHRoZSBtb3N0IFVtYW1pLWVzcXVlIGZsYXZvcnMgeW91IHdpbGwgZXZlciB0YXN0ZVwiXHJcbiAgKTtcclxuXHJcbiAgbGV0IHRpdGxlU3R5bGVzID0gW1widGV4dC1jZW50ZXJcIl07XHJcblxyXG4gIHRpdGxlU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51RGVzYyk7XHJcblxyXG4gIC8vZ3JpZCBzZXR0aW5nc1xyXG4gIGxldCBncmlkU3R5bGVzID0gW1xyXG4gICAgXCJncmlkXCIsXHJcbiAgICBcImdyaWQtY29scy00XCIsXHJcbiAgICBcImdyaWQtcm93cy0xXCIsXHJcbiAgICBcImJnLXNsYXRlLTUwMFwiLFxyXG4gICAgXCJteC1hdXRvXCIsXHJcbiAgXTtcclxuXHJcbiAgZ3JpZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgZ3JpZC5pZCA9IFwiY2FyZHNcIjtcclxuXHJcbiAgLy9jYXJkIHNldHRpbmdzXHJcblxyXG4gIGxldCBjYXJkU3R5bGVzID0gW1xyXG4gICAgXCJweC0zXCIsXHJcbiAgICBcInB5LTNcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcblxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcInNoYWRvd1wiLFxyXG5cclxuICAgIFwiZGFyazpiZy1ncmF5LTgwMFwiLFxyXG4gICAgXCJkYXJrOmJvcmRlci1ncmF5LTcwMFwiLFxyXG4gIF07XHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPVxyXG4gICAgICBcImh0dHBzOi8vZmxvd2JpdGUuczMuYW1hem9uYXdzLmNvbS9ibG9ja3MvbWFya2V0aW5nLXVpL2F2YXRhcnMvYm9ubmllLWdyZWVuLnBuZ1wiO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgbGV0IHRleHQgPSBkaXZHZW4oKTtcclxuXHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGgyKFwiVG9ua3V0c3UgUmFtZW5cIikpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChcclxuICAgICAgcChcclxuICAgICAgICBcIkEgcG9yYyByaWNoIGJyb3RoIC0gU2VydmVkIHdpdGggYnJhaXNlZCBwb3JjLCB2ZWdnaWVzLCAxIHBvYWNoZWQgZWdnIGFuZCBlZ2cgbm9vZGxlc1wiXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICBjYXJkLmlkID0gXCJjYXJkXCI7XHJcbiAgICBjYXJkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gZG9tIG1hbmlwXHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvZHkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHtkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Jldmlld3MuanMgdGVzdCcpO1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvLmpwZ1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL2Jhbm5lci5wbmdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFib3V0IGZyb20gXCIuL3BhZ2VzL2Fib3V0XCI7XHJcbmltcG9ydCAqIGFzIG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgKiBhcyByZXZpZXdzIGZyb20gXCIuL3BhZ2VzL3Jldmlld3NcIjtcclxuaW1wb3J0ICogYXMgaG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XHJcblxyXG5jb25zdCBkaXZHZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICBjb25zdCByYW1lbkxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wiaC0xMFwiLCBcIm1yLTNcIiwgXCJzbTpoLTE0XCJdO1xyXG5cclxuICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHJhbWVuTG9nby5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmFtZW5Mb2dvLnNyYyA9IExvZ287XHJcblxyXG4gIHJldHVybiByYW1lbkxvZ287XHJcbn07XHJcblxyXG5jb25zdCBCYW5uZXJJbWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBiYW5uZXIgPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wiaC01MCVcIiwgXCJ3LTUwJVwiXTtcclxuXHJcbiAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIGJhbm5lci5zcmMgPSBCYW5uZXI7XHJcblxyXG4gIHJldHVybiBiYW5uZXI7XHJcbn07XHJcblxyXG5jb25zdCBhID0gKGhyZWYgPSBcIlwiLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gaHJlZjtcclxuICBhLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBhO1xyXG59O1xyXG5cclxuY29uc3QgbGkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHVsID0gKGNvdW50ID0gMCkgPT4ge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgbGlzdCA9IGxpKCk7XHJcbiAgICBsaXN0LmlkID0gaTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVsO1xyXG59O1xyXG5cclxuY29uc3QgSHIgPSAoY3NzKSA9PiB7XHJcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIGhyO1xyXG4gIH1cclxuXHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBoci5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGhyO1xyXG59O1xyXG5cclxuY29uc3Qgc3BhbiA9IChjc3MsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuY29uc3QgdGFiQnV0dG9uID0gKHRleHQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBzdHlsZXMgPSBbXHJcbiAgICBcInVuZGVybGluZVwiLFxyXG4gICAgXCJ0ZXh0LWJsYWNrXCIsXHJcbiAgICBcImhvdmVyOnVuZGVybGluZS1vZmZzZXQtOFwiLFxyXG4gICAgXCJob3Zlcjp0ZXh0LWdyYXktNjAwXCIsXHJcbiAgICBcImhvdmVyOmJvcmRlci1ncmF5LTMwMFwiLFxyXG4gICAgXCJ0cmFuc2l0aW9uLWFsbFwiLFxyXG4gICAgXCJlYXNlLWluLW91dFwiLFxyXG4gICAgXCJkdXJhdGlvbi0zMDBcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICBdO1xyXG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICBidG4uaWQgPSBgJHt0ZXh0fS10YWJgO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIGlmIChjbGFzc1N0eWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjbGFzc1N0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5jb25zdCByZW1vdmVDb250ZW50ID0gKHdyYXBwZXIpID0+IHtcclxuICB3cmFwcGVyLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaDIgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBoMjtcclxufTtcclxuXHJcbmNvbnN0IHAgPSAodGV4dCA9IFwiXCIpID0+IHtcclxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VyID0gKGlkKSA9PiB7XHJcbiAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuXHJcbiAgaWYgKGlkLmluY2x1ZGVzKFwiaG9tZVwiKSkge1xyXG4gICAgaG9tZS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJtZW51XCIpKSB7XHJcbiAgICBtZW51LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcImFib3V0XCIpKSB7XHJcbiAgICBhYm91dC5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXZpZXdzLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgbG9nbyxcclxuICB1bCxcclxuICBsaSxcclxuICBhLFxyXG4gIHAsXHJcbiAgSHIsXHJcbiAgc3BhbixcclxuICB0YWJCdXR0b24sXHJcbiAgcGFyc2VyLFxyXG4gIHJlbW92ZUNvbnRlbnQsXHJcbiAgaDIsXHJcbiAgQmFubmVySW1hZ2UsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3V0aWxpdGllcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==