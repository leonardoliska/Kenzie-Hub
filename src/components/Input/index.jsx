import { Container, InputContainer } from "./styles"

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"

const Input = ({ label, type = "text", error, register, name, ...rest }) => {
    const [inputType, setInputType] = useState(type)

    const handlePassword = () => {
        inputType === "password" ? setInputType("text") : setInputType("password")
    }

    return (
        <Container>
            <label>{label}</label>
            <InputContainer>
                <input type={inputType} {...register(name)} {...rest}></input>
                {type === "password" &&
                    (inputType === "password" ? (
                        <AiOutlineEyeInvisible onClick={handlePassword} />
                    ) : (
                        <AiOutlineEye onClick={handlePassword} />
                    ))}
            </InputContainer>
            {error && <span>{error.message}</span>}
        </Container>
    )
}

export default Input
