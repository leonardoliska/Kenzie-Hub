import styled from "styled-components"

export const Container = styled.div`
    nav {
        width: min(800px, 90%);
        margin: 0 auto;
    }
    header {
        padding: 0 5%;
        box-sizing: border-box;

        @media (min-width: 889px) {
            padding: 0 calc(calc(100% - 800px) / 2);
        }
    }

    aside {
        width: min(800px, 90%);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    main {
        margin: 0 auto;
        width: min(800px, 90%);
        padding: 20px 18px;
        background: var(--grey-3);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        box-sizing: border-box;
    }
`
