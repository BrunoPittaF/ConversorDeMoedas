import React from "react";
import { Input, ButtonConversor } from "src/styles/components";
//import { useTheme } from "src/ThemeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import ListarMoedas from "src/component";

export default function Home() {
 // const themeToggle = useTheme();

  return (
    <main>
     {/*<Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> */ } 
     <h1>Conversor de moedas</h1>
     <div className="container">
       <form action="">
       <Input type="text" placeholder="0" value={1} required/>
       <Input type="text" as="select" >
        <ListarMoedas/>
         </Input>
         <FontAwesomeIcon icon={faAngleDoubleRight} />
         <Input type="text" as="select" >
         <ListarMoedas/>
         </Input>
         <ButtonConversor type="submit"> Converter </ButtonConversor>
       </form>
       <div className="modal">
         <div className="container-modal">
         <header>
           <h1>Conversão</h1>
           <button>X</button>
         </header>
         <p>Aqui vai aparecer o texto convertido</p>
         <ButtonConversor>Encerrar</ButtonConversor>
         </div>         
       </div>
     </div>
    </main>
  );
}
