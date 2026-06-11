import type { MainProps } from "../core/models/MainProps.ts";
import type { Header } from "../components/header/Header.ts";

export class MainPage {
  private container: HTMLElement;
  private header: Header;

  public constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
  }
  public render() {
    this.container.innerHTML = `
        ${this.header.render()}
        `;
  }
}
