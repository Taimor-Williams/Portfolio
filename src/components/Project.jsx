export default function Project({title, description, image}){
    return (
        <div className='flex items-center h-full justify-between'>
            <div className=' flex-1'>
                <img className="mx-auto object-center my-2
                rounded-lg h-48 w-48
                border-sky-300 border-4"
                src = {image}></img>
            </div>
            <div className='flex-1 px-20'>
                <h2 className=' font-bold text-center text-4xl
                                py-4'>
                {title}
                </h2>
                <p className=' bg-slate-400 rounded-lg
                text-center font-bold,
                 mx-auto px-10 py-4
                 border-white border-4'
                >{description}</p>
            </div>
        </div>
    )
}