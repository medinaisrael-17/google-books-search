import React from "react";

function Input() {
    return(
        <div id = "searchDiv">
            <h1>Book Search</h1>

            <h3>Book</h3>


            <input id = "bookSearch" placeholder="Title"></input>
            <button type="submit" id="searchButton"> Search</button>
        </div>
    )
}

export default Input;