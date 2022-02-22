import styled from "styled-components"

export const Overlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100vh;
    width: 100vw;
`

export const Container = styled.div`
    position: absolute;
    width: min(90%, 400px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    padding: 0 20px;
    height: 50px;
    border-radius: 4px 4px 0 0;

    h3 {
        font-size: var(--size-3);
        font-weight: bold;
        margin: 0;
    }
    button {
        border: none;
        background-color: transparent;
        font-size: var(--size-3);
        font-weight: 600;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: var(--grey-3);
    padding: 22px;
    padding-bottom: 32px;
    border-radius: 0 0 4px 4px;

    button {
        margin-top: 10px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;

    > :nth-child(1) {
        flex: 2;
    }
`
