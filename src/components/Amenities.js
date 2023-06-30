import Card from "./Card";
// import content from "../content";
import { Flex } from "./styles/Flex.styled";
import { Container } from "./styles/Container.styled";
import houseAuto from '../images/homeautomation.svg';
import solarPanel from '../images/solarpanel.svg';
import ecoFri from '../images/eco-friendly.svg';
import twoFour from '../images/24-hrs.svg';

const content = [
  {
    id: 1,
    title: 'Home Automation',
    image: houseAuto,
  },
  {
    id: 2,
    title: 'Solar Panel',
    image: solarPanel,
  },
  {
    id: 3,
    title: 'Eco Friendly',
    image: ecoFri,
  },
  {
    id: 4,
    title: '24 / 7 Electricity',
    image: twoFour,
  },
]

export default function Amenities() {
    const containerStyle = {
        paddingTop: '2.75rem',
    };
    return ( 
        <Container style={{paddingBottom: '2.75rem'}}>
            <p style={{textAlign: 'center', width: '438px', margin: 'auto', marginTop: '2.75rem'}}>Our properties have been furnished with a range of amenities
                designed to enhance your lifestyle. Your comfort is our priority.
            </p>
            <Flex style={containerStyle}>
                {content.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </Flex>
        </Container>
     );
}
