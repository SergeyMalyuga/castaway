import type {MainProps} from "../core/models/MainProps.ts";
import type {Header} from "../components/header/Header.ts";
import type {DataHook} from "../types/DataHook.type.ts";
import {Hooks} from "../core/constants/consts.ts";
import type {Hero} from "../components/hero/Hero.ts";
import type {Episodes} from "../components/episodes/Episodes.ts";
import type {Mentor} from "../components/mentor/Mentor.ts";
import {Subscribe} from "../components/subscribe/Subscribe.ts";

export class MainPage {
    private container: HTMLElement;
    private header: Header;
    private hero: Hero;
    private episodes: Episodes;
    private mentor: Mentor;
    private subscribe: Subscribe;

    public constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
        this.hero = props.hero;
        this.episodes = props.episodes;
        this.mentor = props.mentor;
        this.subscribe = props.subscribe;
    }

    public render() {
        this.container.innerHTML = `
                <div data-hook="header"></div>
        <main>
${this.hero.render()}
                <div data-hook="episodes"></div>
                ${this.mentor.render()}
                <div data-hook="subscribe"></div>
</main>
        `;
        this.mount(this.header.render(), Hooks.HEADER);
        this.header.init();
        this.mount(this.episodes.render(), Hooks.EPISODES);
        this.mount(this.subscribe.render(), Hooks.SUBSCRIBE)
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector(data) as HTMLElement;
        container.appendChild(element);
    }

    public destroy() {
        this.header.destroy();
    }
}
