import styles from "./Header.module.scss";

export class Header {
    private burger: HTMLButtonElement | null = null;
    private navMenu: HTMLElement | null = null;

    public render() {
        const header = document.createElement("header");
        header.className = styles.header;
        header.setAttribute("id", "header");
        header.innerHTML = `
            <div class="${styles.content} container">
        <a href="/"><img class="${styles.image}" src="/images/vector/logo-mini.svg" 
        width="160" 
        height="33" 
        alt="Логотип студии" 
        loading="eager"/></a>
        
        <nav class="${styles.nav}" id="nav-menu" aria-label="Основная навигация">
        <ul class="${styles.navLinks}">
<li><a class="link" href="#">Home</a></li>
<li><a class="link" href="#">Episodes</a></li>
<li><a class="link" href="#">About</a></li>
<li><a class="link" href="#">Contact</a></li>
</ul>
</nav>

<button class="${styles.burgerButton}" 
type="button"
aria-haspopup="menu"
aria-expanded="false"
aria-label="Открыть меню"
aria-controls="nav-menu"
>
<span class="${styles.middleLine}"></span>
</button>
</div>
    `
        this.burger = header.querySelector(`.${styles.burgerButton}`);
        this.navMenu = header.querySelector(`.${styles.nav}`);

        return header;
    }

    public init() {
        if (this.burger) {
            this.burger.addEventListener("click", this.toggleNavMenu);
        }
    }

    private toggleNavMenu = () => {
        if (this.navMenu && this.burger) {
            const isOpen = this.navMenu.classList.toggle(`${styles.navOpen}`);
            this.burger.classList.toggle(`${styles.burgerButtonOpen}`);
            this.burger.setAttribute("aria-expanded", isOpen ? 'true' : 'false');
            this.burger.setAttribute("aria-label", isOpen ? 'Закрыть меню' : 'Открыть меню');
        }
    }

    public destroy() {
        if (this.burger) {
            this.burger.removeEventListener("click", this.toggleNavMenu);
        }
    }
}
