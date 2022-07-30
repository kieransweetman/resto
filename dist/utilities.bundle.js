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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utilities.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCk9PntcclxuICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QgaG9tZS5qcycpO1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQgeyBkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudCwgaDIsIHAgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC13cmFwcGVyXCIpO1xyXG4gIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcblxyXG4gIGxldCBib2R5ID0gZGl2R2VuKCk7XHJcbiAgbGV0IHRpdGxlID0gZGl2R2VuKCk7XHJcbiAgbGV0IGdyaWQgPSBkaXZHZW4oKTtcclxuICBsZXQgY2FyZHMgPSBbZGl2R2VuKCksIGRpdkdlbigpXTtcclxuXHJcbiAgLy9ib2R5IHNldHRpbmdzXHJcblxyXG4gIC8vdGl0bGUgc2V0dGluZ3NcclxuICBsZXQgbWVudVRpdGxlID0gaDIoXCJPaGF5byBSYW1lbiBNZW51XCIpO1xyXG4gIGxldCBtZW51RGVzYyA9IHAoXHJcbiAgICBcIk91ciBicm90aHMgYXJlIG1hZGUgd2l0aCB0aW1lIGFuZCBsb3ZlIHRvIHByb2R1Y2UgdGhlIG1vc3QgVW1hbWktZXNxdWUgZmxhdm9ycyB5b3Ugd2lsbCBldmVyIHRhc3RlXCJcclxuICApO1xyXG5cclxuICB0aXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcclxuXHJcbiAgLy9ncmlkIHNldHRpbmdzXHJcbiAgbGV0IGdyaWRTdHlsZXMgPSBbXHJcbiAgICBcImdyaWRcIixcclxuICAgIFwiZ3JpZC1jb2xzLTRcIixcclxuICAgIFwiZ3JpZC1yb3dzLTFcIixcclxuICAgIFwiYmctc2xhdGUtNTAwXCIsXHJcbiAgICBcIm14LWF1dG9cIixcclxuICBdO1xyXG5cclxuICBncmlkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NhcmQgc2V0dGluZ3NcclxuXHJcbiAgbGV0IGNhcmRTdHlsZXMgPSBbXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG5cclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJzaGFkb3dcIixcclxuICAgIFwic206ZmxleFwiLFxyXG4gICAgXCJkYXJrOmJnLWdyYXktODAwXCIsXHJcbiAgICBcImRhcms6Ym9yZGVyLWdyYXktNzAwXCIsXHJcbiAgXTtcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9XHJcbiAgICAgIFwiaHR0cHM6Ly9mbG93Yml0ZS5zMy5hbWF6b25hd3MuY29tL2Jsb2Nrcy9tYXJrZXRpbmctdWkvYXZhdGFycy9ib25uaWUtZ3JlZW4ucG5nXCI7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGNhcmRTdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkb20gbWFuaXBcclxuXHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udGVudCB9O1xyXG4iLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmV2aWV3cy5qcyB0ZXN0Jyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ28uanBnXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhYm91dCBmcm9tICcuL3BhZ2VzL2Fib3V0JztcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgKiBhcyByZXZpZXdzIGZyb20gJy4vcGFnZXMvcmV2aWV3cyc7XHJcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuXHJcbmNvbnN0IGRpdkdlbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhbWVuTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTEwXCIsIFwibXItM1wiLCBcInNtOmgtMTRcIl07XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgcmFtZW5Mb2dvLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByYW1lbkxvZ28uc3JjID0gTG9nbztcclxuXHJcbiAgcmV0dXJuIHJhbWVuTG9nbztcclxufTtcclxuXHJcbmNvbnN0IGEgPSAoaHJlZiA9IFwiXCIsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBocmVmO1xyXG4gIGEudGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5jb25zdCBsaSA9ICgpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG59O1xyXG5cclxuY29uc3QgdWwgPSAoY291bnQgPSAwKSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbGkoKTtcclxuICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG5jb25zdCBIciA9IChjc3MpID0+IHtcclxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gaHI7XHJcbiAgfVxyXG5cclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGhyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHI7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuID0gKGNzcywgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5cclxuY29uc3QgdGFiQnV0dG9uID0gKHRleHQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBzdHlsZXMgPSBbXHJcbiAgICBcInVuZGVybGluZVwiLFxyXG4gICAgXCJ0ZXh0LWJsYWNrXCIsXHJcbiAgICBcImhvdmVyOnVuZGVybGluZS1vZmZzZXQtOFwiLFxyXG4gICAgXCJob3Zlcjp0ZXh0LWdyYXktNjAwXCIsXHJcbiAgICBcImhvdmVyOmJvcmRlci1ncmF5LTMwMFwiLFxyXG4gICAgXCJ0cmFuc2l0aW9uLWFsbFwiLFxyXG4gICAgXCJlYXNlLWluLW91dFwiLFxyXG4gICAgXCJkdXJhdGlvbi0zMDBcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICBdO1xyXG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICBidG4uaWQgPSBgJHt0ZXh0fS10YWJgO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIGlmIChjbGFzc1N0eWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjbGFzc1N0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5jb25zdCByZW1vdmVDb250ZW50ID0gKHdyYXBwZXIpID0+IHtcclxuICBcclxuICAgIHdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkPT57XHJcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IHBhcnNlciA9IChpZCkgPT4ge1xyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgXHJcbiAgIFxyXG4gIGlmKGlkLmluY2x1ZGVzKCdob21lJykpe1xyXG4gICAgaG9tZS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ21lbnUnKSl7XHJcbiAgICBtZW51LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnYWJvdXQnKSl7XHJcbiAgICBhYm91dC5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXZpZXdzLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoMiA9ICh0ZXh0PVwiXCIpPT57XHJcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgyO1xyXG59XHJcblxyXG5jb25zdCBwID0gKHRleHQ9XCJcIikgPT4ge1xyXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIHA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBkaXZHZW4sIGxvZ28sIHVsLCBsaSwgYSwgcCwgSHIsIHNwYW4sIHRhYkJ1dHRvbiwgcGFyc2VyLCByZW1vdmVDb250ZW50LCBoMiB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy91dGlsaXRpZXMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=