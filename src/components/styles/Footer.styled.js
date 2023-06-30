import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
`

export const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.1875rem;
    border-bottom: 1px dotted #FFFFFF;
    padding: 2.75rem 0rem;
`

export const BottomBar = styled.div`
    display: flex;
    height: 15.875rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    & > span {
        color: ${({ theme }) => theme.colors.light_text};
        font-size: 0.8rem;
    }
`

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15.25rem;
`

export const Flexed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 0.75rem;

    & > p {
        color: ${({ theme }) => theme.colors.light_text};
  }

  & > img {
        width: 27rem;
        background-color: ${({ theme }) => theme.colors.secondary};
  }

  
`

