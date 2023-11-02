import './scroll.css'
import { useEffect } from 'react';


function ScrollToTop() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <>
            <button
                className='scroll'
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
            >
                <i className='bx bx-up-arrow-alt' ></i>
            </button>
        </>
    )
}

export default ScrollToTop