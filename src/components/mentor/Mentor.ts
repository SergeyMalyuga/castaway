import styles from './Mentor.module.scss';

export class Mentor {
    public render() {
        return `
        <section class="${styles.mentor}">
        <div class="${styles.content} container">
        <div class="${styles.info}">
                <h2 class="${styles.title} title">Jacob Paulaner</h2>
        <a class="${styles.contactLink}" href="#" aria-label="Связаться с ментором"></a>
        <span class="${styles.caption} caption">Meet your host</span>
        <p class="${styles.text} text">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
        <p class="${styles.text} text">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
</div>
<div class="${styles.imageWrapper}">
<img src="/images/raster/mentor-jacob-paulaner.png" width="650" height="743" alt="Ментор Jacob Paulaner" loading="lazy"/>

</div>
</div>
</section>
        `
    }
}