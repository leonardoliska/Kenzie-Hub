import styled from "styled-components"

const Container = styled.nav`
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);

    h1 {
        font-size: var(--size-4);
        font-weight: 700;
        color: var(--color-primary);
    }

    span {
        font-size: var(--size-1);
        color: var(--grey-1);
    }
`

export default Container
