import React from 'react'
import SectionTitle from '../UI/SectionTitle'

const ContactUs = () => {
    return (
        <div className='mt-28 my-20 sm:flex sm:justify-between '>
            
                <SectionTitle className=' sm:max-w-lg'> 
                    Contact Us For The Service You Want To Use
                </SectionTitle>
                <button className="text-white px-5 py-[0.7rem] mt-12 bg-blue-600 flex sm:mt-0 active:bg-blue-900 sm:self-center">Contact us</button>

        </div>
    )
}

export default ContactUs
