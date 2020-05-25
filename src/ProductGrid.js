import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import classes from './ProductGrid.module.css';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg',
      name: 'boys cool shirt',
      brand: "levi's",
      price: '200',
      size: '20'
    },
    {
      id: 2,
      imageUrl:
        'https://image.freepik.com/free-icon/simple-t-shirt_318-10090.jpg',
      name: 'boys hot shirt',
      brand: 'puma',
      price: '500',
      size: '24'
    },
    {
      id: 3,
      imageUrl:
        'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-backpacking-shirt-travel100-burgundy.jpg?&f=800x800',
      name: 'boys short shirt',
      brand: 'UCB',
      price: '900',
      size: '20'
    },
    {
      id: 4,
      imageUrl:
        'https://rukminim1.flixcart.com/image/332/398/k65d18w0/shirt/p/4/t/48-bfrybluesht02ab-being-fab-original-imaecvnxndp3zbdn.jpeg?q=50',
      name: 'boys shirt',
      brand: 'clarks',
      price: '800',
      size: '28'
    },
    {
      id: 5,
      imageUrl:
        'https://img3.exportersindia.com/product_images/bc-full/2018/9/5826549/mens-shirts-1536856070-4298880.jpeg',
      name: "men's stylish shirt",
      brand: 'jahapanah',
      price: '300',
      size: '30'
    },
    {
      id: 6,
      imageUrl:
        'https://rukminim1.flixcart.com/image/332/398/k7tdj0w0/shirt/g/f/g/39-pusfussfo22466-peter-england-university-original-imafpxfg5sbszawv.jpeg?q=50',
      name: 'boys polo tshirt',
      brand: "levi's",
      price: '1000',
      size: '20'
    },
    {
      id: 7,
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_260,h_260/global/517319/14/fnd/IND/fmt/png/Energy-Seamless-Men's-Training-Tee",
      name: 'boys cool shirt',
      brand: "levi's",
      price: '200',
      size: '20'
    },
    {
      id: 8,
      imageUrl:
        'https://static7.cilory.com/257037-thickbox_default/no-logo-sky-blue-casual-shirt.jpg',
      name: 'boys cool shirt',
      brand: "levi's",
      price: '200',
      size: '20'
    },
    {
      id: 9,
      imageUrl:
        'https://s3.ap-south-1.amazonaws.com/tcsonline-live/catalog/product/cache/5ab063e30dbf74cb9bb799f550ede913/0/0/001a_24_8.jpg',
      name: 'boys cool shirt',
      brand: "levi's",
      price: '200',
      size: '20'
    }
  ];

  const productItems = products.map((product) => (
    <Col>
      <ProductCard
        imageUrl={product.imageUrl}
        key={product.id}
        productDetails={product}
      />
    </Col>
  ));

  return (
    <Container className={classes.ProductGrid}>
      <Row xs={1} sm={2} md={3} lg={4} className={classes.Row}>
        {productItems}
      </Row>
    </Container>
  );
};

export default ProductGrid;
