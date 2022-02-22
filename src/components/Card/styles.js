import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: var(--grey-4);
    height: 48px;
    padding: 12px;
    transition: 0.2s;

    h3 {
        font-size: var(--size-2);
        color: var(--grey-0);
        font-weight: 700;
    }

    span {
        font-size: var(--size-1);
        color: var(--grey-1);
    }

    :hover {
        background-color: var(--grey-2);
        cursor: pointer;
    }
`

export default Container
