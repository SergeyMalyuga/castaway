import styles from './Hero.module.scss';
import {RadiosList} from "../radiosList/RadiosList.ts";

export class Hero {
    private radiosList = new RadiosList();

    public render() {
        return `
        <section class="${styles.hero}" id="hero">
        <div class="${styles.content} container">
        <div class="${styles.imageWrapper}">
        <img class="${styles.imageMain}" src="/images/raster/hero-human.png" alt="Человек слушает музыку" width="650" height="873" loading="eager"/>
<img class="${styles.imageDecorate}" src="/images/raster/hero-line.png" alt="" width="68" height="74"/>
</div>
<div class="${styles.info}">
<h1 class="${styles.title}">Take your podcast to the 
<span class="${styles.textUnderline}">next</span> 
<span class="${styles.textBold}">level</span></h1>
<span class="${styles.radiosCaption}">Listen on</span>
${this.radiosList.render()}
</div>
</div>
</section>`
    }
}