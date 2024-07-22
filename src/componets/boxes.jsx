import { useState } from "react"
import Box from "./box"

export default 
function Boxes(props){

    function changeOn(id) {
        console.log("click" + id)
        setBoxes((prevBoxes) => {
            return prevBoxes.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        }) 
    }

    
    const [arrayBoxes, setBoxes] = useState(Array.from({ length: props.num }, (_, index) => ({ id: index + 1, on: true })))
    const squareElements = arrayBoxes.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            handleClick={()=>changeOn(square.id)}
        />
    ))



    return(
        <div className="boxesContainer">
        {squareElements}
        </div>     
    )
} 