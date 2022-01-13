import React from 'react'

type SectionTitleProp = {
    children?: string
}

const SectionTitle = (prop: SectionTitleProp) => {
    return (
        <h1 className='font-sans font-bold text-4xl text-white max-w-lg leading-[3.5rem] sm:block sm:max-w-none sm:w-max'>{prop.children}</h1>
    )
}

export default SectionTitle
