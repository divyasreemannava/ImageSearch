import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./image.css"
import { useLocation } from "react-router-dom"
const Bookmark = ()=>{    
    let {state} = useLocation()
    return(
        
        <>
            <h2 className="btext">Bookmarked Images</h2>
            <div className="bookimagebox">
            {state.map((photo)=>{
                return <img className="bookimages" src={photo}></img>
            })}
            </div>
        </>
    )
}
export default Bookmark