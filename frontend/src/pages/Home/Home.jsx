import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
// import UrlForm from "../../components/UrlForm/UrlForm";

import "./Home.css";

function Home() {
    return (
        <main className="home">
            <Container>
                <Header />
                {/* <UrlForm /> */}
            </Container>
        </main>
    );
}

export default Home;