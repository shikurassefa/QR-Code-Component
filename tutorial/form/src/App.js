// import { useState } from "react";
// const Form = () => {
//   const [player, setPlayer] = useState({
//     firstName: "shikur",
//     lastName: "abel",
//     score: 10,
//   });
//   const handleScore = () => {
//     player.score++;
//     console.log(player.score);
//   };
//   const handleFirstNameChange = (e) => {
//     setPlayer({ ...player, firstName: e.target.value });
//     console.log(player.firstName);
//   };
//   const handleLastNameChange = (e) => {
//     setPlayer({ lastName: e.target.value });
//   };
//   const handlePointerUp = (e) => {
//     console.log(e.clientX);
//   };
//   return (
//     <>
//       <div className="container mt-3 w-50">
//         <label htmlFor="" className="ml-2">
//           score:{player.score}
//           <button className="btn btn-secondary mb-3" onClick={handleScore}>
//             + 1{" "}
//           </button>
//         </label>
//         <div className="input-group mb-3">
//           <span className="input-group-text text-capitalize"> first Name</span>
//           <input
//             type="text"
//             className="form-control"
//             value={player.firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
//         <div className="input-group mb-3">
//           <span className="input-group-text text-capitalize">last Name</span>
//           <input
//             type="text"
//             className="form-control"
//             value={player.lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//         <div
//           style={{
//             backgroundColor: "blue",
//             width: "100px",
//             height: "100px",
//             transform: "translate(20px,20px)",
//           }}
//           onPointerUp={handlePointerUp}
//         ></div>
//       </div>
//     </>
//   );
// };
// import Background from "./Background";
// import Box from "./Box";
// import { useImmer } from "use-immer";
// const initialPosition = { x: 0, y: 0 };
// const Canvas = () => {
//   const [shape, updateShape] = useImmer({
//     color: "orange",
//     position: initialPosition,
//   });
//   const handleColorChange = (e) => {
// updateShape(draft=>{
//   draft.color = e.target.value;

// })
//   };
//   const handleMove = (dx, dy) => {
//    updateShape(draft=>{
//     draft.position.x += dx;
//     draft.position.y += dy;
//    })
//   };

//   return (
//     <div className="container mt-3 w-50">
//       <select
//         name=""
//         id=""
//         className="form-select"
//         onChange={handleColorChange}
//       >
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background position={initialPosition}></Background>
//       <Box color={shape.color} position={shape.position} onMove={handleMove}>
//         drag me
//       </Box>
//     </div>
//   );
// };
// export default Canvas;
import {useRef} from 'react'

const Canvas=()=>
{
  const imageTest =useRef('');
  const imageEvent = ()=>
    {
      console.log('image event');
      console.log(imageTest.className);
      
      
    }
  return(
    <div>
<img src="https://plus.unsplash.com/premium_photo-1715030289409-5e81652149e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1715030289409-5e81652149e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="" style={{width:400}} onClick={imageEvent
    }n ref={imageTest} className='test'/>
    </div>
  )
}
export default Canvas
