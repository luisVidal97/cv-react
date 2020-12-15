import React from 'react';
import { ContactItem } from './items/ContactItem';

export const Contact = () => {

    const contacts = [
        {
            title: 'Teléfono',
            description: '+57 3175698771',
            image: './assets/contact/phone.png'
        },
        {
            title: 'Email',
            description: 'luisfcv97@gmail.com',
            image: './assets/contact/email.png'
        },
        {
            title: 'location',
            description: 'Tuluá, Colombia',
            image: './assets/contact/location.png'
        },
    ];


    return (
        <section id="contact">
            <h1 className="contact__title">CONTACT  <span>INFORMATION</span></h1>
            <div className="contact__cards">
                {
                    contacts.map( item => <ContactItem key={item.title} item={item}/>)
                }
            </div>
        </section >
    )
}
