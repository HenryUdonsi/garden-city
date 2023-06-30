import { Container } from "./styles/Container.styled";
import Logo from "../images/logo.svg";
import { Newsletter, StyledFooter, BottomBar, SocialWrapper, Flexed } from "./styles/Footer.styled";
import Input from "./Input";

export default function Footer() {
    return ( 
        <StyledFooter>
            <Newsletter>
                <h3 style={{margin: '0'}}>Newsletter</h3>
                <p style={{margin: '0', maxWidth: '457px', textAlign: 'center', color: '#9A9EA6'}}>Be the first one to know  about discounts, offers and events weekly in your mailbox. 
                Unsubscribe whenever you like with one click.
                </p>
                <Input placeholder="Enter your email"/>
            </Newsletter>
            <Container>
                <BottomBar>
                    <SocialWrapper>
                        <Flexed style={{alignItems: 'center',}}>
                            <img src={Logo}/>
                        </Flexed>
                        <Flexed>
                            <h3 style={{marginTop: '0'}}>Headquarters</h3>
                            <p>124, K.S. Street, Opposite Shoprite,
                                Jabi, Abuja, 900108<br></br>

                                +234 (802) 345 56789
                            </p>
                        </Flexed>
                        <Flexed>
                            <h3>Sales Office</h3>
                            <p>21 Aurelian Street, Ogbomosho,
                                Osun State<br></br>

                                +234 (802) 345 56789
                            </p>
                        </Flexed>
                    </SocialWrapper>
                    <span>© 2000-2023, All Rights Reserved</span>
                </BottomBar>
            </Container>

        </StyledFooter>

     );
}
