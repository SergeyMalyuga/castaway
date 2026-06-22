import styles from './Subscribe.module.scss';

export class Subscribe {
    public render() {
        const section = document.createElement('section');
        section.className = styles.subscribe;
        section.setAttribute('id', 'subscribe');

        section.innerHTML = `
        <div class="container">
        <div class="${styles.content}">
        <div>
        <span class="caption">Email Newsletter</span>
        <h2 class="title">Subscribe for updates</h2>
</div>
<form class="${styles.subscribeForm}" aria-label="Подписка на новости">
<label for="name" class="visually-hidden">Name</label>
<input class="${styles.input}" id="name" type="text" placeholder="Name" required/>
<label for="email" class="visually-hidden">Email</label>
<input class="${styles.input}" id="email" type="email" placeholder="Email" required/>
<button class="${styles.submitButton} button" type="submit">Submit</button>
</form>
</div>
</div>
        `
        return section;
    }
}