import styles from './Gallery.module.scss';

export class Gallery {
    public render() {
        return `
<section id="gallery" class="${styles.gallery}">
<div class="container">
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/images/raster/gallery-1.jpg" width="2600" height="1486" alt="" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/raster/gallery-1.jpg" width="2600" height="1486" alt="" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/raster/gallery-1.jpg" width="2600" height="1486" alt="" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/raster/gallery-1.jpg" width="2600" height="1486" alt="" loading="lazy"/></div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
</section>
        `
    }
}