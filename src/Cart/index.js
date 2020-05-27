import React from 'react';
import { Button } from 'react-bootstrap';
import CartItem from '../CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const product = {
    productDto: {
      id: 121,
      name: 'samsung alira smart full hd Tv',
      brand: 'SAMSUNG',
      categoryId: 91,
      categoryDto: {
        id: 91,
        name: 'TV',
        parent: {
          id: 90,
          name: 'electronics'
        }
      },
      description:
        'You can now turn this Samsung Smart TV into a full-fledged PC or your very own virtual music system. With features such as Live Cast and Screen Mirroring, you can have some good times with your family right at home. The Micro Dimming Pro feature lets you catch all the action on the big screen.',
      isReturnable: true,
      isCancelleable: true
    },
    variations: [
      {
        id: 122,
        productId: 121,
        quantityAvailable: 700,
        price: 60000,
        attributes: {
          'screen size': '52',
          color: 'black'
        },
        primaryImage:
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70',
        secondaryImages: [
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gnr7bb5hj.jpeg?q=70',
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36ggzkarsuz.jpeg?q=70',
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gz9y5entz.jpeg?q=70',
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gf7wrb96g.jpeg?q=70'
        ]
      },
      {
        id: 123,
        productId: 121,
        quantityAvailable: 700,
        price: 70000,
        attributes: {
          'screen size': '64',
          color: 'black'
        },
        primaryImage:
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70'
      },
      {
        id: 124,
        productId: 121,
        quantityAvailable: 700,
        price: 40000,
        attributes: {
          'screen size': '32',
          color: 'gray'
        },
        primaryImage:
          'https://rukminim1.flixcart.com/image/416/416/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36gfh9gfr7g.jpeg?q=70'
      }
    ]
  };

  return (
    <div className={classes.CartPage}>
      <CartItem product={product} variationIndex="0" />
      <CartItem product={product} variationIndex="1" />
      <CartItem product={product} variationIndex="2" />
      <div className={classes.Buttons}>
        <Button variant="primary" className={classes.Button}>
          Continue Shopping
        </Button>
        <Button variant="primary" className={classes.Button}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
