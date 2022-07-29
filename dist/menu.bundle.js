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
    let cards = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.divGen)();
    
    
    //body settings
    
    //title settings
    let menuTitle = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.h2)("Ohayo Ramen Menu");
    title.appendChild(menuTitle);

    //card settings


    // dom manip
    grid.appendChild(cards);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0by8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RvLy4vc3JjL3BhZ2VzL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vcmVzdG8vLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0by93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaXZHZW4sIGEsIGxpLCB1bCwgcmVtb3ZlQ29udGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCk9PntcclxuICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QgaG9tZS5qcycpO1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC13cmFwcGVyJyk7XHJcbiAgICByZW1vdmVDb250ZW50KHdyYXBwZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50LCBoMn0gIGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5Q29udGVudCA9ICgpID0+IHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtd3JhcHBlcicpO1xyXG4gICAgcmVtb3ZlQ29udGVudCh3cmFwcGVyKTtcclxuXHJcbiAgICBsZXQgYm9keSA9IGRpdkdlbigpO1xyXG4gICAgbGV0IHRpdGxlID0gZGl2R2VuKCk7XHJcbiAgICBsZXQgZ3JpZCA9IGRpdkdlbigpO1xyXG4gICAgbGV0IGNhcmRzID0gZGl2R2VuKCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9ib2R5IHNldHRpbmdzXHJcbiAgICBcclxuICAgIC8vdGl0bGUgc2V0dGluZ3NcclxuICAgIGxldCBtZW51VGl0bGUgPSBoMihcIk9oYXlvIFJhbWVuIE1lbnVcIik7XHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG5cclxuICAgIC8vY2FyZCBzZXR0aW5nc1xyXG5cclxuXHJcbiAgICAvLyBkb20gbWFuaXBcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2FyZHMpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250ZW50fTsiLCJpbXBvcnQge2RpdkdlbiwgYSwgbGksIHVsLCByZW1vdmVDb250ZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCk9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmV2aWV3cy5qcyB0ZXN0Jyk7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LXdyYXBwZXInKTtcclxuICAgIHJlbW92ZUNvbnRlbnQod3JhcHBlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRlbnR9OyIsImltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ28uanBnXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhYm91dCBmcm9tICcuL3BhZ2VzL2Fib3V0JztcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgKiBhcyByZXZpZXdzIGZyb20gJy4vcGFnZXMvcmV2aWV3cyc7XHJcbmltcG9ydCAqIGFzIGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuXHJcbmNvbnN0IGRpdkdlbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJldHVybiBkaXY7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhbWVuTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIGxldCBzdHlsZXMgPSBbXCJoLTEwXCIsIFwibXItM1wiLCBcInNtOmgtMTRcIl07XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgcmFtZW5Mb2dvLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByYW1lbkxvZ28uc3JjID0gTG9nbztcclxuXHJcbiAgcmV0dXJuIHJhbWVuTG9nbztcclxufTtcclxuXHJcbmNvbnN0IGEgPSAoaHJlZiA9IFwiXCIsIHRleHRjb250ZW50ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhLmhyZWYgPSBocmVmO1xyXG4gIGEudGV4dENvbnRlbnQgPSB0ZXh0Y29udGVudDtcclxuXHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5jb25zdCBsaSA9ICgpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG59O1xyXG5cclxuY29uc3QgdWwgPSAoY291bnQgPSAwKSA9PiB7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbGkoKTtcclxuICAgIGxpc3QuaWQgPSBpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdWw7XHJcbn07XHJcblxyXG5jb25zdCBIciA9IChjc3MpID0+IHtcclxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gaHI7XHJcbiAgfVxyXG5cclxuICBjc3MuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgIGhyLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaHI7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuID0gKGNzcywgdGV4dGNvbnRlbnQgPSBcIlwiKSA9PiB7XHJcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBpZiAoY3NzLmxlbmdodCA8PSAwKSB7XHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRjb250ZW50O1xyXG4gIGNzcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHNwYW47XHJcbn07XHJcblxyXG5cclxuY29uc3QgdGFiQnV0dG9uID0gKHRleHQgPSBcIlwiLCBjbGFzc1N0eWxlcyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBzdHlsZXMgPSBbXHJcbiAgICBcInVuZGVybGluZVwiLFxyXG4gICAgXCJ0ZXh0LWJsYWNrXCIsXHJcbiAgICBcImhvdmVyOnVuZGVybGluZS1vZmZzZXQtOFwiLFxyXG4gICAgXCJob3Zlcjp0ZXh0LWdyYXktNjAwXCIsXHJcbiAgICBcImhvdmVyOmJvcmRlci1ncmF5LTMwMFwiLFxyXG4gICAgXCJ0cmFuc2l0aW9uLWFsbFwiLFxyXG4gICAgXCJlYXNlLWluLW91dFwiLFxyXG4gICAgXCJkdXJhdGlvbi0zMDBcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICBdO1xyXG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICBidG4uaWQgPSBgJHt0ZXh0fS10YWJgO1xyXG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gIGlmIChjbGFzc1N0eWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjbGFzc1N0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYnRuO1xyXG59O1xyXG5jb25zdCByZW1vdmVDb250ZW50ID0gKHdyYXBwZXIpID0+IHtcclxuICBcclxuICAgIHdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkPT57XHJcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IHBhcnNlciA9IChpZCkgPT4ge1xyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgXHJcbiAgIFxyXG4gIGlmKGlkLmluY2x1ZGVzKCdob21lJykpe1xyXG4gICAgaG9tZS5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ21lbnUnKSl7XHJcbiAgICBtZW51LmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnYWJvdXQnKSl7XHJcbiAgICBhYm91dC5kaXNwbGF5Q29udGVudCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXZpZXdzLmRpc3BsYXlDb250ZW50KCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoMiA9ICh0ZXh0PVwiXCIpPT57XHJcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBoMi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGgyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgZGl2R2VuLCBsb2dvLCB1bCwgbGksIGEsIEhyLCBzcGFuLCB0YWJCdXR0b24sIHBhcnNlciwgcmVtb3ZlQ29udGVudCwgaDIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvbWVudS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==