import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../Store';

function Product(props) {
  const { products } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === products._id);
    const _quantity = existItem ? existItem._quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${item._id}`);
    if (data.Quantity < _quantity) {
      window.alert('Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, _quantity },
    });
  };

  return (
    <Card className="Product" key={products.slug}>
      <Link to={`/product/${products.slug}`}>
        <img
          src={products.image}
          className="card-img-top"
          alt={products.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${products.slug}`}>
          <Card.Title>{products.name}</Card.Title>
        </Link>

        <Rating rating={products.rating} numReviews={products.reviews} />
        <Card.Text>${products.price}</Card.Text>
        {products.Quantity <= 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(products)}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
