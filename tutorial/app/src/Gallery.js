import { useState } from "react"
import { sculptureList } from "./data"
const Gallery = ()=>
{
    const [index,setIndex]=useState(0);
    const [showMore,setShowMore]=useState(false)
    const sculpture =sculptureList[index];
    const handleNext = ()=>
    {
        if(index >= sculptureList.length - 1)
        {
            let newIndex = 0;
            setIndex(newIndex)
        }
        else
        {
            setIndex(index + 1)
        }
    }
    const handlePrev = ()=>
    {
        if(index <= 0)
        {
            let newIndex = sculptureList.length - 1;
            setIndex(newIndex)
        }
        else
        {
            setIndex(index - 1)
        }
    }
    return(
        <>
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sculpture.url} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>
<i>{sculpture.artist} by {sculpture.artist}</i>

        </h5>
        <button className="btn btn-info" onClick={()=>setShowMore(!showMore)}>{showMore ? 'hide':'show'} details</button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </div>
   
   
  </div>
  <button class="carousel-control-prev" type="button" onClick={handlePrev}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" onClick={handleNext}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        
        </>
    )
}
export default Gallery