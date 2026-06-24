import styles from './Footer.module.scss';
import {RadiosList} from "../radiosList/RadiosList.ts";

export class Footer {
    private radiosList = new RadiosList();

    public render() {
        return `
        <section class="${styles.footer}" id="footer">
        <div class="${styles.content} container">
        <div>
        <a class="${styles.logo}" href="#"><img src="/images/vector/logo-big.svg" 
        width="224" height="46" alt="Логотип компании" loading="lazy"/>
        </a>
        <ul class="${styles.socials}" aria-label="Социальные сети">
        <li>
        <a class="${styles.link}" href="#">
        <img src="/images/vector/instagram-icon.svg" width="24" height="24" alt="Instagram" loading="lazy"/>
         </a>
</li>
        <li>
        <a class="${styles.link}" href="#">
        <img src="/images/vector/twitter-icon.svg" width="24" height="24" alt="Twitter" loading="lazy"/>
</a>
</li>
        <li>
        <a class="${styles.link}" href="#">
        <img src="/images/vector/facebook-icon.svg" width="24" height="24" alt="Facebook" loading="lazy"/>
</a>
</li>
</ul>
</div>
<nav class="${styles.nav}" aria-label="Навигация по сайту">
<ul class="${styles.navLinks}">
<li><a class="link" href="#">Home</a></li>   
<li><a class="link" href="#">About</a></li>   
<li><a class="link" href="#">Episodes</a></li>   
<li><a class="link" href="#">Contact</a></li>   
</ul>
<ul class="${styles.navLinks}">
<li><a class="link" href="#">Style Guide</a></li>   
<li><a class="link" href="#">Instructions</a></li>   
<li><a class="link" href="#">Changelog</a></li>   
<li><a class="link" href="#">Credit</a></li>   
<li><a class="link" href="#">Powered by Webflow</a></li>   
<li><a class="link" href="#">Licenses</a></li>   
</ul>
</nav>
<div>
${this.radiosList.render()}
</div>
</div>
</section>
        `
    }
}