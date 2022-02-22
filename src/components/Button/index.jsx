import Container from "./styles"

const Button = ({ children, colorSchema = "primary", isActive, ...rest }) => {
    return (
        <Container colorSchema={colorSchema} isActive={isActive} {...rest}>
            {children}
        </Container>
    )
}

export default Button
