import type {MainProps} from "../core/models/MainProps.ts";
import type {Header} from "../components/header/Header.ts";
import type {DataHook} from "../types/DataHook.type.ts";
import {Hooks} from "../core/constants/consts.ts";

export class MainPage {
    private container: HTMLElement;
    private header: Header;

    public constructor(container: HTMLElement, props: MainProps) {
        this.container = container;
        this.header = props.header;
    }

    public render() {
        this.container.innerHTML = `
                <div data-hook="header"></div>
        <main>

</main>
        `;
        this.mount(this.header.render(), Hooks.HEADER)
        this.header.init();
    }

    private mount(element: HTMLElement, data: DataHook) {
        const container = this.container.querySelector(data) as HTMLElement;
        container.appendChild(element);
    }

    public destroy() {
        this.header.destroy();
    }
}
