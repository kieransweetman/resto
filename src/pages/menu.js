import { divGen, a, li, ul, removeContent, h2, p } from "../utilities";

const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);

  let body = divGen();
  let title = divGen();
  let grid = divGen();
  let cards = [divGen(), divGen()];

  //body settings

  //title settings
  let menuTitle = h2("Ohayo Ramen Menu");
  let menuDesc = p(
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

export { displayContent };
