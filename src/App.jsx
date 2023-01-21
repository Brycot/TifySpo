import "./App.css";
import Layout from "./components/layout";
import Home from "./views/Home";
import Login from "./views/LogIn";

function App() {
    const spotifyToken = localStorage.getItem("access_token");

    if(!spotifyToken) {
        return (
            <Login />
        )
    }
    if(spotifyToken) {
        return (
            <Layout>
                <Home />
            </Layout>
        )
    }
}

export default App;
