import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "../list.json";

function DropDown({ setCurrentPage }) {
    const [isActive, setIsActive] = useState(false);
    const buttonRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(null);

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, [isActive]);

    function handleSetCurrentPage(newPage) {
        setCurrentPage(newPage);
        setIsActive(false);
    }

    return (
        <div className='relative flex flex-col items-center rounded-lg'>
            <button
                ref={buttonRef}
                className='bg-blue-400 
                px-4 flex rounded-lg  
                items-center justify-between 
                font-bold text-lg 
                border-4 border-transparent active:border-white duration-100 active:text-white'
                onClick={() => setIsActive(prev => !prev)}
            >
                Projects
                {!isActive ? (
                    <AiOutlineCaretDown className='ml-2' />
                ) : (
                    <AiOutlineCaretUp className="ml-2" />
                )}
            </button>
            {isActive && (
                <div className='bg-blue-400 
                absolute top-10 flex flex-col items-start rounded-lg p-2 w-full'>
                    {list.map((object, index) => (
                        <div key={index} className='flex w-full p-2
                         hover:bg-blue-300 border: border-l-transparent rounded-lg'>
                                <button onClick={() => handleSetCurrentPage(object.ProjectTitle)}>
                                    {object.ProjectTitle}
                                </button>
                        </div> 
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
