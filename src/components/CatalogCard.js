import { CatalogFlex, CatalogContent, CCard } from "./styles/Catalog.styled";

export default function CatalogCard({ item: { title, body, image, price } }) {
    return (  
        <CCard>
            <img src={image} alt='' style={{borderRadius: '8px 8px 0px 0px',}}/>
            <CatalogContent>
                <p style={{maxWidth: '230px', margin: '0', marginTop: '10px'}}>{title}</p>
                <CatalogFlex style={{padding: '0'}}>
                    <p style={{color: '#667085', fontSize: '0.9rem', fontFamily: 'Lato', maxWidth: '189px'}}>{body}</p>
                    <p>{price}</p>
                </CatalogFlex>
            </CatalogContent>
      </CCard>
    )
}