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
  let wrapper = document.querySelector("#content-wrapper");
  (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.removeContent)(wrapper);

  let body = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let title = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let grid = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
  let cards = [(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)(), (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)()];

  //body settings

  //title settings
  let menuTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
  let menuDesc = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.p)(
    "Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste"
  );

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

  //card settings

  let cardStyles = [
    "items-center",

    "rounded-lg",
    "shadow",
    "sm:flex",
    "dark:bg-gray-800",
    "dark:border-gray-700",
  ];

  cards.forEach((card) => {
    const image = new Image();
    image.src =
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png";
    card.appendChild(image);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/about.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKT0+e1xyXG4gICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdCBob21lLmpzJyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCB7IGRpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50LCBoMiwgcCB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LXdyYXBwZXJcIik7XHJcbiAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgbGV0IGJvZHkgPSBkaXZHZW4oKTtcclxuICBsZXQgdGl0bGUgPSBkaXZHZW4oKTtcclxuICBsZXQgZ3JpZCA9IGRpdkdlbigpO1xyXG4gIGxldCBjYXJkcyA9IFtkaXZHZW4oKSwgZGl2R2VuKCldO1xyXG5cclxuICAvL2JvZHkgc2V0dGluZ3NcclxuXHJcbiAgLy90aXRsZSBzZXR0aW5nc1xyXG4gIGxldCBtZW51VGl0bGUgPSBoMihcIk9oYXlvIFJhbWVuIE1lbnVcIik7XHJcbiAgbGV0IG1lbnVEZXNjID0gcChcclxuICAgIFwiT3VyIGJyb3RocyBhcmUgbWFkZSB3aXRoIHRpbWUgYW5kIGxvdmUgdG8gcHJvZHVjZSB0aGUgbW9zdCBVbWFtaS1lc3F1ZSBmbGF2b3JzIHlvdSB3aWxsIGV2ZXIgdGFzdGVcIlxyXG4gICk7XHJcblxyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xyXG5cclxuICAvL2dyaWQgc2V0dGluZ3NcclxuICBsZXQgZ3JpZFN0eWxlcyA9IFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJncmlkLWNvbHMtNFwiLFxyXG4gICAgXCJncmlkLXJvd3MtMVwiLFxyXG4gICAgXCJiZy1zbGF0ZS01MDBcIixcclxuICAgIFwibXgtYXV0b1wiLFxyXG4gIF07XHJcblxyXG4gIGdyaWRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vY2FyZCBzZXR0aW5nc1xyXG5cclxuICBsZXQgY2FyZFN0eWxlcyA9IFtcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcblxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcInNoYWRvd1wiLFxyXG4gICAgXCJzbTpmbGV4XCIsXHJcbiAgICBcImRhcms6YmctZ3JheS04MDBcIixcclxuICAgIFwiZGFyazpib3JkZXItZ3JheS03MDBcIixcclxuICBdO1xyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID1cclxuICAgICAgXCJodHRwczovL2Zsb3diaXRlLnMzLmFtYXpvbmF3cy5jb20vYmxvY2tzL21hcmtldGluZy11aS9hdmF0YXJzL2Jvbm5pZS1ncmVlbi5wbmdcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgY2FyZFN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRvbSBtYW5pcFxyXG5cclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gIH0pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb250ZW50IH07XHJcbiIsImltcG9ydCB7ZGl2R2VuLCBhLCBsaSwgdWwsIHJlbW92ZUNvbnRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXZpZXdzLmpzIHRlc3QnKTtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gICAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udGVudH07IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nby5qcGdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQnO1xyXG5pbXBvcnQgKiBhcyBtZW51IGZyb20gJy4vcGFnZXMvbWVudSc7XHJcbmltcG9ydCAqIGFzIHJldmlld3MgZnJvbSAnLi9wYWdlcy9yZXZpZXdzJztcclxuaW1wb3J0ICogYXMgaG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5cclxuY29uc3QgZGl2R2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuXHJcbmNvbnN0IGxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFtZW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgbGV0IHN0eWxlcyA9IFtcImgtMTBcIiwgXCJtci0zXCIsIFwic206aC0xNFwiXTtcclxuXHJcbiAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICByYW1lbkxvZ28uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJhbWVuTG9nby5zcmMgPSBMb2dvO1xyXG5cclxuICByZXR1cm4gcmFtZW5Mb2dvO1xyXG59O1xyXG5cclxuY29uc3QgYSA9IChocmVmID0gXCJcIiwgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGEuaHJlZiA9IGhyZWY7XHJcbiAgYS50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG5cclxuICByZXR1cm4gYTtcclxufTtcclxuXHJcbmNvbnN0IGxpID0gKCkgPT4ge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbn07XHJcblxyXG5jb25zdCB1bCA9IChjb3VudCA9IDApID0+IHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGxpc3QgPSBsaSgpO1xyXG4gICAgbGlzdC5pZCA9IGk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1bDtcclxufTtcclxuXHJcbmNvbnN0IEhyID0gKGNzcykgPT4ge1xyXG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBocjtcclxuICB9XHJcblxyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgaHIuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBocjtcclxufTtcclxuXHJcbmNvbnN0IHNwYW4gPSAoY3NzLCB0ZXh0Y29udGVudCA9IFwiXCIpID0+IHtcclxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGlmIChjc3MubGVuZ2h0IDw9IDApIHtcclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dGNvbnRlbnQ7XHJcbiAgY3NzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gc3BhbjtcclxufTtcclxuXHJcblxyXG5jb25zdCB0YWJCdXR0b24gPSAodGV4dCA9IFwiXCIsIGNsYXNzU3R5bGVzID0gW10pID0+IHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHN0eWxlcyA9IFtcclxuICAgIFwidW5kZXJsaW5lXCIsXHJcbiAgICBcInRleHQtYmxhY2tcIixcclxuICAgIFwiaG92ZXI6dW5kZXJsaW5lLW9mZnNldC04XCIsXHJcbiAgICBcImhvdmVyOnRleHQtZ3JheS02MDBcIixcclxuICAgIFwiaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCIsXHJcbiAgICBcInRyYW5zaXRpb24tYWxsXCIsXHJcbiAgICBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICBcImR1cmF0aW9uLTMwMFwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gIF07XHJcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gIGJ0bi5pZCA9IGAke3RleHR9LXRhYmA7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgaWYgKGNsYXNzU3R5bGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNsYXNzU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBidG47XHJcbn07XHJcbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAod3JhcHBlcikgPT4ge1xyXG4gIFxyXG4gICAgd3JhcHBlci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQ9PntcclxuICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn1cclxuY29uc3QgcGFyc2VyID0gKGlkKSA9PiB7XHJcbiAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICBcclxuICAgXHJcbiAgaWYoaWQuaW5jbHVkZXMoJ2hvbWUnKSl7XHJcbiAgICBob21lLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnbWVudScpKXtcclxuICAgIG1lbnUuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdhYm91dCcpKXtcclxuICAgIGFib3V0LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldmlld3MuZGlzcGxheUNvbnRlbnQoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGgyID0gKHRleHQ9XCJcIik9PntcclxuICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaDI7XHJcbn1cclxuXHJcbmNvbnN0IHAgPSAodGV4dD1cIlwiKSA9PiB7XHJcbiAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGRpdkdlbiwgbG9nbywgdWwsIGxpLCBhLCBwLCBIciwgc3BhbiwgdGFiQnV0dG9uLCBwYXJzZXIsIHJlbW92ZUNvbnRlbnQsIGgyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2Fib3V0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9