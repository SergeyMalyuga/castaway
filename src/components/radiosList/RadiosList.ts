import styles from './RadiosList.module.scss';

export class RadiosList {
    public render() {
        return `
        <ul class="${styles.radiosList}" aria-label="Радиостанции">
<li class="${styles.item}"><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-1.svg" alt="Fm 103" width="32" height="32" loading="lazy"/></a></li>
<li class="${styles.item}"><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-2.svg" alt="Fm 112" width="32" height="32" loading="lazy"/></a></li>
<li class="${styles.item}"><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-3.svg" alt="Fm 203" width="32" height="32" loading="lazy"/></a></li>
<li class="${styles.item}"><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-4.svg" alt="Fm 40" width="32" height="32" loading="lazy"/></a></li>
<li class="${styles.item}"><a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/vector/hero-radio-5.svg" alt="Fm 13" width="32" height="32" loading="lazy"/></a></li>
</ul>
        `
    }
}