import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, Ul, Hero,
HeaderImg} from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import logo from "../images/logo.svg";
import headerImg from "../images/header-image.jpg";
import smiley from "../images/happyemoji.svg";

export default function Header() {
    return ( 
        <StyledHeader> 
            <Container>
                <Nav>
                    <Logo src= {logo} />
                    <Ul>
                        <li>About</li>
                        <li>Properties</li>
                        <li>Contact</li>
                    </Ul>
                </Nav>
                <Hero>
                    <div>
                         <div>
                            <h1>We are GARDEN CITY</h1>
                            <p>For those who seek an exceptional home and life, there is only Garden City</p>
                        </div>
                        <Button  bg='#15B86C'>Explore our properties<img src= {smiley} /></Button>
                    </div>
                    <HeaderImg src= {headerImg} />
                </Hero>
            </Container>
        </StyledHeader>
    )
}