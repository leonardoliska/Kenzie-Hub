import Container from "./styles"

const Button = ({ children, colorSchema, ...rest }) => {
    return (
        <Container {...rest} colorSchema={colorSchema}>
            {children}
        </Container>
    )
}

export default Button
