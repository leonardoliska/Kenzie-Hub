import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    padding-bottom: 10px;

    label {
        font-size: var(--size-1);
        color: var(--grey-0);
    }

    span {
        font-size: calc(var(--size-1) - 2px);
        color: var(--error);
        position: absolute;
        left: 0;
        top: 90%;
    }
`

export const InputContainer = styled.div`
    position: relative;

    input {
        box-sizing: border-box;
        border: 2px solid transparent;
        border-radius: 4px;
        padding: 11px calc(14px + 7%) 11px 16px;
        background-color: var(--grey-2);
        font-size: var(--size-3);
        width: 100%;
        transition: 0.2s;

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
        top: 33.8%;
        right: 4%;
        color: var(--grey-1);
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            color: var(--grey-0);
        }
    }
`
