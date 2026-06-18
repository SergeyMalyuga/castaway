import "./style.scss";
import { MainPage } from "./pages/MainPage.ts";
import { Header } from "./components/header/Header.ts";
import {Hero} from "./components/hero/Hero.ts";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app") as HTMLElement;
  const header = new Header();
  const hero = new Hero();

  if (container) {
    const mainPage = new MainPage(container, { header, hero });
    mainPage.render();
  }
});
