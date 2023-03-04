//SlideHelper

import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlideShow.css';
import { useState } from "react";
import { useEffect } from "react";


const SlideHelper = (imageObject) => {

    const [quoteContent, setquoteContent] = useState({});
    const [typeOfStyle, settypeOfStyle] = useState(0);
    const [image1, setimage1] = useState("");
    const [image2, setimage2] = useState("");
    const [image3, setimage3] = useState("");

    // const [quoteContentMimic, setquoteContentMimic] = useState("");

    useEffect(() => {
        //console.log(images);
        setquoteContent(imageObject);
        // settypeOfStyle(slidetype);
        console.log(quoteContent);
        // console.log(slidetype);

        if (quoteContent.images != undefined) {
            console.log(`updating image values`);
            setimage1(quoteContent.images[0]);
            setimage2(quoteContent.images[1]);
            setimage3(quoteContent.images[2]);
        }

        if (quoteContent.slidetype != undefined) {
            console.log(`updating slidetype`);
            if(quoteContent.slidetype == "fade"){
                settypeOfStyle(1);
            }else{

                settypeOfStyle(0);
            }
        }

        // if (slidetype == "fade") {
        //     settypeOfStyle(1);
        // } else {
        //     settypeOfStyle(0);
        // }

        // console.log(image1);
        // console.log(image2);
        // console.log(image3);

    }, [quoteContent, image1, image2, image3,typeOfStyle, imageObject]);

    const actualImages = (

        <div className="container-fluid text-center">
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image1})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image2})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${image3})` }}>

                    </div>
                </div>
            </Slide>
        </div>

    );

    const actualImages2Slide = (

        <div className="container-fluid text-center">
            <Slide>
                <div className="each-slide">
                    <div>
                        <img src={image1} />
                    </div>
                    <p>First Slide</p>
                </div>
                <div className="each-slide">
                    <p>Second Slide</p>
                    <div>
                        <img src={image2} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={image3} />
                    </div>
                    <p>Third Slide</p>
                </div>
            </Slide>

        </div>

    );

    const actualImages3Fade = (

        <div className="container-fluid text-center">
            <Fade>
                <div className="each-slide">
                    <div>
                        <img src={image1} />
                    </div>
                    <p>First Slide</p>
                </div>
                <div className="each-slide">
                    <p>Second Slide</p>
                    <div>
                        <img src={image2} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={image3} />
                    </div>
                    <p>Third Slide</p>
                </div>
            </Fade>

        </div>

    );

    const defaultImages = (
        <div className="container-fluid text-center">
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${"https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseta.jpg"})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${"https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseta.jpg"})` }}>

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${"https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseta.jpg"})` }}>

                    </div>
                </div>
            </Slide>
        </div>

    )

    if (quoteContent == undefined) {
        return defaultImages;
    }
    else {
        if (typeOfStyle == 1) {
            return actualImages3Fade;
        } else if (typeOfStyle == 0) {
            return actualImages2Slide;
        }


        return actualImages3Fade;
    }
};

export default SlideHelper;