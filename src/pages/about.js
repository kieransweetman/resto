import {divGen, a, li, ul, removeContent} from "../utilities";


const displayContent = ()=>{
   console.log('test');
   let wrapper = document.querySelector('#content-wrapper');
    removeContent(wrapper);
}

export {displayContent};