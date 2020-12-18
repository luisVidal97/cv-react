import React from 'react'

export const ContactItem = ({item}) => {

    const {title, description, image} = item ;
    
    return (
        <div className="contact__card">
            <img src={image} alt={title}/>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
