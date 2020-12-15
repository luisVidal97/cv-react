import React from 'react';

export const Banner = () => {


    return (
        <section id="home" style={{ backgroundImage: 'url(./assets/banner.jpg)',
                                    backgroundSize: 'cover' }}>
            <div className="home_text">
               <h1>
                   Hey,
               </h1>
               <h1>
                   My name is Luis and...
               </h1>
               <h1>
                   I am a <span>Software </span>
               </h1>
               <h1>
               <span>System Engineer!</span>
               </h1>
            </div>
           
        </section>
    )
}
