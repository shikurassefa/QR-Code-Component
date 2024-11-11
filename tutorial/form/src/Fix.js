import { useState } from "react"

const FixForm = ()=>
{
    const [isSent,setIsSent]=useState(false);
    const [message,setMessage]=useState('');
    const handleChange = (e)=>
    {
        setMessage(e.target.value)
    }
    const handleSubmit = (e)=>
    {
e.preventDefault();
alert(`message is ${message}`)
setIsSent(true)
    }
    if(isSent)
    {
        return <h1>thank you</h1>
    }
    else
    {
        return(
            <form action="" onSubmit={handleSubmit}>
<div className="container w-50 mt-3">
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"onChange={handleChange}></textarea>
  <label forhtml="floatingTextarea2">Comments</label>
</div>
<button className="btn btn-secondary text-capitalize mt-3">send</button>
</div>
            </form>
        )
    }
}
export default FixForm