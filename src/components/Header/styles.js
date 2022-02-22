import styled from "styled-components"

const Container = styled.header`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-1);

    h1 {
        font-size: var(--size-4);
        font-weight: 700;
        color: var(--grey-0);
    }

    span {
        font-size: var(--size-1);
        color: var(--grey-1);
    }
`

export default Container
