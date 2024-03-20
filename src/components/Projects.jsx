import list from "../list.json"
import spearMan from '/spearman.png'
import shubox from '/shubox.png'
import connect from '/connect4.png'
import Project from "./Project"

var dict = {
    "Shubox":shubox,
    "Connect4":connect,
    "Future work":spearMan
}


export default function Projects(){
    return (
        <div className="grid grid-cols-1 divide-y-8
        overflow-y-scroll
        h-screen bg-gradient-to-r from-red-600 to-indigo-500
        my-1">
        {list.map((object, index) => (
        <div key={index}>
            <Project title = {object.ProjectTitle} description = {object.Description} image = {spearMan}/>
        </div> 
        ))}
        </div>
    )
}