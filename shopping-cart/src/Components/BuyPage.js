import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import { v4 } from "uuid";

function BuyPage({ addInCart }) {
  const [products, setProducts] = useState([]);
  const localUrl = "http://myjson.dit.upm.es/api/bins/1qfh";

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl);
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: v4(),
    }));
    setProducts(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Container fluid>
        <h1 className="text-success text-center">Buy Page</h1>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id}>
              <CardItem product={product} addInCart={addInCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BuyPage;
