import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --error: #E83F5B;
        --white: #FFF;
        
        --size-1: calc(var(--size-2) - 2px);
        --size-2: calc(var(--size-3) - 2px);
        --size-3: calc(var(--size-4) - 2px);
        --size-4: calc(1rem + 2px);
        
        --font-primary: 'Inter', sans-serif;
    }

    body, input, button {
        margin: 0;
        padding: 0;
        font-family: var(--font-primary);
        color: var(--white);
        background-color: var(--grey-4);
    }

    button {
        cursor: pointer;
    }

    input {
        outline: 0;
    }
`
