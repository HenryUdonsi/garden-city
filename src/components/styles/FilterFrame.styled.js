import { styled } from "styled-components";

export const FrameWrapper = styled.div`
    display: inline-flex;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(1, 42, 54, 0.15);
`

export const FrameHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.875rem;
    align-self: stretch;

    & > p {
        color: ${({ theme }) => theme.colors.accent};
        padding: 3px;
    }

    & > p:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }

    & > p:active {
        color: #070600;
        font-weight: 500;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
`

export const FrameFilter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    align-self: stretch;
` 

export const Label = styled.label`
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
`

export const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ececec;
    color: #333745;
    width: 75%;
    line-height: 1.6vw;
    font-size: 1.1vw;
`
export const BedroomCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
`

export const CountBtn = styled.button`
    display: flex;
    width: 3.125rem;
    height: 3.125rem;
    padding: 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    border: '2px solid #070600';
    color: '#070600';

    &:active {
        background-color: ${({ theme }) => theme.colors.gray};
    }
`

export const BtnInput = styled.div`
    background: #ffffff;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ececec;

    & > input {
        padding: 10px;
        border: 1px solid #ececec;
        border-radius: 3px;
        color: #333745;
    }

    & > input:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    & > input:active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`