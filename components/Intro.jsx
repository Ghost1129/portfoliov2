import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";







const Logo = () => {
    // gsap.registerPlugin(SplitText);
    const el = useRef(null);
    const q = gsap.utils.selector(el);
    const tl = useRef();

// useEffect(() => {
//     document.body.addEventListener('mousemove', (e) => {
//         let movex = e.clientX
//         let movey = e.clientY
//         console.log(movex, movey);
//         gsap.set(q('.cursor'), {
//             x: movex,
//             y: movey

//         })


//     })
// })




    useEffect(() => {
        //  var split = new SplitText(q(".text"), {type:"chars"});
        // var char = split.chars;
        // console.log(char);

        tl.current = gsap.timeline()
            .from(q('.logo1'),{
                xPercent: -3000,
                duration: 2,
                ease: 'Elastic.easeOut',
                autoAlpha: 0,
            })
            .from(q('.logo'), {duration: 0.8,xPercent:100,opacity:0, delay: 0.5, ease: ' SlowMo.out'})
            .to(q('.logo1'),{
                rotation: -40,
                duration: 1,
                ease: 'Elastic.easeInOut'

            })
            .set(q('.logo1'),{
                color: 'green',
            })


        return () => {
            tl.current.kill();
        }
    }, [q]);

    return (
        <>
            <div className=' bg-black h-screen flex items-center justify-center text-8xl  text-white font-sora font-semibold relative cursor-none ' ref={el}>
                {/* <Cursor/> */}
                <h1 className='logo'>Devansh
                </h1>
                <span className='logo1 inline-block'>L</span>
            </div>
        </>
    )
}

export default Logo