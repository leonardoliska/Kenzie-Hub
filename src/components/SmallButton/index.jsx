import Container from "./styles"

const SmallButton = ({ children, icon, ...rest }) => {
    return (
        <Container isIcon={icon} {...rest}>
            {children}
        </Container>
    )
}

export default SmallButton
