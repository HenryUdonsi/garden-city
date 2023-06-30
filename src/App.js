import './App.css';
import { ThemeProvider } from "styled-components";
import Header from './components/Header';
import Amenities from './components/Amenities';
import Catalog from './Catalog';
import ListedHomes from './components/ListedHomes';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: '#15B86C',
    secondary: '#012A36',
    white: '#fff',
    primary_transparent: '#E4FFF3',
    accent: '#667085',
    light_text: '#9A9EA6',
    light_secondary: '#F0F1F2',
    gray: '#DCDCDC',
  },
  mobile: '768px',
}

function App() {

  // const [setFilter, showSetFilter] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    {/* <button onClick={() => showSetFilter(!setFilter)}> {!setFilter ? ('show filter') : ('hide filter')}</button>
    {setFilter ? (<React.Fragment> this is A FILTER </React.Fragment>) : (<React.Fragment> this FILTER is hidden </React.Fragment>)} */}
      <Header />
      <Amenities />
      <Catalog />
      <ListedHomes />
      <OurStory />
      <Contact />
      <Footer />
    </ThemeProvider>
    
  );
}

export default App;
