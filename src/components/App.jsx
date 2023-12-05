import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { Container, Header, Logo, Link } from "components/App.styled";

function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  );
};

export default App;