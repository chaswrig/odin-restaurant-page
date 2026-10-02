// src/index.js
import "./styles.css";
import { pageLoader } from "./page_loader.js";
import { buttonMaker } from "./button_maker.js";

buttonMaker("home");
buttonMaker("menu");
buttonMaker("about");

pageLoader("home");
