import React from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const Photography = () => {

    return (
        <div className="container-fluid projectContainer mx-auto px-0">

            <PageTitle pageName="Collections" descriptionBottom="Canon EOS Rebel T5 EF-S 18-55mm" picture="bitmoji5" />

            <div className="photoCard hvr-box hvr-grow">
                <div className="s-font text-center">Coming Soon (Calgary 2018)</div>
            </div>



            <Link to="/photography/calgary">
                <div className="photoCard hvr-box hvr-grow">
                    <div className="s-font text-center">Coming Soon</div>
                </div>

            </Link>

        </div >
    );

}

export default Photography;


/* http://neptunian.github.io/react-photo-gallery/ */



