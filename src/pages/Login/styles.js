import styled from "styled-components"

export const Container = styled.div`
    width: min(95%, 370px);
    margin: auto;
    background: var(--grey-3);
    padding: 33px 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;

    h2 {
        text-align: center;
        color: var(--grey-0);
        font-size: var(--size-2);
    }

    button + span {
        text-align: center;
        color: var(--grey-1);
        font-size: calc(var(--size-1) - 2px);
    }
`

export const HeaderContainer = styled.header`
    margin-top: 80px;
    color: var(--color-primary);
    text-align: center;

    h1 {
        font-size: var(--size-2);
        font-weight: 700;
    }
`
