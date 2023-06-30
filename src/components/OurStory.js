import { CatalogFlex } from "./styles/Catalog.styled";
import { Container } from "./styles/Container.styled";
import Family from "../images/family.jpg";

export default function OurStory() {
    return (
        <Container>
            <CatalogFlex style={{gap: '1.1875rem',}}>
                <div>
                    <h2>Our Story</h2>
                    <p>
                    At Garden City, we believe that a harmonious blend of nature and community creates a truly 
                    exceptional living experience. Our story is one of vision, passion, and dedication to creating 
                    a place where people can find solace, inspiration, and a sense of belonging.
                    It all began with a shared love for the beauty of nature. The founders of 
                    Garden City envisioned a sanctuary where residents could escape the hustle and bustle of the city, 
                    immerse themselves in serene surroundings, and forge meaningful connections with nature and their neighbors. 
                    Thus, the concept of Garden City was born.
                    Our commitment to preserving and enhancing the natural landscape has been unwavering from the start. We 
                    carefully select locations that boast lush greenery, scenic vistas, and an abundance of flora and fauna. 
                    These natural elements become the canvas upon which we create our vibrant communities.
                    </p>
                </div>
                <img src={Family} style={{width: '28rem', height: '28rem', flexShrink: '0'}}/>
            </CatalogFlex>
        </Container>


    );
}