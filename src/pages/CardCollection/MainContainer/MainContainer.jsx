import React from 'react';
import './MainContainer.css'; // Importing CSS for styling

const MainContainer = ({ children }) => {
    return (
        <div className="main-container">
            <div className="main-container__side-image-container"> {/* New wrapper container */}
                <img src="/images/CollectionSide.svg" alt="Collection Side" className='container_image' />
                <img src="/decoration/ContainderDeco.webp" alt="" className='container_deco'/>
            </div>
            <div className="main-container__content">
                {children}
            </div>
        </div>
    );
};

export default MainContainer;
