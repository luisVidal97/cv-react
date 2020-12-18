import React from 'react'

export const ProjectsItem = ({project}) => {

    const  { title, description, image, repo, url } =  project;

    return (
        <div className="projects__item-s">
            <div className="projects__item-information">
                <h2 className="projects__item-title">
                    {title}
                </h2>
                <p className="projects__item-description">
                    {description}
                </p>

                {
                    ( repo.length > 0 || url) && 
                    (
                        <div>
                            <hr />
                            <p className="projects__item-description">Check the app in the following links</p>
                        </div>
                    )
                }
                {
                    (url) && 
                    <p className="projects__item-description">App's Link: 
                        <a href={url} rel="noreferrer" target="_blank" className="projects__item-link"> {url}</a>
                    </p>
                }
                {       
                    ( repo.length > 0 ) && 
                    <p className="projects__item-description">Repository: 
                        {
                            repo.map( (itemRepo,i) => <a key={i} rel="noreferrer" href={itemRepo} target="_blank" className="projects__item-link"> {itemRepo}</a>)
                        }
                        
                    </p>
                }
            </div>
            <div className="projects__item-img">
                <img src={image} alt={title}/>
            </div>
        </div>
    )
}
