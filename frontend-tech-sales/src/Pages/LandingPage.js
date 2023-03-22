import { useEffect, useReducer } from 'react';
//import data from '../data';
import logger from 'use-reducer-logger';
import axios from 'axios';
//import data from '../../../backend-tech-sales/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Components/Product';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';
import MessageBox from '../Components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function LandingPage() {
  //const [product, setProducts] = useState([]);
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/product');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', payload: err.message });
      }

      //setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Simon Tech </title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="Products">
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {product.map((products) => (
              <Col key={products.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product products={products}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default LandingPage;
