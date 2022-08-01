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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/reviews.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxHQUFHO0FBQ2pEO0FBQ0E7QUFDQSxJQUFJLHVEQUFtQjtBQUN2QixJQUFJO0FBQ0osSUFBSSx1REFBbUI7QUFDdkIsSUFBSTtBQUNKLElBQUksd0RBQW9CO0FBQ3hCLElBQUk7QUFDSixJQUFJLDBEQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFlRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEtGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBkaXZHZW4sXHJcbiAgYSxcclxuICBsaSxcclxuICB1bCxcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIHAsXHJcbiAgQmFubmVySW1hZ2UsXHJcbn0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtd3JhcHBlclwiKTtcclxuICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICAvLyBhYm91dCBzZWN0aW9uc1xyXG4gIGxldCBhYm91dFRleHQgPSBkaXZHZW4oKTtcclxuICBsZXQgYmFubmVyID0gQmFubmVySW1hZ2UoKTtcclxuXHJcbiAgLy8gYWJvdXQgdGV4dCBzZXR0aW5nc1xyXG5cclxuICBsZXQgYWJvdXRTdHlsZXMgPSBbXTtcclxuICBsZXQgYWJvdXRJbmZvID0gW1xyXG4gICAgaDIoXCJPaGF5byBSYW1lblwiKSxcclxuICAgIHAoXHJcbiAgICAgIFwiSGVyZSB5b3Ugd2lsbCBmaW5kIG91ciBzaG9ydCBoaXN0b3J5LCB3aHkgd2UgbG92ZSBtYWtpbmcgcmFtZW4sIGFuZCB3aGF0IHRvIGV4cGVjdCBmcm9tIHVzIGluIHRoZSBmdXR1cmUuXCJcclxuICAgICksXHJcbiAgXTtcclxuXHJcbiAgLy8gICBhYm91dEluZm8uZm9yRWFjaCgoYmx1cmIpID0+IHtcclxuICAvLyAgICAgYWJvdXRUZXh0LmFwcGVuZENoaWxkKGJsdXJiKTtcclxuICAvLyAgIH0pO1xyXG5cclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG59O1xyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QgaG9tZS5qcycpO1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCwgaDIsIHAgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBib2R5ID0gZGl2R2VuKCk7XHJcbiAgbGV0IHRpdGxlID0gZGl2R2VuKCk7XHJcbiAgbGV0IGdyaWQgPSBkaXZHZW4oKTtcclxuICBsZXQgY2FyZHMgPSBbZGl2R2VuKCksIGRpdkdlbigpLCBkaXZHZW4oKSwgZGl2R2VuKCldO1xyXG5cclxuICAvL2JvZHkgc2V0dGluZ3NcclxuXHJcbiAgLy90aXRsZSBzZXR0aW5nc1xyXG4gIGxldCBtZW51VGl0bGUgPSBoMihcIk9oYXlvIFJhbWVuIE1lbnVcIik7XHJcbiAgbGV0IG1lbnVEZXNjID0gcChcclxuICAgIFwiT3VyIGJyb3RocyBhcmUgbWFkZSB3aXRoIHRpbWUgYW5kIGxvdmUgdG8gcHJvZHVjZSB0aGUgbW9zdCBVbWFtaS1lc3F1ZSBmbGF2b3JzIHlvdSB3aWxsIGV2ZXIgdGFzdGVcIlxyXG4gICk7XHJcblxyXG4gIGxldCB0aXRsZVN0eWxlcyA9IFtcInRleHQtY2VudGVyXCJdO1xyXG5cclxuICB0aXRsZVN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xyXG5cclxuICAvL2dyaWQgc2V0dGluZ3NcclxuICBsZXQgZ3JpZFN0eWxlcyA9IFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJncmlkLWNvbHMtNFwiLFxyXG4gICAgXCJncmlkLXJvd3MtMVwiLFxyXG4gICAgXCJiZy1zbGF0ZS01MDBcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gIF07XHJcblxyXG4gIGdyaWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIGdyaWQuaWQgPSBcImNhcmRzXCI7XHJcblxyXG4gIC8vY2FyZCBzZXR0aW5nc1xyXG5cclxuICBsZXQgY2FyZFN0eWxlcyA9IFtcclxuICAgIFwicHgtM1wiLFxyXG4gICAgXCJweS0zXCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG5cclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJzaGFkb3dcIixcclxuXHJcbiAgICBcImRhcms6YmctZ3JheS04MDBcIixcclxuICAgIFwiZGFyazpib3JkZXItZ3JheS03MDBcIixcclxuICBdO1xyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID1cclxuICAgICAgXCJodHRwczovL2Zsb3diaXRlLnMzLmFtYXpvbmF3cy5jb20vYmxvY2tzL21hcmtldGluZy11aS9hdmF0YXJzL2Jvbm5pZS1ncmVlbi5wbmdcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGxldCB0ZXh0ID0gZGl2R2VuKCk7XHJcblxyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChoMihcIlRvbmt1dHN1IFJhbWVuXCIpKTtcclxuICAgIHRleHQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIHAoXHJcbiAgICAgICAgXCJBIHBvcmMgcmljaCBicm90aCAtIFNlcnZlZCB3aXRoIGJyYWlzZWQgcG9yYywgdmVnZ2llcywgMSBwb2FjaGVkIGVnZyBhbmQgZWdnIG5vb2RsZXNcIlxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgY2FyZC5pZCA9IFwiY2FyZFwiO1xyXG4gICAgY2FyZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRvbSBtYW5pcFxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXZpZXdzLmpzIHRlc3QnKTtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gICAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udGVudH07IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nby5qcGdcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9iYW5uZXIucG5nXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhYm91dCBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xyXG5pbXBvcnQgKiBhcyBtZW51IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0ICogYXMgcmV2aWV3cyBmcm9tIFwiLi9wYWdlcy9yZXZpZXdzXCI7XHJcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xyXG5cclxuY29uc3QgZGl2R2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFtZW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcImgtMTBcIiwgXCJtci0zXCIsIFwic206aC0xNFwiXTtcclxuXHJcbiAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICByYW1lbkxvZ28uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJhbWVuTG9nby5zcmMgPSBMb2dvO1xyXG5cclxuICByZXR1cm4gcmFtZW5Mb2dvO1xyXG59O1xyXG5cclxuY29uc3QgQmFubmVySW1hZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFubmVyID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcImgtNTAlXCIsIFwidy01MCVcIl07XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICBiYW5uZXIuc3JjID0gQmFubmVyO1xyXG5cclxuICByZXR1cm4gYmFubmVyO1xyXG59O1xyXG5cclxuY29uc3QgYSA9IChocmVmID0gXCJcIiwgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IGhyZWY7XHJcbiAgYS50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG5cclxuICByZXR1cm4gYTtcclxufTtcclxuXHJcbmNvbnN0IGxpID0gKCkgPT4ge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbn07XHJcblxyXG5jb25zdCB1bCA9IChjb3VudCA9IDApID0+IHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3QgPSBsaSgpO1xyXG4gICAgbGlzdC5pZCA9IGk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1bDtcclxufTtcclxuXHJcbmNvbnN0IEhyID0gKGNzcykgPT4ge1xyXG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBocjtcclxuICB9XHJcblxyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgaHIuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBocjtcclxufTtcclxuXHJcbmNvbnN0IHNwYW4gPSAoY3NzLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcbmNvbnN0IHRhYkJ1dHRvbiA9ICh0ZXh0ID0gXCJcIiwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29uc3Qgc3R5bGVzID0gW1xyXG4gICAgXCJ1bmRlcmxpbmVcIixcclxuICAgIFwidGV4dC1ibGFja1wiLFxyXG4gICAgXCJob3Zlcjp1bmRlcmxpbmUtb2Zmc2V0LThcIixcclxuICAgIFwiaG92ZXI6dGV4dC1ncmF5LTYwMFwiLFxyXG4gICAgXCJob3Zlcjpib3JkZXItZ3JheS0zMDBcIixcclxuICAgIFwidHJhbnNpdGlvbi1hbGxcIixcclxuICAgIFwiZWFzZS1pbi1vdXRcIixcclxuICAgIFwiZHVyYXRpb24tMzAwXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgXTtcclxuICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgYnRuLmlkID0gYCR7dGV4dH0tdGFiYDtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICBpZiAoY2xhc3NTdHlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY2xhc3NTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufTtcclxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICh3cmFwcGVyKSA9PiB7XHJcbiAgd3JhcHBlci5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjaGlsZC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGgyID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaDI7XHJcbn07XHJcblxyXG5jb25zdCBwID0gKHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gcDtcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlciA9IChpZCkgPT4ge1xyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcblxyXG4gIGlmIChpZC5pbmNsdWRlcyhcImhvbWVcIikpIHtcclxuICAgIGhvbWUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKFwibWVudVwiKSkge1xyXG4gICAgbWVudS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoXCJhYm91dFwiKSkge1xyXG4gICAgYWJvdXQuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV2aWV3cy5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGl2R2VuLFxyXG4gIGxvZ28sXHJcbiAgdWwsXHJcbiAgbGksXHJcbiAgYSxcclxuICBwLFxyXG4gIEhyLFxyXG4gIHNwYW4sXHJcbiAgdGFiQnV0dG9uLFxyXG4gIHBhcnNlcixcclxuICByZW1vdmVDb250ZW50LFxyXG4gIGgyLFxyXG4gIEJhbm5lckltYWdlLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9yZXZpZXdzLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9