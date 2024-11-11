import { useState } from "react";

const Box = ({ position, color, onMove,children }) => {
    const [lastCoordinates,setLastCoordinates]=useState(null)
    const handlePointerMove=(e)=>
    {
if(lastCoordinates)
{
    setLastCoordinates({x:e.clientX,y:e.clientY});
    const dx = e.clientX - lastCoordinates.x;
    const dy = e.clientY - lastCoordinates.y;
    onMove(dx,dy)
}
    }
    const handlePointerUp=(e)=>
        {
         setLastCoordinates(null)   
        }
        const handlePointerDown=(e)=>
            {
                e.target.setPointerCapture(e.pointerId)
               setLastCoordinates({x:e.clientX,y:e.clientY}) 
            }
  return (
    <div
    onPointerMove={handlePointerMove}
    onPointerUp={handlePointerUp}
    onPointerDown={handlePointerDown}
      style={{
      
        width: 100,
        height: 100,
        display: "flex",
        alignItems :'center',
        justifyContent:'center',
        backgroundColor:color,
        cursor:'grab',
        transform:`translate(${position.x}px,${position.y}px)`
      }}
    >{children}</div>
  );
};
export default Box;
