import type {Header} from "../../components/header/Header.ts";
import type {Hero} from "../../components/hero/Hero.ts";
import type {Episodes} from "../../components/episodes/Episodes.ts";
import type {Mentor} from "../../components/mentor/Mentor.ts";
import type {Subscribe} from "../../components/subscribe/Subscribe.ts";
import type {Reviews} from "../../components/reviews/Reviews.ts";

export interface MainProps {
    header: Header;
    hero: Hero;
    episodes: Episodes;
    mentor: Mentor;
    subscribe: Subscribe;
    reviews: Reviews;
}
