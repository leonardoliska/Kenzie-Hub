import Container from "./styles"

const Button = ({ children, onClick, colorSchema = "primary", isActive = true, ...rest }) => {
    return (
        <Container colorSchema={colorSchema} isActive={isActive} onClick={isActive ? onClick : undefined} {...rest}>
            {children}
        </Container>
    )
}

export default Button
