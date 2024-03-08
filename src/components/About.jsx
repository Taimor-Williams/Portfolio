import spearMan from '/spearman.png'
export default function About(){
    return (
        <div className='flex py-2'>
            <div className='flex-1 '>
                <p className=' bg-slate-400 rounded-lg
                text-center font-bold,
                w-full h-40 
                 border-white border-4'
                >I'm a caveman, from 1992, no matter what you say or what you do when i'm alonge i'd rather be with you</p>
            </div>
            <div className='flex-1'>
                <img src = {spearMan} className=""></img>
            </div>
        </div>
    )
}