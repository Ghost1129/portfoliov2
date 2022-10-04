import React, {useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";

const Cursor = ({cursorEnabled}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const el = useRef(null);
    const q = gsap.utils.selector(el);

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    });

    const { x, y } = mousePosition;




    useEffect(() => {
        gsap.set(el.current, {
            x: x-10,
            y: y-10

        })
    })

    useEffect(() => {
            toggleCursor()
        }
        , [cursorEnabled])


    const toggleCursor = () => {
        if (cursorEnabled === 'mouseover') {
            gsap.to(el.current, {
                scale: 0.6,
                duration: 0.2,
                ease: "power2.out"
            })}
        else if (cursorEnabled === 'mouseout') {
            gsap.to(el.current, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            })
        }

    }




    return (
        <>
            <div className={`relative z-50 cursor w-4 h-4 rounded-full bg-green-400 pointer-events-none`}  ref={el}></div>
        </>
    )
}

export default Cursor


