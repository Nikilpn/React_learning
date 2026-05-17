import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Home from '../component/Home/Home';
import Logout from '../component/Logout/Logout';
import ProductDetails from '../component/ProductDetails/ProductDetails';

interface IAppRouterProps {}

const Routing: React.FunctionComponent<IAppRouterProps> = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;