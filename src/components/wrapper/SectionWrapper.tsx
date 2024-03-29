import React from 'react'
import SectionTitle from '../UI/SectionTitle'

type SectionWrapperType = {
    children?: React.ReactNode
    title: string
    id: string
    className?: string
}

const SectionWrapper = (props: SectionWrapperType) => {
    return (
        <div className={`mt-16 flex flex-col ${props.className}`}  id={props.id}>
            <SectionTitle>{props.title}</SectionTitle>
            {props.children}
        </div>
    )
}

export default SectionWrapper
