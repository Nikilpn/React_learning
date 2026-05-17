import * as React from 'react';
import './productDetails.css';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductId } from '../../ApiService/api';

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface IHeaderProps {}

const ProductDetails: React.FunctionComponent<IHeaderProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);

  React.useEffect(() => {
    const fetchProductsDetails = async () => {
      const data = await getProductId(id);
      setProduct(data);
    };
    fetchProductsDetails();
  }, [id]);

  return (
    <>
      <div className='product-details-container'>
        <img src={product?.image} alt={product?.title} className='product-image' />
        <div className='product-info'>
          <h2 className='product-title'>{product?.title}</h2>
          <p className='product-description'>{product?.description}</p>
          <p className='product-price'>${product?.price}</p>
          <button className='buy-now-button'>Buy Now</button>
          <button className='go-back-home-button' onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;