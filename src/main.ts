import "./style.scss";
import {MainPage} from "./pages/MainPage.ts";
import {Header} from "./components/header/Header.ts";
import {Hero} from "./components/hero/Hero.ts";
import {Episodes} from "./components/episodes/Episodes.ts";
import {Mentor} from "./components/mentor/Mentor.ts";
import {Subscribe} from "./components/subscribe/Subscribe.ts";
import {Reviews} from "./components/reviews/Reviews.ts";
import {Gallery} from "./components/gallery/Gallery.ts";
import {SwiperGallery} from "./components/swiper/Swiper.ts";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("app") as HTMLElement;
    const header = new Header();
    const hero = new Hero();
    const episodes = new Episodes();
    const mentor = new Mentor();
    const subscribe = new Subscribe();
    const reviews = new Reviews();
    const gallery = new Gallery();
    const swiper = new SwiperGallery();

    if (container) {
        const mainPage = new MainPage(container, {header, hero, episodes, mentor, subscribe, reviews, gallery});
        mainPage.render();
        swiper.init();
    }
});
