import React from 'react'
import SectionTitle from '../UI/SectionTitle'

type SectionWrapperType = {
    children?: React.ReactNode
    title: string
}

const SectionWrapper = (props: SectionWrapperType) => {
    return (
        <div className="mt-16 flex flex-col">
            <SectionTitle>{props.title}</SectionTitle>
            {props.children}
        </div>
    )
}

export default SectionWrapper
