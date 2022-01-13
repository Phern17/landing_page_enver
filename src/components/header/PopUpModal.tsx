import React from 'react'
import { createPortal } from 'react-dom'
import useWindowSize from '../../hooks/useWindowSize'

const PopUpModal = () => {
    const {width, height} = useWindowSize();

    const backdrop = <div style={{ width: width, height: height }} className='bg-black'></div>

    return (
        <React.Fragment>
           {createPortal(backdrop, document.getElementById('backdrop') as Element)}
        </React.Fragment>
    )
}

export default PopUpModal
