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



const displayContent = ()=>{
   console.log('test');
   let wrapper = document.querySelector('#content-wrapper');
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);
}



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
    let wrapper = document.querySelector('#content-wrapper');
    (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

    let body = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
    let title = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
    let grid = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
    let card = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
    
    
    //body settings
    
    //title settings
    let menuTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
    let menuDesc = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.p)('Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste');
    
    title.appendChild(menuTitle);
    title.appendChild(menuDesc);

    //grid settings
    let gridStyles = [
        'grid',
        'grid-cols-4',
        'grid-rows-1',
        'bg-slate-500',
        'mx-auto'
    ]

    gridStyles.forEach(style=>{
        grid.classList.add(style);
    })


    //card settings

    let cardStyles = [
        "items-center", 
        
        "rounded-lg",
        "shadow",
        "sm:flex",
        "dark:bg-gray-800", 
        "dark:border-gray-700",
    ]

        const image = new Image();
        image.src = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png";
        card.appendChild(image);

        card.classList.add(cardStyles);

        


    // dom manip
    
    grid.appendChild(card);
    body.appendChild(title);
    body.appendChild(grid);
    wrapper.appendChild(body);
    
}



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
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/reviews */ "./src/pages/reviews.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");







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
  
    wrapper.childNodes.forEach(child=>{
        child.remove();
    })
}
const parser = (id) => {
  let tabContent = document.querySelector(`#${id}`);
  
   
  if(id.includes('home')){
    _pages_home__WEBPACK_IMPORTED_MODULE_4__.displayContent();
  } else if (id.includes('menu')){
    _pages_menu__WEBPACK_IMPORTED_MODULE_2__.displayContent();
  } else if (id.includes('about')){
    _pages_about__WEBPACK_IMPORTED_MODULE_1__.displayContent();
  } else {
    _pages_reviews__WEBPACK_IMPORTED_MODULE_3__.displayContent();
  }
}

const h2 = (text="")=>{
  let h2 = document.createElement('h2');
  h2.textContent = text;
  return h2;
}

