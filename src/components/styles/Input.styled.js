import { styled } from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    width: 29rem;
    padding: 0.5rem;
    align-items: center;
    gap: 0.75rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.light_secondary};


    & > input {
        background-color: ${({ theme }) => theme.colors.light_secondary};
        color: ${({ theme }) => theme.colors.light_text};
        width: 100%;
        border: none;
        padding: 3px 0;
  }

  & > input:active {
        border: none;
  }
`

export const RightAlignedBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.625rem;
    flex: 1 0 0;
`