import Swiper from 'swiper';
import {Navigation, Pagination} from "swiper/modules";

export class SwiperGallery {
    private swiper!: Swiper;

    public init() {
        const element = document.querySelector<HTMLElement>('.swiper');
        if (element) {
            this.swiper = new Swiper(element, {
                modules: [Pagination, Navigation],
                slidesPerView: 1,
                spaceBetween: 20,
                speed: 600,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                }
            })
        }
    }

    public destroy: () => void = () => {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }
}