import { useState } from "react";
import './index.css'
import { CardRightSide, CardLeftSide } from "./components";

export default function App() {
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#3d72a1");

  return (

    <div className="container">

      <header className=" header"> 
        
       <h3> AOD </h3>
    
      </header>

      <h1 className="title">Color Contrast Checker</h1>
      <h2 className="subtitle">
        Caculate the contrast ratio of text and background colors.
      </h2>

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

        
        <h1 className="title-2">What is the AOD? </h1>

          <h2 className="text"> O Design Orientado para Acessibilidade foca-se em criar produtos, serviços ou ambientes</h2>
          <h2 className="text">que sejam utilizáveis por uma ampla gama de pessoas, independentemente das suas capacidades ou deficiências.</h2>
          <h2 className="text">Trata-se de projetar com empatia e inclusão em mente, garantindo que todos,</h2>
          <h2 className="text">independentemente das suas capacidades físicas ou cognitivas, possam aceder e interagir com produtos digitais ou físicos.</h2>

    <footer className="footer">
      <p className="p">&copy; 2024 Accessibility Website</p>
    </footer>

        
    </div>
  );
}
