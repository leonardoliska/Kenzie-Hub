import styled from "styled-components"

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-2);
    border-top: 1px solid var(--grey-2);
    flex-wrap: wrap;

    h2 {
        font-size: var(--size-4);
        font-weight: 700;
        color: var(--grey-0);
        margin: 7px 0;
    }

    span {
        font-size: var(--size-1);
        color: var(--grey-1);
        line-height: 21px;
        margin: 7px 0;
    }
`

export default Container
