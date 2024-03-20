export default function Button({ children, ...props }) {
    return (
        <button 
            className='bg-blue-400 rounded-lg h-full px-2 
            font-bold text-lg
            hover:text-slate-100'
            {...props}> 
            {children}
        </button>
    )
}
// hello world