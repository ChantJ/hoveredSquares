import React, {useState} from "react"
import "./styles.css"

const SelectBar =({options, setMode})=>{
    const [option, setOption] = useState("Select Mode")
    return (
        <div className="container">
            <select onChange={(e)=>setOption(e.target.value)} className="select">
                <option disabled={option!=="Select Mode"}>Select Mode</option>
                { Object.keys(options).map((key, index)=>(<option key={index} >{key}</option>))}
            </select>
            <button disabled={option==="Select Mode"} onClick={()=>setMode(options[option])} className="startButton">START</button>
        </div>
    )
}

export default SelectBar