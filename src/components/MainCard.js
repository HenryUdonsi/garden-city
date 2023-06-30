import React from 'react';
import { MCard, Card } from './styles/ListedHomes.styled';
import { CatalogFlex, CatalogContent } from './styles/Catalog.styled';

export default function MainCard({ item: { title, body, image, price } }) {
    return (  
        <>
            <img src={image} alt='' style={{borderRadius: '8px 8px 0px 0px',}}/>
            <CatalogContent>
                <p style={{maxWidth: '230px', margin: '0', marginTop: '10px'}}>{title}</p>
                <CatalogFlex style={{padding: '0'}}>
                    <p style={{color: '#667085', fontSize: '0.9rem', fontFamily: 'Lato', maxWidth: '189px'}}>{body}</p>
                    <p>{price}</p>
                </CatalogFlex>
            </CatalogContent>
      </>
    )
}