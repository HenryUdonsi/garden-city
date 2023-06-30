import { CatalogFlex} from "./components/styles/Catalog.styled";
import {Button} from "./components/styles/Button.styled";
import content from "./catalogContent";
import CatalogCard from "./components/CatalogCard";
import { Container } from "./components/styles/Container.styled";

export default function Catalog() {
    return (
        <div style={{backgroundColor: '#E4FFF3',}}>
            <Container>
                <CatalogFlex>
                    <h2>Our Catalog</h2>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flexStart', gap: '1rem',} }>
                        <p style={{width: '448px', margin: 'auto',} }>
                            Our diverse portfolio represents our success in Real Estate Development 
                            brought about by a passion to provide comfort and value for our customers.
                        </p>
                        <Button bg='#012A36' style={{marginRight: 'auto',} }>Dive in</Button>
                    </div>
                </CatalogFlex>
                <div>
                    <h3 style={{textAlign: 'center', margin: 'auto',} }>Most Popular</h3>
                    <CatalogFlex style={{gap: '1.1875rem',}}>
                        {content.map((item, index) => (
                            <CatalogCard key={index} item={item} />
                        ))}
                    </CatalogFlex>
                </div>
            </Container>
        </div>  
        

    );
}