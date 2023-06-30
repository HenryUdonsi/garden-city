import { styled } from "styled-components";

export const HeaderFlex = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 21vw;
`

export const FilterFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.accent};
`

// export const CardFlex = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 2.75rem 0rem;

//     @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//     text-align: center;
//     padding: 20px;
//     }
// `

export const MCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 2.75rem 0;
`

export const Card = styled.div`
    border: 1px solid #ececec;
    border-radius: 8px;

`