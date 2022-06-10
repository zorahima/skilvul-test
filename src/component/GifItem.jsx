import React from 'react';

const GifItem = (props) => {
    return (
        <div className="card">
            <div className='card-body'>
                <img className="card-img-top" src={props.urlGiphy} alt="Card image cap" />
            </div>
        </div>
    );
}

export default GifItem;
