import React, { useEffect, useState } from 'react';
import GifItem from '../../component/GifItem';
import { searchGiphy, trendingGiphy } from '../../services/Giphy';

const Index = () => {

    const [keyword, setKeyword] = useState("")
    const [listGiphy, setListGiphy] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let delaySearch
        if (keyword != "") {
            setLoading(true)
            delaySearch = setTimeout(() => {
                searchGiphy(keyword).then((res) => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1250)
                    setListGiphy(res.data)
                })
            }, 300)
        } else {
            trendingGiphy(9).then((res) => {
                setTimeout(() => {
                    setLoading(false)
                }, 1250)
                setListGiphy(res.data)
            })
        }

        return () => clearTimeout(delaySearch);
    }, [keyword])


    return (
        <div className='d-flex justify-content-center align-items-center flex-column '>

            <div className='mt-4 mb-4'>

                <h1> <b> SEARCH YOUR GIPHY</b> </h1>

            </div>

            <div className='row'>
                <div className='col-lg-12'>
                    <input type="text" className='form-control mb-4' onChange={(e) => setKeyword(e.target.value)} placeholder="Search Gif by Keyword" />
                </div>

                {loading ? 
                    <div>
                        <p>Loading....</p>
                    </div>
                    : <div className='row'>
                        {listGiphy.map((item) =>
                            <div className='col-lg-4 col-md-4 col-6'>
                                <GifItem urlGiphy={item.images.original.url} />
                            </div>
                        )}
                    </div>}


            </div>



        </div>
    );
}

export default Index;
