import React from 'react';
import GifItem from './GifItem';

const Giflist = (props) => {
    return (
        <>
            {props.listData.map((item) =>
                <div className='col-lg-4 col-md-4 col-6'>
                    <GifItem urlGiphy={item.images.original.url} />
                </div>
            )}
        </>

    );
}

export default Giflist;
