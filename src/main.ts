import "./style.scss";
import { MainPage } from "./pages/MainPage.ts";
import { Header } from "./components/header/Header.ts";
import {Hero} from "./components/hero/Hero.ts";
import {Episodes} from "./components/episodes/Episodes.ts";
import {Mentor} from "./components/mentor/Mentor.ts";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app") as HTMLElement;
  const header = new Header();
  const hero = new Hero();
  const episodes = new Episodes();
  const mentor = new Mentor();

  if (container) {
    const mainPage = new MainPage(container, { header, hero, episodes, mentor });
    mainPage.render();
  }
});
