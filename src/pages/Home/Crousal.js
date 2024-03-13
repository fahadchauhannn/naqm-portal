import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './images/theme1.png';
import img2 from './images/theme2.png';
import img3 from './images/cherry-transformed.jpeg';
import styles from './Home.module.css'; // Import your module CSS file

const Crousal = () => {
    const [plotDimensions, setPlotDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const calculateDimensions = () => {
            const width = window.innerWidth * 0.01 * 100; // Convert 100vw to pixels
            let height;

            const Mheight = window.innerHeight * 0.01 * 50; // Convert 100vh to pixels
            const Dheight = window.innerHeight * 0.01 * 90; // Convert 100vh to pixels

            if (window.innerWidth < 950) {
                height = Mheight;
            } else {
                height = Dheight;
            }

            setPlotDimensions({ width, height });
        };

        calculateDimensions();

        window.addEventListener('resize', calculateDimensions);

        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, []);

    const containerStyle = {
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // You can adjust the background color and opacity
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Text color
        fontSize: '2.5em',
    };

    const imageStyle = {
        maxWidth: '100%', // Set the maximum width to 100% of the container
        maxHeight: '80vh',
        objectFit: 'cover',
        userSelect: 'none',
    };

    return (
        <div style={containerStyle}>
            <Carousel autoPlay infiniteLoop swipeable interval={2200}>
                <div>
                    <img src={img1} alt="Image 1" style={imageStyle} />
                </div>
                <div>
                    <img src={img2} alt="Image 2" style={imageStyle} />
                </div>
                <div>
                    <img src={img3} alt="Image 3" style={imageStyle} />
                </div>
            </Carousel>
            <div style={overlayStyle}>NCIL- Citrus Park </div>
        </div>
    );
};

export default Crousal;
