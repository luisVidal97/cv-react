import React from 'react'
import { SkillItem } from './items/SkillItem';

export const Skills = () => {

    const mySkills = [
        {
            title: 'HTML', image: './assets/skills/html.png',
        },
        {
            title: 'CSS', image: './assets/skills/css.png',
        },
        {
            title: 'SASS', image: './assets/skills/sass.png',
        },
        {
            title: 'Javascript', image: './assets/skills/javascript.png',
        },
        {
            title: 'Typescript', image: './assets/skills/typescript.png',
        },
        {
            title: 'Nodejs', image: './assets/skills/nodejs.png',
        },
        {
            title: 'Express', image: './assets/skills/express.png',
        },
        {
            title: 'Java', image: './assets/skills/java.png',
        },
        {
            title: 'MongoDB', image: './assets/skills/mongodb.png',
        },
        {
            title: 'React', image: './assets/skills/react.png',
        },
        {
            title: 'Angular', image: './assets/skills/angular.png',
        },
        {
            title: 'Vue', image: './assets/skills/vue.png',
        },
        {
            title: 'Mysql', image: './assets/skills/mysql.png',
        },
        {
            title: 'Mariadb', image: './assets/skills/mariadb.png',
        },
        {
            title: 'Flutter', image: './assets/skills/flutter.png',
        },
        {
            title: 'Git', image: './assets/skills/git.png',
        },
        {
            title: 'GitHub', image: './assets/skills/github.png',
        },
        {
            title: 'Git Flow', image: './assets/skills/gitflow.png',
        },
    ];


    return (
        <section id="skills">
            <h1 className="skills__title">MY <span>SKILLS</span></h1>
            <div className="skills__cards">
                {
                    mySkills.map( skill => <SkillItem key={skill.title} skill={skill}/>)
                }
            </div>
        </section>
    )
}
