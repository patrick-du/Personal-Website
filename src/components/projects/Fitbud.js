import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic';

const FitBud = () => {
    const styles = {
        list: {
            color: 'orange'
        }
    }
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PostTop subtitle="uOttaHack 2019" title="Fitbud" previous="/projects/personalwebsite" next="/projects/fgfbrands" />
            <p className="s-font">Fitbud is an all-in-one fitness app that provides a solution to common issues experienced by gym-goers of every skill level.</p>
            <p className="s-font">Some issues we tackled included finding a gym partner, tracking progress (reps, sets, exercise), and even asking for advice at the gym. This app provides all the steps from planning your next visit to reflecting on your last workout onto the the same streamlined platform.</p>
            <BorderPic imgPath="FitBud2.png" picDesc="Home Screen: User Info, Newsfeed, Sidebar Navigation" />
            <p className="s-font">Features include:
            <ul>
                    <li>Friend Finder - lift together with members of similar training styles or simply make a new friend</li>
                    <li>Exercise Tracker - create workout routines and easily log exercises, sets, and reps</li>
                    <li>Music Player - access all your Spotify music within this app</li>
                </ul>
            </p>
            <BorderPic imgPath="FitBud4.png" picDesc="Discover Friends Screen" />
            <BorderPic imgPath="FitBud5.png" picDesc="Workout Screen: Exercise Log and Spotify Music Player" />

            <p className="s-font">This app was developed at <a href="https://devpost.com/software/fitbud" target="_blank" className="hvr-underline-from-left purple">uOttaHacks 2019</a> with React and Node (Express JS). View the full project on <a href="https://github.com/patrick-du/FitBud" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
            <hr />
            <Link to="/projects/fgfbrands" className="linkdec">
                <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>FGF Brands</p>
                </div>
            </Link>
        </div>



    )

}

const styles = {

}

export default FitBud;