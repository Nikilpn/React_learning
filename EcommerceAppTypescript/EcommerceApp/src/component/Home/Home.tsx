import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../ApiService/api";
import "./Home.css";
import { Link } from "react-router-dom";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product-grid">
        {products.map((products) => (
          <div className="product" key={products.id}>
            <img src={products.image} alt="alternative" />
            <h2>{products.title}</h2>
            <p>
              <span className="price">{products.price}</span>
            </p>
            <Link to={`/product/${products.id}`}>
              <button>Product Details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
