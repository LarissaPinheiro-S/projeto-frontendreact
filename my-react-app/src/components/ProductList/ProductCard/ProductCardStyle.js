import styled from "styled-components";

export const Imagem = styled.img`
  width: 100%;
  max-height: 70%;
`;

export const HeaderField = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductsCard= styled.figure`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10%;
    width:20%;
    height: 40vh;
    border: 2px, solid, black;

`
export const Card= styled.figure`
    display: flex;
    flex-direction: column;
    height: 30%;
    width:30vw;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: pink
`
export const Button = styled.button`
  width: 11vw;
  height: 4vh;
  margin: 4%;
  background-color: aquamarine;
  border-radius: 5px;
  border: none;
`;