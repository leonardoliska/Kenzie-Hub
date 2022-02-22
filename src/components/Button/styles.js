import styled from "styled-components"

const Container = styled.button`
    border-radius: 4px;
    height: 48px;
    border: none;
    padding: 0 20px;
    font-size: var(--size-3);
    font-weight: 500;
    transition: 0.2s;
    background-color: ${(props) => (props.colorSchema === "grey" ? "var(--grey-3)" : "var(--color-primary)")};

    ${(props) =>
        props.colorSchema === "grey"
            ? props.isActive
                ? "{ background: var(--grey-1) }"
                : "{ background: var(--grey-2) }"
            : props.isActive
            ? "{ background: var(--color-primary) }"
            : "{ background: var(--color-primary-negative) }"}

    ${(props) =>
        props.isActive
            ? props.colorSchema === "grey"
                ? "&:hover { background: var(--grey-2) }"
                : "&:hover { background: var(--color-primary-focus) }"
            : "&:hover {cursor: auto"}
`

export default Container
