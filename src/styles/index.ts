import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
  }
  main{
    h1{
      text-align: center;
      margin: 20px 0px 0px 0px;
    }
    .container{
      background-color: #3f4565;
      width: 100%;
      position: relative;
      height: 100px;
      margin: 10px 0px;
      padding: 40px;
      display: flex;
      justify-content: center;
      form{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        svg{
          margin: 0px 5px;
          color: orange;
        }
      }
      .modal{
        display: none;
        position: fixed;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.8);
        z-index: 99999;
        opacity: 0;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        &:target{
                opacity: 1;
                pointer-events: auto;
        }
        .container-modal{
                position: relative;
                margin: 10% auto;
                padding: 15px 20px;
                background: #fff; 
                height: auto;
                width: 500px;
                header{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border-bottom: 1px solid gray;
                  width: 100%;
                  h1{
                    margin: 0;
                  }
                  button{
                    background: #fff;
                    border: none;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 18px;
                    color: grey;
                    }
                  }
                  button{
                    float: right;
                  }
                }
              
        }
        }
    }
`;
export default GlobalStyle;
