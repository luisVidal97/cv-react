import React from 'react'

export const ContactItem = ({item}) => {

    const {title, description, image} = item ;
    
    return (
        <div className="contact__card">
            <img src={image} alt={title}/>
            <div>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    )
}
