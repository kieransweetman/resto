import "./styles.css";
import { navBar, main, foot } from "./components";
import * as flowbite from "flowbite";

const header = document.querySelector("header");
const content = document.querySelector("#content");
const footer = document.querySelector("footer");

header.appendChild(navBar());
content.appendChild(main());
footer.appendChild(foot());
