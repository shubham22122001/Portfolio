import React from 'react'

// import D1 from '../assets/D1.jpg'
// import D2 from '../assets/D2.jpg'
// import D3 from '../assets/D3.png'

const Projects = () => {

    const projects = [
        {
            id: '1',
            title: 'Music Recommendation System',
            description: 'TThis project involved creating a system that could recommend music to users based on their current mood. We were responsible for designing and implementing the recommendation system, as well as integrating machine learning techniques to analyse and understand user moods. We used Spotify API for generating songs dataset, Machine learning libraries of python for model development and Django for website development',
            link: 'https://github.com/harsh08git/MusicLab'

        },
        {
            id: '2',
            title: 'Finance master',
            description: "In this project, I built a full-stack Finance Dashboard App using the MERN (MongoDB, Express.js, React, Node.js) stack, along with various other technologies such as Typescript, Material-UI, and Machine Learning algorithms. The app allows users to visualize their financial data through interactive charts, and also provides predictive insights using ML algorithms. I also implemented user authentication, data storage and retrieval using MongoDB. Through this project, I gained experience in developing scalable and interactive full-stack web applications.",
            link: 'https://github.com/shubham22122001/Finance_Master_MERN'

        },
        {
            id: '3',
            title: 'Hotel Reservation System',
            description: 'This website is used to reserve hotel rooms in four major cities: Mumbai, Delhi, Hyderabad, and Ooty.Technologies used are HTML, CSS, JS, MySQL and PHP',
            link: 'https://github.com/shubham22122001/Hotel-Reservation-Website'

        },


    ]

    // const designs = [
    //     {
    //         id : '1',
    //         title : 'Ecommerce Spice Platform Mockup',
    //         image : D1,
    //         link : 'https://www.figma.com/file/v3GdIVU6e8aCvbtXffeSur/Ecommerce?node-id=0%3A1&t=AaB2lCySZu45kE3T-1'
    //     },
    //     {
    //         id : '2',
    //         title : 'Tech Blogs Mockup',
    //         image : D2,
    //         link :'https://www.figma.com/file/MDnV0dPRPYbBA3VUq7U1qw/Tech-Blogs?node-id=2%3A2&t=pdWz3OIr0jvpthqe-1'
    //     },
    //     {
    //         id : '3',
    //         title : 'Payment Application',
    //         image : D3,
    //         link : 'https://www.figma.com/file/m8HbtaZxViFTjXALe1UAQq/Payment-App?node-id=6%3A764&t=T7ABWcdR3YHI4mFY-1'
    //     },
    // ]

    return (
        <div id='projects'>
            <div className="container1">
                <h2 style={{
                    color:
                        "white",
                    fontFamily:"Comfortaa",
                }}>Projects</h2>
                <h4 style={{
                    color:
                        "white"
                    , margin: ' 1.2rem 1.2rem 0.5rem 1.2rem'
                }}>Coding</h4>
                <div className="projectDiv d-flex flex-row">

                    {projects.map(project => (
                        <div key={project.id} className="project card">
                            <div className="card-body" >
                                <h5 className="projectTitle card-title">{project.title}</h5>
                                <p className="projectDesc card-text">{project.description}</p>
                                <button className="btn projectBtn" ><a href={project.link} target
                                    ="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> View Code/App</a></button>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
            {/* <div className="container1">
                <h4 style={{
                    color:
                        "white"
                    , margin: ' 1.2rem 1.2rem 0.5rem 1.2rem'
                }}>Design</h4>
                <div className="projectDiv d-flex flex-row">

                    {designs.map(design => (
                        <div key={design.id} className="project card" >
                            <img src= {design.image} className="card-img-top" alt="..."></img>
                            <div className="card-body" >
                                <h5 className="projectTitle card-title">{design.title}</h5>
                                <button className="btn projectBtn" ><a href={design.link} target
                                    ="_blank" rel="noreferrer"><i className="fa-brands fa-figma"> <br /></i> View Design File</a></button>
                            </div>
                        </div>

                    ))}


                </div>
            </div> */}


        </div>
    )
}

export default Projects