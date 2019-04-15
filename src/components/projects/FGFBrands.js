import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic';

const FGFBrands = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <BorderPic imgPath="fgfB.png" />
            <div className="projectContainer mx-auto px-0">

                <PostTop subtitle="Work Term" title="FGF Brands" previous="/projects/fitbud" next="/projects/huddle" />


                <p className="s-font">At <a href="https://www.fgfbrands.com" target="_blank" className="hvr-underline-from-left purple">FGF Brands</a>, I played a major role in several large projects - developing the FGF progressive web app, creating a company web framework for future apps, and programming over 2000 NFC tags for the engineering department. Over the course of the coop term, I was able to pick up new languages, frameworks, and libraries such as Bootstrap, JavaScript, React, and React Native. Working at FGF Brands for my first coop term was an incredible experience with lots of opportunities to grow by myself as well as in a team. The company highly values one's ability to work in a team as well as their work ethic - two skills I developed tremendously during my time at FGF.     </p>

                <hr />
                <Link to="/projects/huddle" className="linkdec">
                    <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                        <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Huddle</p>
                    </div>
                </Link>
            </div>
        </div>


    )

}

const styles = {

}

export default FGFBrands;