import { useState } from "react";
import './index.css'
import { CardRightSide, CardLeftSide } from "./components";

export default function App() {
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#003461");
  const [theme, setTheme] = useState("dark"); // Estado para controlar o tema
  const [showWarning, setShowWarning] = useState(false); // Estado para controlar a exibição da mensagem de aviso

  const toggleTheme = () => {
    if (theme === "dark") {
      setTextColor("#000000");
      setBackgroundColor("#FFFFFF");
      setTheme("light");
    } else {
      setTextColor("#FFFFFF");
      setBackgroundColor("#003461");
      setTheme("dark");
    }
  };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setShowWarning(parseInt(inputValue) > 10);
    };

  const downloadPDF = () => {
    const pdfUrl = 'public/WCAG 2.0.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'documento.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      
      <header className="header">   
        <a href="index2.html">
          <button className="sign-btn">Sign up</button>
        </a> 
        <img className="img" src="public/logo1.png" alt="" />
      </header>

      <div className="border"> </div>
      
      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Calculate the contrast ratio of text and background colors.
      </h2>
    
      <div>
        <h2 className="number-choice"> Quantos elementos pretende testar?</h2>
          <input type="number" 
          className="number" 
          max="10" 
          min="0"
          onChange={handleChange} 

          />
        {showWarning && ( // Exibe a mensagem de aviso se showWarning for verdadeiro
          <p className="warning"> Por favor, insira um número menor ou igual a 10.</p>
        )}
        
      </div>

      
    

      <div className="card">
        <CardLeftSide
          textColor={textColor}
          setTextColor={setTextColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <CardRightSide
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </div>

      <h1 className="title-2">O que é a AOD? </h1>
      <h2 className="text"> O Design Orientado para Acessibilidade foca-se em criar produtos, serviços ou ambientes</h2>
      <h2 className="text">que sejam utilizáveis por uma ampla gama de pessoas, independentemente das suas capacidades ou deficiências.</h2>
      <h2 className="text">Trata-se de projetar com empatia e inclusão em mente, garantindo que todos,</h2>
      <h2 className="text-4">independentemente das suas capacidades físicas ou cognitivas, possam aceder e interagir com produtos digitais ou físicos.</h2>
      
      <h3 className="title-3"> Guidelines e Web Content Accessibility Guidelines </h3>
      
      <li className="li"> 
        <a href="https://www.acessibilidade.gov.pt/wcag/#background-on-wcag-2" target="_blank">
          <button className="btn-primary"> Guidelines </button>
        </a> 
      </li>

      <li className="li"> 
        <a href="https://www.w3.org/Translations/WCAG20-pt-PT/#contents" target="_blank">
          <button className="btn-primary-2"> WCAG </button>
        </a> 
      </li>

      <div className="border"> </div>

      <footer className="footer">
        <p className="p">&copy; AOD by <b>Dinis Gonçalves</b></p>
      </footer>

      <a href="index2.html">
        <button className="btn"> <img className="icon" src="public/About-Icon.png" alt=""/> </button>
      </a>

      <a href="https://github.com/diniss06" target="_blank">
        <button className="btn"> <img className="icon-2" src="public/GitHub-Icon.png" alt=""/> </button>
      </a>

      <button className="btn" onClick={downloadPDF}> <img className="icon-3" src="public/PDF-Icon.png" alt=""/>  </button>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </button>
      
    </div>
  );
}
