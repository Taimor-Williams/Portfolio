import list from "../list.json"
import spearMan from '/spearman.png'
import Project from "./Project"

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