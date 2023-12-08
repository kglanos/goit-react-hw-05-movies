import { Container, Header, Logo, Link } from "./Navigation.styled";

export function Navigation () {
    return (
        <Container>
            <Header>
                <Logo>
                <span role="img" aria-label="computer icon">
                    💻
                </span>{" "}
                Film Searcher
                </Logo>
                <nav>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>
                </nav>
            </Header>
        </Container>
    )};