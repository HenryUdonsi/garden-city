import { styled } from "styled-components";

export const Button = styled.button`
    padding: 0.75rem 1.875rem;
    border: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    background-color: ${({ bg }) => bg};
    color:  ${({ theme }) => theme.colors.white};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`