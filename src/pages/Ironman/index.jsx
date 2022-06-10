import React, { useEffect, useState } from 'react';
import Giflist from '../../component/GifList';
import { searchGiphy } from '../../services/Giphy';
import GifItem from './../../component/GifItem'



const Index = () => {
    const [listGiphy, setListGiphy] = useState([])

    useEffect(() => {
        searchGiphy("ironman").then((res) => {
            setListGiphy(res.data)
        })
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center flex-column '>

            <div className='mt-4 mb-4'>

                <h1> <b> IRON MAN GIPHY</b> </h1>

            </div>

            <div className='row g-4'>
                <Giflist listData = {listGiphy}/>
            </div>



        </div>
    );
}

export default Index;
