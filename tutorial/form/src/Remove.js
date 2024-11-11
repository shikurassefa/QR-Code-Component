import { useState } from "react"

const FeedBackForm = ()=>
{
   
    const handleChange = ()=>
    {
const name = prompt('what is your name');
alert(`name is ${name}`)
    }
    return(
        <div className="container">
            <button className="btn btn-secondary text-capitalize mt-3" onClick={handleChange}>greet</button>
        </div>
    )
}
export default FeedBackForm