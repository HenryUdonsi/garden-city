import { Container } from "./styles/Container.styled";
import { HeaderFlex, FilterFlex, MCard, Card } from "./styles/ListedHomes.styled";
import MainCard from "./MainCard";
import info from "../info";
import filter from "../images/filter.svg";
import FilterMenu from "./FilterMenu";

export default function ListedHomes() {
    return (  
        <Container>
            <HeaderFlex>
                <h3>Listed Homes</h3>
                <FilterMenu/>
            </HeaderFlex>
            <p style={{textAlign: 'center', maxWidth: '621px', margin: 'auto',}} >
                Browse our listed properties and discover your perfect home. Whether you're searching for a cozy family home, 
                a modern urban apartment, or a luxurious estate, our listings showcase an array of exceptional properties 
                that are sure to capture your imagination.
            </p>
            <MCard>
                {info.map((item, index) => (
                    <Card>
                        <MainCard key={index} item={item} />
                    </Card>
                 ))}
            </MCard>
        </Container>
    );
}