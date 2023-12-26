'use client';
import classNames from "classnames";
import { useRef,useEffect } from "react";
import {ChevronDoubleRightIcon,ChevronDoubleLeftIcon} from "@heroicons/react/24/outline";

/** 
 * Componente de formatação para criar slider de items
 * @param items -> items to slide Array[SliderItem]
 */
const Slider = ({items}) => {

    // const
    const sliderContainer = useRef(null);
    var distance;

    // functions
    const horizontalScroll = (evt) => {
        sliderContainer.current.scrollLeft += (evt.deltaY * 4);
    };

    const horizontalScrollClick = (distance) => {
        sliderContainer.current.scrollLeft += distance;
    };

    // UseEffects
    useEffect( () => {
        distance = window.innerWidth/3;
    },[]);

    return(
        <span className="relative">
            <ButtonSlider onClick={() => horizontalScrollClick(-distance)}/>
            <div className="
                flex flex-row gap-5
                w-slider ml-5 p-4
                overflow-x-auto overscroll-contain
                scroll-smooth scroll-custom
                shadow rounded
            "
                ref={sliderContainer}
                onWheel={horizontalScroll}
            >
                {items}
            </div>
            <ButtonSlider increase onClick={() => horizontalScrollClick(distance)}/>
        </span>
    );
};

export default Slider;

/**
 * Componente de formatação de botões para controle do slider (Desktop)
 * @param increase -> Visual state of slider ( True -> Right / False -> Left )
 */
const ButtonSlider = ({increase=false,onClick}) => {

    const iconClass = "w-8 h-8 text-text-light dark:text-text-dark";

    return(
        <button className={classNames({
            'absolute rounded-full h-fit p-2 top-1/2 transform -translate-y-1/2':true,
            'hidden md:inline':true,
            'left-2': !increase,
            'right-2': increase,
            'backdrop-filter backdrop-saturate-150 backdrop-blur-lg shadow':true,
        })}
        onClick={onClick}
        >
            {increase ? (
                <ChevronDoubleRightIcon className={iconClass} />
            ) : (
                <ChevronDoubleLeftIcon className={iconClass} />
            )}
        </button>
    );
};