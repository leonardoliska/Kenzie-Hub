import { Container, InputContainer } from "./styles"

import { AiFillEye } from "react-icons/ai"
import { useState } from "react"

const Input = ({ label, type = "text", ...rest }) => {
    const [inputType, setInputType] = useState(type)

    const handlePassword = () => {
        inputType === "password" ? setInputType("text") : setInputType("password")
    }

    return (
        <Container>
            <label>{label}</label>
            <InputContainer>
                <input type={inputType} {...rest}></input>
                {type === "password" && <AiFillEye onClick={handlePassword} />}
            </InputContainer>
            <span>erro</span>
        </Container>
    )
}

export default Input
