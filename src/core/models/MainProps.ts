import type {Header} from "../../components/header/Header.ts";
import type {Hero} from "../../components/hero/Hero.ts";
import type {Episodes} from "../../components/episodes/Episodes.ts";

export interface MainProps {
    header: Header;
    hero: Hero;
    episodes: Episodes;
}
