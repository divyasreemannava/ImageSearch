import { useState } from "react";
import axios from "axios"
import "./image.css"
import { useNavigate } from "react-router-dom";
import Bookmark from "./tab";
const Imagesearch = ()=>{
    const navigate = useNavigate()
    const [query,setQuery] = useState();
    const [images,setImages]= useState([]);
    const [hover,setHover] = useState(0)
    const [bookphotos,setPhotos]=useState([])
    const [bookmarkvisibility,setBookmark] = useState(0)
    const handleSearch = ()=>{
        let array = [];
        axios.get(`https://api.unsplash.com/search/photos/?client_id=YwpwQHPWQ4DEOud2al_tsiAsN-VM6voIeBgvHXdP17Y&query=${query}`)
        .then((res)=>{
            // console.log(res.data.results[1].urls.small)
            
            for(let i=0;i<res.data.results.length;i++){

                array.push(res.data.results[i].urls.small);
                // console.log(array)
            }
            return setImages(array)
        })
        console.log(images)
    }
    const handleOver = ()=>{
        setHover(1)
    }
    const handlemousedown=()=>{
        setHover(0)
    }
    const handleaddPhotos = (e) =>{
        setPhotos([...bookphotos,e])
    }
    // let flag = 0;
    const displayBookmark = () =>{
        
        navigate("/BookmarkImages",{state:bookphotos})
        // console.log(bookphotos)
    }
    
    return (
        <>
            <div id = "container">
                <table>
                    <tr id="heading">
                        <th><h2 className="text">React Photo Search</h2></th>
                        <th><button onClick={displayBookmark} id="bookmark">BookMarks</button></th>
                    </tr>
                    
                    <tr>
                        <td><input className="image" placeholder="Search for high resolution images" onChange={(e)=>{setQuery(e.target.value)}}/></td>
                        <button className="search" onClick={handleSearch}>Search</button>
                    </tr>
                </table><br></br>
                <div id = "imagebox">
                {images.map((phots,index)=>{
                    return <>
                        <img className="qimg" src={phots}  onMouseOver={handleOver} onClick={(e)=>{handleaddPhotos(e.target.src)}} onMouseLeave={handlemousedown}></img><div >{hover?<div id = "add">To Bookmark:Click on image</div>:""}</div>
                    </>
                })}
                </div>
            </div>
        </>

    )
} 

export default Imagesearch