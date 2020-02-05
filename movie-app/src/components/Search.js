import React from "react";

function Search({handleInput}) {
    return (
        <section className="searchbox-wrap">

            <input  type="text" 
                    placeholder="Search for Movie" 
                    className="searchbox"
                    onChange={handleInput}>
            </input>

        </section>
    )
}

export default Search