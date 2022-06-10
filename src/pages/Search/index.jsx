import React, { useEffect, useState } from 'react';
import GifItem from '../../component/GifItem';
import Giflist from '../../component/GifList';
import Searchbar from '../../component/SearchBar';
import { searchGiphy, trendingGiphy } from '../../services/Giphy';

export const SearchContext = React.createContext()

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

            <div className='row g-3'>
                <div className='col-lg-12'>
                    <SearchContext.Provider value={{
                        setKeyword
                    }}>
                        <Searchbar />
                    </SearchContext.Provider>

                </div>

                {loading ?
                    <div>
                        <p>Loading....</p>
                    </div>
                    : <Giflist listData={listGiphy} />
                }


            </div>



        </div>
    );
}

export default Index;
