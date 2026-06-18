import styles from './Hero.module.scss';

export class Hero {
    public render() {
        return `
        <section id="hero">
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
<ul class="${styles.radiosList}" aria-label="Радиостанции">
<li><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-1.svg" alt="Fm 103" width="32" height="32" loading="lazy"/></a></li>
<li><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-2.svg" alt="Fm 112" width="32" height="32" loading="lazy"/></a></li>
<li><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-3.svg" alt="Fm 203" width="32" height="32" loading="lazy"/></a></li>
<li><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-4.svg" alt="Fm 40" width="32" height="32" loading="lazy"/></a></li>
<li><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-5.svg" alt="Fm 13" width="32" height="32" loading="lazy"/></a></li>
</ul>
</div>
</div>
</section>`
    }
}