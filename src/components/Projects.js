import React from 'react'
import { ProjectsItem } from './items/ProjectsItem';

export const Projects = () => {


    const projects = [
        {
            title: 'HeroApp',
            description: `This application is a part of my course about React. I like heroes and whole Marvel universe, so for me, it was very fun
            building this site and learn, at the same time, about this powerful Library.`,
            image: './assets/projects/heroapp.png',
            repo: ['https://github.com/luisVidal97/heros-app-react'],
            url: 'https://admiring-bhabha-ffbdf1.netlify.app'
        },
        {
            title: 'TuLindero',
            description: `The main goal with this project is being able to manage real estate (sell, rent or buy) 
            with an innovative business model. The stack of this big project was Angular, Nodejs and Mariadb with 
            requirements such as login, logout,  post a propery, sell a property, manage different files or 
            properties and so on. Additional data is reserved.`,
            image: './assets/projects/tulindero.png',
            repo: [],
            url: ''
        },
        {
            title: 'MayDayApp',
            description: `This awesome project was built during Globhack Latam 2020 in record time (two days). 
            The event was a competition throughout which my team and I wrote code for more than 16 hours straight 
            to deliver the best possible product. We were 5 developers working in the following stack: Vuejs, 
            Nodejs and MongoDB. Using an agile methodology like Scrum, we could finish our MVP and 
            show the judges our business idea. Basically, the app allows people and enterprises to create a 
            community network where they can help each other in different fields in just one platform.`,
            image: './assets/projects/maydayapp.png',
            repo: ['https://github.com/luisVidal97/MaydayApp'],
            url: 'https://maydayapp-alpha1.herokuapp.com/#/'
        },
        {
            title: 'BuyDebtApp',
            description: `BuyDebtApp: The investment world is very interesting and surprising. Two colleagues and I developed this MVP as a part of a business idea. 
            The stack of this app was: Vuejs, nodejs and Postgresql.`,
            image: './assets/projects/buydebtapp.png',
            repo: ['https://github.com/luisVidal97/BuyDebt-Frontend', 'https://github.com/luisVidal97/BuyDebt-Backend'],
            url: 'https://buydebt-app.herokuapp.com/'
        },
        {
            title: 'Cenicaña App',
            description: `This was my bachelor's degree project. My partner and I developed a mobile application using Flutter. 
            It consists in an app that allows to take pictures of different crop plagues in the field and recognize Salivazo 
            (Aeneolamia varia), an insect that feeds on sugar cane. We used OpenCV as our library to implement a computer vision module 
            done in Python. It was a big challenge for us since it was our first time mobile programming.`,
            image: './assets/projects/ceniapp.png',
            repo: [],
            url: ''
        }
    ];

    return (
        <section id="projects">
            <h1 className="projects__title">PROJ<span>ECTS</span></h1>
            <div className="projects__items-list">
                { projects.map( (project) =>
                    <ProjectsItem key={project.title} project={project}/>    
                )}
            </div>
            <h3 className="projects__beside"> 
                If you are interesting to check more projects I have worked, please visit my 
                 <a href="https://github.com/luisVidal97" target="_blank">
                      GitHub 
                </a> 
                or contact with me!
            </h3>
        </section>
    )
}
