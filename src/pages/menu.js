import { divGen, a, li, ul, removeContent, h2, p } from "../utilities";

const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);

  let body = divGen();
  let title = divGen();
  let grid = divGen();
  let cards = [divGen(), divGen(), divGen(), divGen()];

  //body settings

  //title settings
  let menuTitle = h2("Ohayo Ramen Menu");
  let menuDesc = p(
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

    let text = divGen();

    text.appendChild(h2("Tonkutsu Ramen"));
    text.appendChild(
      p(
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

export { displayContent };
