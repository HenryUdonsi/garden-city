import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { CatalogFlex } from "./styles/Catalog.styled";
import LogoWhite from "../images/logo_white.svg";
import Call from "../images/call.svg";
import Image from "../images/header-pattern.png";


export default function Contact() {
    return (  
        <div style={{background: '#070600', backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: '#fff', padding:  '2.75rem 0' }}>
            <Container>
                <img src={LogoWhite}/>
                <h2>When You Think Of Comfort, Think Garden City</h2>
                <p>For more enquires,</p>
                <CatalogFlex style={{width: '460px', padding: '0', margin: '0'}}>
                    <Button bg='#15B86C'>Drop us a mail</Button>
                    <CatalogFlex style={{padding: '0', borderBottom: '2px solid #15B86C', marginLeft: '5px', }}>
                        <img src={Call} style={{marginRight: '10px',} }/>
                        <p style={{margin: '6px 0',}}>Call us now  <span style={{fontWeight: '700', fontSize: '1.12rem', marginLeft: '5px'}}>+234 (802) 345 56789</span></p>
                    </CatalogFlex>
                </CatalogFlex>
            </Container>
        </div>

    );
}