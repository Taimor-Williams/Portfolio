import Button from "./Button";
import reactLogo from '../../public/logo192.png'

const sections = ["hello", "world", "death", "my enemies", "more", "ivonne", "me"];


export default function Scroll(){

    return(
        <nav className="mt-4 w-full bg-sky-600 ring-4 ring-sky-800 hover:ring-sky-300">
            {/* <h2 className="mb-8 font-bold uppercase justify-between px-3 md:text-xl text-stone-200">Your Projects</h2> */}
            <div className="px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <h2 className="text-stone-100 px-4">Portfolio</h2>
                    <img src = {reactLogo} className="h-8 w-8"></img>
                </div>
                <ul className="flex justify items-right">
                    {sections.map((project, index)=>{ 
                        return (
                        <li key = {index} className="mr-2">
                            <Button>{project}</Button>
                        </li>
                        );
                    })}
                </ul>
            </div>
            

        </nav>
    )
}