import React from 'react'

type SectionTitleProp = {
    children?: string
    className?: string
}

const SectionTitle = (prop: SectionTitleProp) => {
    return (
        <h1 className={`font-sans font-bold text-4xl text-white max-w-lg leading-[3.5rem] sm:inline sm:max-w-none sm:w-max ${prop.className}`}>{prop.children}</h1>
    )
}

export default SectionTitle
