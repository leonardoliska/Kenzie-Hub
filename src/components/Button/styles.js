import styled from "styled-components"

const Container = styled.button`
    border-radius: 4px;
    height: 48px;
    flex: 1;
    border: none;
    padding: 0 20px;
    font-size: var(--size-3);
    font-weight: 500;
    transition: 0.2s;
    background-color: ${(props) =>
        props.colorSchema === "negative"
            ? "var(--color-primary-negative)"
            : props.colorSchema === "inactive"
            ? "var(--grey-1)"
            : "var(--color-primary)"};

    :hover {
        background-color: ${(props) =>
            props.colorSchema === "inactive" ? "var(--grey-2)" : "var(--color-primary-focus)"};
    }
`

export default Container
