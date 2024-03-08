import spearMan from '/spearman.png'
import about from '../about.json'
export default function About(){
    
    return (
        <div className='flex items-center h-full justify-between'>
            <div className='flex-1 px-20'>
                <h2 className=' font-bold text-center text-4xl
                                py-4'>About</h2>
                <p className=' bg-slate-400 rounded-lg
                text-center font-bold,
                 mx-auto px-10 py-4
                 border-white border-4'
                >{about["description"]}</p>
            </div>
            <div className=' flex-1'>
                <img className="mx-auto object-center 
                rounded-full h-96 w-96 
                border-sky-300 border-4"
                src = {spearMan}></img>
            </div>
        </div>
    )
}