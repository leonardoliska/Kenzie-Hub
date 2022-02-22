import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;

    label {
        font-size: var(--size-1);
        color: var(--grey-0);
        margin-bottom: 8px;
        display: block;
    }
`

export const customStyles = {
    control: (base) => ({
        ...base,
        minHeight: "48px",
        background: "var(--grey-2)",
        color: "var(--grey-1)",
        border: "2px solid transparent",
        cursor: "pointer",
        boxShadow: "none",
        fontSize: "var(--size-2)",
        "&:hover": {
            borderColor: "var(--grey-0)",
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: "var(--grey-0)",
    }),
    menu: (base) => ({
        ...base,
        background: "var(--grey-2)",
    }),
    option: (base, state) => ({
        ...base,
        color: "var(--grey-0)",
        cursor: "pointer",
        transition: "0.2s",
        backgroundColor: state.isSelected ? "var(--grey-3)" : "var(--grey-2)",
        fontSize: "var(--size-2)",
        "&:hover": {
            backgroundColor: "var(--grey-3)",
        },
    }),
    input: (base) => ({
        ...base,
        color: "var(--grey-0)",
    }),
    placeholder: (base) => ({
        ...base,
        color: "var(--grey-1)",
    }),
    indicatorSeparator: (base) => ({}),
    dropdownIndicator: (base) => ({
        ...base,
        color: "var(--grey-1)",
        "&:hover": {
            color: "var(--grey-0)",
        },
    }),
}
