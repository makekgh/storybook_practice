import './../src/styles/style.scss';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default App;
