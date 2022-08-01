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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/about.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsR0FBRztBQUNqRDtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkIsSUFBSTtBQUNKLElBQUksdURBQW1CO0FBQ3ZCLElBQUk7QUFDSixJQUFJLHdEQUFvQjtBQUN4QixJQUFJO0FBQ0osSUFBSSwwREFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BLRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9yZXZpZXdzLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGEsXHJcbiAgbGksXHJcbiAgdWwsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBwLFxyXG4gIEJhbm5lckltYWdlLFxyXG59IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgLy8gYWJvdXQgc2VjdGlvbnNcclxuICBsZXQgYWJvdXRUZXh0ID0gZGl2R2VuKCk7XHJcbiAgbGV0IGJhbm5lciA9IEJhbm5lckltYWdlKCk7XHJcblxyXG4gIC8vIGFib3V0IHRleHQgc2V0dGluZ3NcclxuXHJcbiAgbGV0IGFib3V0U3R5bGVzID0gW107XHJcbiAgbGV0IGFib3V0SW5mbyA9IFtcclxuICAgIGgyKFwiT2hheW8gUmFtZW5cIiksXHJcbiAgICBwKFxyXG4gICAgICBcIkhlcmUgeW91IHdpbGwgZmluZCBvdXIgc2hvcnQgaGlzdG9yeSwgd2h5IHdlIGxvdmUgbWFraW5nIHJhbWVuLCBhbmQgd2hhdCB0byBleHBlY3QgZnJvbSB1cyBpbiB0aGUgZnV0dXJlLlwiXHJcbiAgICApLFxyXG4gIF07XHJcblxyXG4gIC8vICAgYWJvdXRJbmZvLmZvckVhY2goKGJsdXJiKSA9PiB7XHJcbiAgLy8gICAgIGFib3V0VGV4dC5hcHBlbmRDaGlsZChibHVyYik7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYmFubmVyKTtcclxufTtcclxuZXhwb3J0IHsgZGlzcGxheUNvbnRlbnQgfTtcclxuIiwiaW1wb3J0IHtkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0IGhvbWUuanMnKTtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gICAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udGVudH07IiwiaW1wb3J0IHsgZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQsIGgyLCBwIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICBsZXQgYm9keSA9IGRpdkdlbigpO1xyXG4gIGxldCB0aXRsZSA9IGRpdkdlbigpO1xyXG4gIGxldCBncmlkID0gZGl2R2VuKCk7XHJcbiAgbGV0IGNhcmRzID0gW2RpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCksIGRpdkdlbigpXTtcclxuXHJcbiAgLy9ib2R5IHNldHRpbmdzXHJcblxyXG4gIC8vdGl0bGUgc2V0dGluZ3NcclxuICBsZXQgbWVudVRpdGxlID0gaDIoXCJPaGF5byBSYW1lbiBNZW51XCIpO1xyXG4gIGxldCBtZW51RGVzYyA9IHAoXHJcbiAgICBcIk91ciBicm90aHMgYXJlIG1hZGUgd2l0aCB0aW1lIGFuZCBsb3ZlIHRvIHByb2R1Y2UgdGhlIG1vc3QgVW1hbWktZXNxdWUgZmxhdm9ycyB5b3Ugd2lsbCBldmVyIHRhc3RlXCJcclxuICApO1xyXG5cclxuICBsZXQgdGl0bGVTdHlsZXMgPSBbXCJ0ZXh0LWNlbnRlclwiXTtcclxuXHJcbiAgdGl0bGVTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcclxuXHJcbiAgLy9ncmlkIHNldHRpbmdzXHJcbiAgbGV0IGdyaWRTdHlsZXMgPSBbXHJcbiAgICBcImdyaWRcIixcclxuICAgIFwiZ3JpZC1jb2xzLTRcIixcclxuICAgIFwiZ3JpZC1yb3dzLTFcIixcclxuICAgIFwiYmctc2xhdGUtNTAwXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICBdO1xyXG5cclxuICBncmlkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICBncmlkLmlkID0gXCJjYXJkc1wiO1xyXG5cclxuICAvL2NhcmQgc2V0dGluZ3NcclxuXHJcbiAgbGV0IGNhcmRTdHlsZXMgPSBbXHJcbiAgICBcInB4LTNcIixcclxuICAgIFwicHktM1wiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICAgIFwic2hhZG93XCIsXHJcblxyXG4gICAgXCJkYXJrOmJnLWdyYXktODAwXCIsXHJcbiAgICBcImRhcms6Ym9yZGVyLWdyYXktNzAwXCIsXHJcbiAgXTtcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9mbG93Yml0ZS5zMy5hbWF6b25hd3MuY29tL2Jsb2Nrcy9tYXJrZXRpbmctdWkvYXZhdGFycy9ib25uaWUtZ3JlZW4ucG5nXCI7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICBsZXQgdGV4dCA9IGRpdkdlbigpO1xyXG5cclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoaDIoXCJUb25rdXRzdSBSYW1lblwiKSk7XHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKFxyXG4gICAgICBwKFxyXG4gICAgICAgIFwiQSBwb3JjIHJpY2ggYnJvdGggLSBTZXJ2ZWQgd2l0aCBicmFpc2VkIHBvcmMsIHZlZ2dpZXMsIDEgcG9hY2hlZCBlZ2cgYW5kIGVnZyBub29kbGVzXCJcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICAgIGNhcmQuaWQgPSBcImNhcmRcIjtcclxuICAgIGNhcmRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkb20gbWFuaXBcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmV2aWV3cy5qcyB0ZXN0Jyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ28uanBnXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vYmFubmVyLnBuZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYWJvdXQgZnJvbSBcIi4vcGFnZXMvYWJvdXRcIjtcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCAqIGFzIHJldmlld3MgZnJvbSBcIi4vcGFnZXMvcmV2aWV3c1wiO1xyXG5pbXBvcnQgKiBhcyBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuXHJcbmNvbnN0IGRpdkdlbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhbWVuTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTEwXCIsIFwibXItM1wiLCBcInNtOmgtMTRcIl07XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgcmFtZW5Mb2dvLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByYW1lbkxvZ28uc3JjID0gTG9nbztcclxuXHJcbiAgcmV0dXJuIHJhbWVuTG9nbztcclxufTtcclxuXHJcbmNvbnN0IEJhbm5lckltYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTUwJVwiLCBcInctNTAlXCJdO1xyXG5cclxuICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgYmFubmVyLnNyYyA9IEJhbm5lcjtcclxuXHJcbiAgcmV0dXJuIGJhbm5lcjtcclxufTtcclxuXHJcbmNvbnN0IGEgPSAoaHJlZiA9IFwiXCIsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBocmVmO1xyXG4gIGEudGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5jb25zdCBsaSA9ICgpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG59O1xyXG5cclxuY29uc3QgdWwgPSAoY291bnQgPSAwKSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbGkoKTtcclxuICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG5jb25zdCBIciA9IChjc3MpID0+IHtcclxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gaHI7XHJcbiAgfVxyXG5cclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGhyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHI7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuID0gKGNzcywgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5jb25zdCB0YWJCdXR0b24gPSAodGV4dCA9IFwiXCIsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHN0eWxlcyA9IFtcclxuICAgIFwidW5kZXJsaW5lXCIsXHJcbiAgICBcInRleHQtYmxhY2tcIixcclxuICAgIFwiaG92ZXI6dW5kZXJsaW5lLW9mZnNldC04XCIsXHJcbiAgICBcImhvdmVyOnRleHQtZ3JheS02MDBcIixcclxuICAgIFwiaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCIsXHJcbiAgICBcInRyYW5zaXRpb24tYWxsXCIsXHJcbiAgICBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICBcImR1cmF0aW9uLTMwMFwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gIF07XHJcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGJ0bi5pZCA9IGAke3RleHR9LXRhYmA7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgaWYgKGNsYXNzU3R5bGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNsYXNzU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBidG47XHJcbn07XHJcbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAod3JhcHBlcikgPT4ge1xyXG4gIHdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBoMiA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgyO1xyXG59O1xyXG5cclxuY29uc3QgcCA9ICh0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZXIgPSAoaWQpID0+IHtcclxuICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG5cclxuICBpZiAoaWQuaW5jbHVkZXMoXCJob21lXCIpKSB7XHJcbiAgICBob21lLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcyhcIm1lbnVcIikpIHtcclxuICAgIG1lbnUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwiYWJvdXRcIikpIHtcclxuICAgIGFib3V0LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldmlld3MuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGRpdkdlbixcclxuICBsb2dvLFxyXG4gIHVsLFxyXG4gIGxpLFxyXG4gIGEsXHJcbiAgcCxcclxuICBIcixcclxuICBzcGFuLFxyXG4gIHRhYkJ1dHRvbixcclxuICBwYXJzZXIsXHJcbiAgcmVtb3ZlQ29udGVudCxcclxuICBoMixcclxuICBCYW5uZXJJbWFnZSxcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvYWJvdXQuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=