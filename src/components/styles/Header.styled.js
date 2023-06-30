import { styled } from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`

export const Logo = styled.img`
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    & > li {
        list-style: none;
    }
`

export const Hero = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    padding: 2.75rem 0rem;
    align-items: center;
    gap: 0.5rem;
`

export const HeaderButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding: 0.75rem 1.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: 8px;
`

export const HeaderImg = styled.img`
    width: 50%;
    height: auto;
`


