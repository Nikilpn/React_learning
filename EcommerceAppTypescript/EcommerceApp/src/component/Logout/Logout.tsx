import * as React from 'react';
import './Logout.css'
interface IHeaderProps {}

const Logout: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <>
    <div className='logout-container'>
        <div className='logout-content'>
            <h1>You are Successfully logged out</h1>
            <p>Thank you for using out application.Have a great day</p>

        </div>

    </div>

    </>
  );
};

export default Logout;