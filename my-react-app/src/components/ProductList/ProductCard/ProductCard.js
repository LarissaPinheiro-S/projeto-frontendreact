import React from "react";
import { ImgField, ProductsCard, Card, Button} from "./ProductCardStyle";

function ProductCard() {
    return (
      <ProductsCard>
      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09001157614480.jpg?ims=704x" alt="Sputnik" />
        <figcaption>Sputnik - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09001326865481.jpg?ims=704x" alt="Explorer 1" />
        <figcaption>Explorer 1 - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09001456809482.jpg?ims=704x" alt="Explorer 6" />
        <figcaption>Explorer 6 - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09001811346483.jpg?ims=704x" alt="TIROS-1" />
        <figcaption>TIROS-1 - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09002021259484.jpg?ims=704x" alt="Vostok 1" />
        <figcaption>Vostok 1 - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09002211130485.jpg?ims=704x" alt="Luna 10" />
        <figcaption>Luna 10 - US$ 150 bilhões </figcaption>
        <Button>Adicionar ao carrinho</Button>
      </Card> 

      {/* <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09002324987486.jpg?ims=704x" alt="Mariner 9" />
        <figcaption>Mariner 9<br/> US$ 150 bilhões </figcaption>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09002621329487.jpg?ims=704x" alt="Venera 9" />
        <figcaption>Venera 9<br/> US$ 150 bilhões </figcaption>
      </Card>

      <Card>
        <ImgField src="https://img.ibxk.com.br/2020/10/09/09002822516488.jpg?ims=704x" alt="Telescópio Espacial Hubble" />
          <figcaption>Hubble<br/> US$ 150 bilhões </figcaption>
      </Card>  */}
      </ProductsCard>
    );
  }
  
  export default ProductCard;