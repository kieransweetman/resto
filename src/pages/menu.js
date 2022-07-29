import {divGen, a, li, ul, removeContent, h2}  from "../utilities";


const displayContent = () => {
    let wrapper = document.querySelector('#content-wrapper');
    removeContent(wrapper);

    let body = divGen();
    let title = divGen();
    let grid = divGen();
    let cards = divGen();
    
    
    //body settings
    
    //title settings
    let menuTitle = h2("Ohayo Ramen Menu");
    title.appendChild(menuTitle);

    //card settings


    // dom manip
    grid.appendChild(cards);
    body.appendChild(title);
    body.appendChild(grid);
    wrapper.appendChild(body);
    
}

export {displayContent};