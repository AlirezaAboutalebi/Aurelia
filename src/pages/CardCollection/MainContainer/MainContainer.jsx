import React from 'react';
import './MainContainer.css'; // Importing CSS for styling

const MainContainer = ({ children }) => {
    return (
        <div className="main-container">
            <div className="main-container__content">
                {children}
            </div>
            <img src="/decoration/ContainderDeco.webp" alt="" className='container_deco'/>
        </div>
    );
};

export default MainContainer;
