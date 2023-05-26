import styled from "styled-components";

export const Imagem = styled.img`
  width: 100%;
  max-height: 70%;
`;

export const ProductsCard= styled.figure`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2%;
    width:25%;
    height: 42vh;
    border: 2px, solid, black;
    

`
export const Card= styled.figure`
    display: flex;
    flex-direction: column;
    height: 30%;
    width:30vw;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: pink;
    border-radius: 3%;
`
export const Button = styled.button`
  width: 11vw;
  height: 4vh;
  margin: 4%;
  background-color: aquamarine;
  border-radius: 5px;
`;