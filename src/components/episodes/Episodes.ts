import styles from './Episodes.module.scss';

export class Episodes {
    public render() {
        const section = document.createElement('section');
        section.className = styles.episodes;
        section.setAttribute('id', 'episodes');

        section.innerHTML = `
        <div class="container">
        <div class="${styles.topBar}">
        <h2 class="${styles.title} title">Latest episodes</h2>
        <button class="${styles.button} button" type="button">View all episodes</button>
</div>
<ul class="${styles.episodesList}" aria-label="Рекомендованная продукция">
<li>
<article class="${styles.episodesCard}">
<div class="${styles.cardImageWrapper}">
<img src="/images/raster/episodes-outboard-audio.jpg" width="389" height="465" alt="Топовый микшер Rx-680" loading="lazy"/>
</div>
<div class="${styles.cardContent}">
<a class="${styles.cardLink}" href="#">Gear</a>
<span class="${styles.cardCaption}">Episode 1</span>
<h3 class="${styles.title} title">Should you get outboard audio gear?</h3>
<p class="text">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
<button class="button" type="button">View Episode Details</button>
</div>
</article>
</li>
<li>
<article class="${styles.episodesCard}">
<div class="${styles.cardImageWrapper}">
<img src="/images/raster/episodes-mic-tricks.jpg" width="389" height="465" alt="Топовый микшер Rx-680" loading="lazy"/>
</div>
<div class="${styles.cardContent}">
<a class="${styles.cardLink}" href="#">Tips & Tricks</a>
<span class="${styles.cardCaption}">Episode 2</span>
<h3 class="${styles.title} title">Mic tricks to take you to the next level</h3>
<p class="text">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
<button class="button" type="button">View Episode Details</button>
</div>
</article>
</li>
<li>
<article class="${styles.episodesCard}">
<div class="${styles.cardImageWrapper}">
<img src="/images/raster/episodes-best-mic.jpg" width="389" height="465" alt="Микрофон FDEB-500" loading="lazy"/>
</div>
<div class="${styles.cardContent}">
<a class="${styles.cardLink}" href="#">Tips & Tricks</a>
<span class="${styles.cardCaption}">Episode 3</span>
<h3 class="${styles.title} title">Mic tricks to take you to the next level</h3>
<p class="text">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
<button class="button" type="button">View Episode Details</button>
</div>
</article>
</li>
</ul>
</div>
`
        return section;
    }
}