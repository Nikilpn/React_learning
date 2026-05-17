import * as React from 'react';
import './Footer.css'
interface IHeaderProps {}

const Footer: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
    <footer className='footer'>
        &copy;Techflix {new Date().getUTCFullYear()}
    </footer>

    </>
  );
};

export default Footer;