import React from 'react';
import './PageLayout.css';
import Shop from '../Shop/Shop';

const PageLayout = () => {
    return (
        <div className='container'>
            <div className='column-left'>
                <Shop></Shop>
            </div>
            <div className='column-right'></div>
        </div>
    );
};

export default PageLayout;