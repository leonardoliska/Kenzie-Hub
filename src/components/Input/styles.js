import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;

    label {
        font-size: var(--size-1);
        color: var(--grey-0);
    }

    span {
        font-size: calc(var(--size-1) - 2px);
        color: var(--grey-1);
    }
`

export const InputContainer = styled.div`
    position: relative;

    input {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 4px;
        padding: 11px 10% 11px 16px;
        background-color: var(--grey-2);
        font-size: var(--size-3);
        width: 100%;

        ::placeholder {
            color: var(--grey-1);
        }
        :hover {
            border-color: var(--grey-0);

            ::placeholder {
                color: var(--grey-0);
            }
        }
    }

    svg {
        position: absolute;
        top: 17px;
        right: 4%;
        color: var(--grey-1);
        cursor: pointer;
    }
`