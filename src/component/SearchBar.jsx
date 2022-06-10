import React from 'react';
import { SearchContext } from '../pages/Search';

const Searchbar = () => {

    const ctx = React.useContext(
        SearchContext
    )

    return (
        <div>
            <input type="text" className='form-control mb-4' onChange={(e) => ctx.setKeyword(e.target.value)} placeholder="Search Gif by Keyword" />
        </div>
    );
}

export default Searchbar;
