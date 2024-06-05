import { useState, ChangeEvent } from "react";
import './index.css'
import { CardRightSide, CardLeftSide } from "./components";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [showWarning, setShowWarning] = useState(false);
  const [numCards, setNumCards] = useState(0);
  const [cardColors, setCardColors] = useState([{ textColor: "#FFFFFF", backgroundColor: "#003461" }]);
  const [averageContrast, setAverageContrast] = useState(0); // Estado para armazenar a média

  // Função para calcular a média dos contraste dos cards
  const calculateAverageContrast = () => {
    const sumOfContrasts = cardColors.reduce((acc, card) => acc + parseInt(card.textColor.replace("#", ""), 16), 0);
    const average = sumOfContrasts / (numCards * 256); // Multiplicando por 256 porque cada pixel tem 256^3 possibilidades de cores
    setAverageContrast(Math.round(average)); // Arredonda para o número inteiro mais próximo
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");   
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.trim() !== '') {
      const parsedValue = parseInt(inputValue);
      const newNumCards = parsedValue <= 10 ? parsedValue : 10;
      setNumCards(newNumCards);
      setShowWarning(parsedValue > 10);
      
      // Ajusta o estado de cardColors para corresponder ao número de cards
      if (newNumCards > cardColors.length) {
        setCardColors([
          ...cardColors,
          ...Array(newNumCards - cardColors.length).fill({ textColor: "#FFFFFF", backgroundColor: "#003461" })
        ]);
      } else {
        setCardColors(cardColors.slice(0, newNumCards));
      }
    } else {
      setNumCards(0);
      setShowWarning(false);
    }
  };

  const handleTextColorChange = (index: number, color: string) => {
    const updatedCardColors = cardColors.map((card, i) =>
      i === index ? { ...card, textColor: color } : card
    );
    setCardColors(updatedCardColors);
  };

  const handleBackgroundColorChange = (index: number, color: string) => {
    const updatedCardColors = cardColors.map((card, i) =>
      i === index ? { ...card, backgroundColor: color } : card
    );
    setCardColors(updatedCardColors);
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
    <div className={`container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <header className="header">
        
        

        
        {/*<a href="index2.html">
          <button className="sign-btn">Sign up</button>
        </a>
        */}

        <img className="img" src="public/logo1.png" alt="" />
      </header>

      <div className="border"></div>

      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Calculate the contrast ratio of text and background colors.
      </h2>

      <div>
        <h2 className="number-choice">Quantos elementos pretende testar?</h2>
        <input
          type="number"
          className="number"
          max="10"
          min="0"
          onChange={handleChange}
        />
        {showWarning && (
          <p className="warning">Por favor, insira um número menor ou igual a 10.</p>
        )}
      </div>

      {/* Renderização dos cards */}
      <div className="card-container">
        {cardColors.slice(0, numCards).map((card, index) => (
          <div className="card" key={index}>
            <CardLeftSide
              textColor={card.textColor}
              setTextColor={(color) => handleTextColorChange(index, color)}
              backgroundColor={card.backgroundColor}
              setBackgroundColor={(color) => handleBackgroundColorChange(index, color)}
            />
            <CardRightSide
              textColor={card.textColor}
              backgroundColor={card.backgroundColor}
            />
          </div>
        ))}
      </div>

      {/* Botão para calcular e exibir a média do contraste */}
      <button className="btn-contrast" onClick={calculateAverageContrast}>
        Calcular Média
      </button>

      {/* Exibição da média do contraste */}
      {averageContrast > 0 && (
        <div className="contrast-average">
          <strong>Média do Contraste:</strong> {averageContrast}
        </div>
      )}

      <h1 className="title-2">O que é a AOD? </h1>
      <h2 className="text"> O Design Orientado para Acessibilidade foca-se em criar produtos, serviços ou ambientes</h2>
      <h2 className="text">que sejam utilizáveis por uma ampla gama de pessoas, independentemente das suas capacidades ou deficiências.</h2>
      <h2 className="text">Trata-se de projetar com empatia e inclusão em mente, garantindo que todos,</h2>
      <h2 className="text-4">independentemente das suas capacidades físicas ou cognitivas, possam aceder e interagir com produtos digitais ou físicos.</h2>

      <h3 className="title-3">Guidelines e Web Content Accessibility Guidelines</h3>

      <li className="li">
        <a href="https://www.acessibilidade.gov.pt/wcag/#background-on-wcag-2" target="_blank">
          <button className="btn-primary">Guidelines</button>
        </a>
      </li>

      <li className="li">
        <a href="https://www.w3.org/Translations/WCAG20-pt-PT/#contents" target="_blank">
          <button className="btn-primary-2">WCAG</button>
        </a>
      </li>

      <div className="border-2"></div>

      <footer className="footer">
        <p className="p">&copy; AOD by <b>Dinis Gonçalves</b></p>
      </footer>

      <a href="index2.html">
        <button className="btn"> <img className="icon" src="public/About-Icon.png" alt="" /> </button>
      </a>

      <a href="https://github.com/diniss06" target="_blank">
        <button className="btn"> <img className="icon-2" src="public/GitHub-Icon.png" alt="" /> </button>
      </a>

      <button className="btn" onClick={downloadPDF}> <img className="icon-3" src="public/PDF-Icon.png" alt="" /> </button>

      {/*<button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </button>*/}

    </div>
  );
}