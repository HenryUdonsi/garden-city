import { styled } from "styled-components";

export const CatalogFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.75rem 0rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    }
`

export const CCard = styled.div`
    display: flex;
    width: 22rem;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 30px 60px 0px rgba(32, 56, 85, 0.15);
    border-radius: 8px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 1rem;
`
export const CatalogContent = styled.div`
    padding: 0 15px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0px 0px 8px 8px;
    height: auto;
    width: 100%;
`
