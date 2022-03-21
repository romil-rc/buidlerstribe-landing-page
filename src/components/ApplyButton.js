import React from 'react'
import '../styles/applybutton.css'

function ApplyButton() {

    const showApply = () => {
        let apply = document.querySelector(".apply");
        apply.classList.remove('hidden');
        apply.classList.add('block');
    }
    const dontShowApply = () => {
        let apply = document.querySelector(".apply");
        apply.classList.remove('block');
        apply.classList.add('hidden');
    }


  return (
    <div className='applybtn flex'>
            <p className='self-center text-white p-3 bg-amber-500 hidden apply'>Apply</p>
            <svg xmlns="http://www.w3.org/2000/svg" onMouseEnter={showApply} onMouseLeave={dontShowApply} className="p-2 h-12 w-12 bg-blue-500 text-white hover:bg-amber-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
    </div>
  )
}

export default ApplyButton;