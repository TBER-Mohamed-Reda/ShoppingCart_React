import { Col, Container, Row } from "react-bootstrap";
import productsData from "../data/products.json";
import ProductItem from "./product-item/ProductItem";
const ProductList = () => {
  return (
    <Container className="mt-3">
      <Row xs={1} md={2} lg={4} className="g-3">
        {productsData.map((product) => (
          <Col key={product.id}>
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
