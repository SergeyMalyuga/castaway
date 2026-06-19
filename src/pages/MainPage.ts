import type {MainProps} from "../core/models/MainProps.ts";
import type {Header} from "../components/header/Header.ts";
import type {DataHook} from "../types/DataHook.type.ts";
import {Hooks} from "../core/constants/consts.ts";
import type {Hero} from "../components/hero/Hero.ts";
import type {Episodes} from "../components/episodes/Episodes.ts";

export class MainPage {
    private container: HTMLElement;
    private header: Header;
    private hero: Hero;
    private episodes: Episodes;

    public constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
        this.hero = props.hero;
        this.episodes = props.episodes;
    }

    public render() {
        this.container.innerHTML = `
                <div data-hook="header"></div>
        <main>
${this.hero.render()}
                <div data-hook="episodes"></div>
</main>
        `;
        this.mount(this.header.render(), Hooks.HEADER);
        this.header.init();
        this.mount(this.episodes.render(), Hooks.EPISODES);
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector(data) as HTMLElement;
        container.appendChild(element);
    }

    public destroy() {
        this.header.destroy();
    }
}
