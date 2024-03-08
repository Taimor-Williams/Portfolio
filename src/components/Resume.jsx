import resumePDF from "/resume.pdf"

export default function Resume(){
    return (
        <div>
            <a className='bg-blue-400 rounded-lg h-full p-2  
            font-bold text-lg
            hover:text-slate-100
            relative flex flex-col'
            href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    )
}


