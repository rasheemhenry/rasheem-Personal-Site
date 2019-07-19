import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import PromptPreview from './prompt-preview';
import Nav from './nav';
import ProjectSection from './project-section';
import AboutSection from './about-section';
import ResumeSection from './resume-section';
import ProjectPage from './project-page';
import AboutPage from './about-page';
import ResumePage from './resume-page'
import Footer from './footer';

import '../css/main.css';
import vid from '../assets/blickGap.MOV';



class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.refs.theVideo.playbackRate=0.5;
    }

    render() {
        return(
            <div className='main__container'>
                <div className='video__wrapper'>
                    <video ref='theVideo' autoPlay muted>
                        <source src={vid} type='video/mp4'/>
                        <source src={vid} type='video/ogg'/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Nav />
                <PromptPreview />
                <ProjectSection 
                    sectionName='My latest Projects'
                    btnTitle='View More Projects'
                    arrowSize='20'
                    bgcolor={bgcolors.white}
                    link='/portfolio'
                />
                <AboutSection 
                    sectionName='My Life'
                    btnTitle='More about Me'
                    arrowSize='20'
                    bgcolor={bgcolors.grey}
                />
                <ResumeSection
                    sectionName='See my Journey'
                    btnTitle='Full Resume'
                    arrowSize='20'
                    bgcolor={bgcolors.white}
                />
                <Footer/>
            </div>
        );
    }
}

const bgcolors = {
    'white': '#fff',
    'grey': '#edeeef',
};

export default Main;