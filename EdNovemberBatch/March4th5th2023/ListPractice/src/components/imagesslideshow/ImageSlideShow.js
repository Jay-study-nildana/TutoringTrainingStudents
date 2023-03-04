//ImageSlideShow.js
//https://react-slideshow-image.netlify.app/?path=/story/introduction--page

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlideShow.css';
import SlideHelper from './SlideHelper';

const ImageSlideShow = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const imagessandkdesignstudio = [
        "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseti.jpg",
        "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksete.jpg",
        "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksetc.jpg",
    ];

    return (
        <div className="container-fluid text-center">
            {/* <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>

                    </div>
                </div>
            </Slide> */}
            <SlideHelper images={imagessandkdesignstudio} slidetype={"fade"} />
<hr></hr>

            <SlideHelper images={images} slidetype={"default"}/>
        </div>

    );
};

export default ImageSlideShow;