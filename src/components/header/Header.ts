import styles from './Header.module.scss';

export class Header {
    public render() {
        return `
        <footer class="${styles.footer}" id="footer">
        <div class="${styles.content} container">
        <a href="/"><img class="${styles.image}" src="/images/vector/logo-mini.svg" 
        width="160" 
        height="33" 
        alt="Логотип студии" 
        loading="eager"/></a>
        
        <nav class="${styles.nav}" aria-label="Основная навигация">
        <ul class="${styles.navLinks}">
<li><a class="${styles.link}" href="#">Home</a></li>
<li><a class="${styles.link}" href="#">Episodes</a></li>
<li><a class="${styles.link}" href="#">About</a></li>
<li><a class="${styles.link}" href="#">Contact</a></li>
</ul>
</nav>

<button class="${styles.burgerButton}" type="button">
<span class="${styles.middleLine}"></span>
</button>
</div>
</footer>`
    }
}