import React from 'react'

export const SkillItem = ({skill}) => {

    const {title, image} = skill;

    return (
        <div className="skills_card">
            <img src={image} alt={title} title={title}/>
        </div>
    )
}