const p = (text="") => {
  let p = document.createElement('p')
  p.textContent = text;
  return p;
}





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWE7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1I4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0EsZUFBZSxrREFBTTtBQUNyQixnQkFBZ0Isa0RBQU07QUFDdEIsZUFBZSxrREFBTTtBQUNyQixlQUFlLGtEQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUU7QUFDdEIsbUJBQW1CLDZDQUFDO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakU4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUI7QUFDdUM7QUFDRjtBQUNNO0FBQ047QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLHNDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhDQUE4QyxHQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCLElBQUk7QUFDSixJQUFJLHVEQUFtQjtBQUN2QixJQUFJO0FBQ0osSUFBSSx3REFBb0I7QUFDeEIsSUFBSTtBQUNKLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NGOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNJdEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKT0+e1xyXG4gICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdCBob21lLmpzJyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnQsIGgyLCBwfSAgZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG5cclxuICAgIGxldCBib2R5ID0gZGl2R2VuKCk7XHJcbiAgICBsZXQgdGl0bGUgPSBkaXZHZW4oKTtcclxuICAgIGxldCBncmlkID0gZGl2R2VuKCk7XHJcbiAgICBsZXQgY2FyZCA9IGRpdkdlbigpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vYm9keSBzZXR0aW5nc1xyXG4gICAgXHJcbiAgICAvL3RpdGxlIHNldHRpbmdzXHJcbiAgICBsZXQgbWVudVRpdGxlID0gaDIoXCJPaGF5byBSYW1lbiBNZW51XCIpO1xyXG4gICAgbGV0IG1lbnVEZXNjID0gcCgnT3VyIGJyb3RocyBhcmUgbWFkZSB3aXRoIHRpbWUgYW5kIGxvdmUgdG8gcHJvZHVjZSB0aGUgbW9zdCBVbWFtaS1lc3F1ZSBmbGF2b3JzIHlvdSB3aWxsIGV2ZXIgdGFzdGUnKTtcclxuICAgIFxyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcclxuXHJcbiAgICAvL2dyaWQgc2V0dGluZ3NcclxuICAgIGxldCBncmlkU3R5bGVzID0gW1xyXG4gICAgICAgICdncmlkJyxcclxuICAgICAgICAnZ3JpZC1jb2xzLTQnLFxyXG4gICAgICAgICdncmlkLXJvd3MtMScsXHJcbiAgICAgICAgJ2JnLXNsYXRlLTUwMCcsXHJcbiAgICAgICAgJ214LWF1dG8nXHJcbiAgICBdXHJcblxyXG4gICAgZ3JpZFN0eWxlcy5mb3JFYWNoKHN0eWxlPT57XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vY2FyZCBzZXR0aW5nc1xyXG5cclxuICAgIGxldCBjYXJkU3R5bGVzID0gW1xyXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgICAgIFwic2hhZG93XCIsXHJcbiAgICAgICAgXCJzbTpmbGV4XCIsXHJcbiAgICAgICAgXCJkYXJrOmJnLWdyYXktODAwXCIsIFxyXG4gICAgICAgIFwiZGFyazpib3JkZXItZ3JheS03MDBcIixcclxuICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBcImh0dHBzOi8vZmxvd2JpdGUuczMuYW1hem9uYXdzLmNvbS9ibG9ja3MvbWFya2V0aW5nLXVpL2F2YXRhcnMvYm9ubmllLWdyZWVuLnBuZ1wiO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2FyZFN0eWxlcyk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAvLyBkb20gbWFuaXBcclxuICAgIFxyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udGVudH07IiwiaW1wb3J0IHtkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Jldmlld3MuanMgdGVzdCcpO1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvLmpwZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYWJvdXQgZnJvbSAnLi9wYWdlcy9hYm91dCc7XHJcbmltcG9ydCAqIGFzIG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51JztcclxuaW1wb3J0ICogYXMgcmV2aWV3cyBmcm9tICcuL3BhZ2VzL3Jldmlld3MnO1xyXG5pbXBvcnQgKiBhcyBob21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XHJcblxyXG5jb25zdCBkaXZHZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICBjb25zdCByYW1lbkxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsZXQgc3R5bGVzID0gW1wiaC0xMFwiLCBcIm1yLTNcIiwgXCJzbTpoLTE0XCJdO1xyXG5cclxuICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHJhbWVuTG9nby5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmFtZW5Mb2dvLnNyYyA9IExvZ287XHJcblxyXG4gIHJldHVybiByYW1lbkxvZ287XHJcbn07XHJcblxyXG5jb25zdCBhID0gKGhyZWYgPSBcIlwiLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYS5ocmVmID0gaHJlZjtcclxuICBhLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBhO1xyXG59O1xyXG5cclxuY29uc3QgbGkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHVsID0gKGNvdW50ID0gMCkgPT4ge1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgY29uc3QgbGlzdCA9IGxpKCk7XHJcbiAgICBsaXN0LmlkID0gaTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVsO1xyXG59O1xyXG5cclxuY29uc3QgSHIgPSAoY3NzKSA9PiB7XHJcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIGhyO1xyXG4gIH1cclxuXHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBoci5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGhyO1xyXG59O1xyXG5cclxuY29uc3Qgc3BhbiA9IChjc3MsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgaWYgKGNzcy5sZW5naHQgPD0gMCkge1xyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzcGFuO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHRhYkJ1dHRvbiA9ICh0ZXh0ID0gXCJcIiwgY2xhc3NTdHlsZXMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29uc3Qgc3R5bGVzID0gW1xyXG4gICAgXCJ1bmRlcmxpbmVcIixcclxuICAgIFwidGV4dC1ibGFja1wiLFxyXG4gICAgXCJob3Zlcjp1bmRlcmxpbmUtb2Zmc2V0LThcIixcclxuICAgIFwiaG92ZXI6dGV4dC1ncmF5LTYwMFwiLFxyXG4gICAgXCJob3Zlcjpib3JkZXItZ3JheS0zMDBcIixcclxuICAgIFwidHJhbnNpdGlvbi1hbGxcIixcclxuICAgIFwiZWFzZS1pbi1vdXRcIixcclxuICAgIFwiZHVyYXRpb24tMzAwXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgXTtcclxuICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgYnRuLmlkID0gYCR7dGV4dH0tdGFiYDtcclxuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICBpZiAoY2xhc3NTdHlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY2xhc3NTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGJ0bjtcclxufTtcclxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICh3cmFwcGVyKSA9PiB7XHJcbiAgXHJcbiAgICB3cmFwcGVyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZD0+e1xyXG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgfSlcclxufVxyXG5jb25zdCBwYXJzZXIgPSAoaWQpID0+IHtcclxuICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG4gIFxyXG4gICBcclxuICBpZihpZC5pbmNsdWRlcygnaG9tZScpKXtcclxuICAgIGhvbWUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdtZW51Jykpe1xyXG4gICAgbWVudS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2Fib3V0Jykpe1xyXG4gICAgYWJvdXQuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV2aWV3cy5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaDIgPSAodGV4dD1cIlwiKT0+e1xyXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaDIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBoMjtcclxufVxyXG5cclxuY29uc3QgcCA9ICh0ZXh0PVwiXCIpID0+IHtcclxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBwO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZGl2R2VuLCBsb2dvLCB1bCwgbGksIGEsIHAsIEhyLCBzcGFuLCB0YWJCdXR0b24sIHBhcnNlciwgcmVtb3ZlQ29udGVudCwgaDIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdXRpbGl0aWVzLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9