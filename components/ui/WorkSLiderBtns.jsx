import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSLiderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();

    const slidePrev = () => {
        swiper.slidePrev();
    };

    const slideNext = () => {
        swiper.slideNext();
    };

    return (
        <div className={containerStyles}>
            <button className={`${btnStyles} flex items-center justify-center text-white`} onClick={slidePrev}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={`${btnStyles} flex items-center justify-center text-white`} onClick={slideNext}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSLiderBtns;
