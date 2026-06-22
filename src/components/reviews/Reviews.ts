import styles from "./Reviews.module.scss";

export class Reviews {
    public render() {
        return `
        <section id="reviews" class="${styles.reviews}">
        <div class="container">
        <h2 class="visually-hidden">Отзывы клиентов</h2>
        <ul class="${styles.reviewsList}">
        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
    I can't recommend this podcast enough
  </blockquote>
  <figcaption class="${styles.author}">Betty Lacey</figcaption>
</figure>
</article>
</li>

        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
   Jacob is the best in the business
  </blockquote>
  <figcaption class="${styles.author}">Adam Driver</figcaption>
</figure>
</article>
</li>

        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
    A wealth of audio knowledge
  </blockquote>
  <figcaption class="${styles.author}">Marcus Brown</figcaption>
</figure>
</article>
</li>

        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
   Every episode is a gem!
  </blockquote>
  <figcaption class="${styles.author}">Jessica Knowl</figcaption>
</figure>
</article>
</li>

        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
    Whoa whoa, let me take some notes!
  </blockquote>
  <figcaption class="${styles.author}">Scott Adams</figcaption>
</figure>
</article>
</li>

        <li>
        <article class="${styles.reviewsCard}">
        <div class="${styles.rating}" aria-label="Рейтинг 5">
        <span class="${styles.ratingActive}"></span>
</div>
<figure class="${styles.quoteWrapper}">
  <blockquote class="${styles.quote}" lang="en">
    I’ve upped my game considerably since I started listening
  </blockquote>
  <figcaption class="${styles.author}">Steven Blast</figcaption>
</figure>
</article>
</li>
</ul>
</div>
</section>
        `
    }
}