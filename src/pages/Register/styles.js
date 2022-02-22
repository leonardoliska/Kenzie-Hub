import styled from "styled-components"
import Navbar from "../../components/Navbar"

export const Nav = styled(Navbar)`
    width: min(95%, 370px);
    margin: 5px auto 0px;
    height: 50px;

    @media (min-height: 700px) {
        height: 72px;
        margin-top: 10px;
    }
`

export const Container = styled.div`
    width: min(95%, 370px);
    margin: auto;
    background: var(--grey-3);
    padding: 15px 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 4px;

    input,
    button {
        max-height: 40px;
    }

    h2 {
        text-align: center;
        color: var(--grey-0);
        font-size: var(--size-3);
        margin: 0;
    }

    h2 + span {
        text-align: center;
        color: var(--grey-1);
        font-size: calc(var(--size-1) - 2px);
        margin-bottom: 5px;
    }

    @media (min-height: 700px) {
        padding: 25px 18px;
        gap: 15px;
    }
`
