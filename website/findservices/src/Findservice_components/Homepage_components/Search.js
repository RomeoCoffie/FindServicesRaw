import React from 'react';

const Search = () => {
    return (
        <div>
            <form className="searchbox">
                <input type="text" placeholder="try Carpenter..." required className="type" />
                <input type="submit" value="Search" className="search" />
            </form>                    
        </div>
    );
}

export default Search;