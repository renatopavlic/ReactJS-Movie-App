import React from "react"

function Search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">

            <input  type="text" 
                    placeholder="Search for Movie" 
                    className="searchbox"
                    onChange={handleInput}
                    onKeyPress={search} >
            </input>

        </section>
    )
}

export default Search