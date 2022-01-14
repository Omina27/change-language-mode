import { useLang } from './Hooks/useLang';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {content} from  './Localization/content'

function App() {

  const [lang, setLang] = useLang()

  return (
    <>
    <Header/>
    <main>
    <p>{content[lang].main}</p>
    </main>
    <Footer/>
    </>
    );
  }
  
  export default App;
  