import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Lottie from 'react-lottie';
import home1 from '../lotties/home1.json'
import Image from "next/image";
import website from '../images/Development.png'

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: home1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="absolute top-0 h-screen flex w-screen  overflow-y-hidden cursor-none font-noto">
            <div className={"w-full md:w-3/5 h-full flex flex-col items-center justify-center bg-sky-100 "}>
                <h1>
                    <span className="text-6xl font-extrabold  after:content-['MERN'] after:text-4xl after:align-text-top after:bg-green-500 after:rounded-full after:p-2 after:ml-10 after:text-white ">Hi, I'm</span>
                    <br/>
                    <span className="text-6xl font-extrabold text-green-500"> Devansh Lodhi</span>
                </h1>
                <p className="text-2xl font-medium mt-4 mb-4">I'm a Full Stack Web Developer</p>
                <div className={"flex space-x-3 items-center mt-8"}>
                    <button className="bg-blue-500 text-white font-medium px-8 py-2 rounded-full">Hire Me</button>
                    <a href=""
                       className="flex items-center"
                    >Projects
                        <ArrowUpRightIcon className="w-6 h-6"/>
                    </a>
                </div>
            </div>
            <div className="hidden md:block bg-emerald-300 h-full  w-2/5 relative">
                <div className="relative top-28 h-full w-full">
                    <div className="absolute p-1 bg-white w-fit rounded-full shadow-2xl right-1/2">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div className="absolute p-1 bg-white w-fit rounded-full shadow-2xl top-1/4 right-2 ">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div className="absolute bg-white w-fit rounded-full bottom-32 left-3 shadow-2xl ">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Picture of the author"
                            width={90}
                            height={90}

                        />
                    </div>
                    <div className="absolute w-fit top-0  ">
                        <Image
                            src={website}
                            alt="Picture of the author"
                            width={250}
                            height={250}
                            className=""
                        />
                    </div>


                </div>
                <div className=" absolute -bottom-10 right-0 pointer-events-none">
                    <Lottie options={defaultOptions}
                            height={300}
                            width={300}
                    />
                </div>


            </div>
        </div>

    );
};

export default Home;
