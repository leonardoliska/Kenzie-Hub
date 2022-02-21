import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: var(--grey-4);
    height: 48px;
    padding: 12px;

    h3 {
        font-size: var(--size-2);
        color: var(--grey-0);
        font-weight: 700;
    }

    span {
        font-size: var(--size-1);
        color: var(--grey-1);
    }
`

export default Container
