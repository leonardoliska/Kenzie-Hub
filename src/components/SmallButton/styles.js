import styled from "styled-components"

const Container = styled.button`
    border-radius: 4px;
    height: 32px;
    border: none;
    padding: ${(props) => (props.isIcon ? "0" : "0 16px")};
    ${(props) => props.isIcon && "width: 32px;"}
    box-sizing: border-box;
    font-size: var(--size-3);
    font-weight: 600;
    transition: 0.2s;
    background-color: var(--grey-3);

    :hover {
        background-color: var(--grey-2);
    }
`

export default Container
