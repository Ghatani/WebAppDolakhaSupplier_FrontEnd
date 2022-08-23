//import Home from './MyComponents/Home';
import Header from './MyComponents/Header';
import Mid from './MyComponents/Mid';
import Footer from './MyComponents/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>      
        <Header></Header>
        <Mid></Mid>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
