import Header from "./components/header";
import "./app.css";
import Footer from "./components/footer";
import Quote from "./components/quote";


const App = () => {
    return (
        <div className="App">
            <Header />
            <Quote />
            <Footer />
        </div>
    );
};


export default App;