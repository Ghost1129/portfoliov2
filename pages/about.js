import React from 'react';
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Image from "next/image";
import Avatar from '../images/avatar.jpeg';


const About = () => {
    const [about, setAbout] = React.useState('bio');
    console.log(about);


    return (
        <>
            <Navbar active={"about"}/>
            <Cursor/>
            <div className={"cursor-none h-screen bg-sky-100 font-noto flex flex-col  top-0 w-screen pt-32"}>
                <span className={"text-5xl mx-auto font-bold self-center relative w-fit before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500"}>
                    <span className={"relative text-white"}>ABOUT</span>
                </span>
                <div className={"flex flex-col md:flex-row justify-around pt-20"}>
                    <div className={"relative  w-fit mx-auto md:mx-20 lg:mx-32 flex-shrink-0 flex-grow-0     "}>
                        <Image
                            src={Avatar}
                            alt="Picture of the author"
                            width={400}
                            height={400}
                            className={" mx-auto rounded-lg z-10"}
                        />
                        <span className={"absolute hidden md:block -left-10 top-10 border-4 border-emerald-300 border-dashed h-full w-full "}></span>
                    </div>
                    <div className={"bg-red-100 w-full mr-10"}>
                        <ul className="flex p-4 space-x-2">
                            <li className={`text-2xl font-bold p-1 rounded  ${about==='edu'?'bg-none':'bg-sky-700'}  `} onClick={e =>{setAbout('bio')} } >Bio</li>
                            <li className={`text-2xl font-bold p-1 rounded ${about==='edu'?'bg-sky-700':'bg-none'} `} onClick={e =>{setAbout('edu')} } >Education</li>
                        </ul>
                        <div className={`p-4 ${about==='edu'?'hidden':''}`}>
                            <p>Hello, I'm Devansh, a Web Developer from India. I'm having good knowledge of full stack development and I also done many projects in that. I came into this tech stack in 2020. I'm interested to collaborate with other developers to make a valueable projects and to grow my networks around the developers.</p>
                            <ul>
                                <li>
                                    <span className={"font-bold"}>Name:</span> Devansh Lodhi
                                </li>
                                <li>
                                    <span className={"font-bold"}>Age:</span> 17
                                </li>
                                <li>
                                    <span className={"font-bold"}>Email:</span>
                                </li>
                                <li>
                                    <span className={"font-bold"}>Nationality:</span>
                                </li>
                            </ul>
                            <button className="">Contact Me</button>
                        </div>
                        <div className={`${about==='edu'?'block':'hidden'}`}>
                            <ul>
                                lol
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <div className={"font-noto flex flex-col cursor-none bg-sky-100 pt-[280px] md:pt-0"}>
                <span className={"text-5xl  mx-auto font-bold -top-20 self-center relative w-fit before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500"}>
                    <span className={"relative text-white"}>Techs</span>
                </span>
                <div className="m-8">
<ul className={"flex flex-wrap justify-center  gap-10"}>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} layout={"fill"} className="" alt={"html"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} layout={"fill"} alt={"css"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} layout={"fill"} alt={"js"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} layout={"fill"} alt={"react"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} layout={"fill"} alt={"nextjs"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} layout={"fill"} alt={"nodejs"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} layout={"fill"} alt={"express"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} layout={"fill"} alt={"mongodb"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} layout={"fill"} alt={"typescript"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} layout={"fill"} alt={"tailwind"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"} layout={"fill"} alt={"materialui"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"} layout={"fill"} alt={"sass"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} layout={"fill"} alt={"git"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} layout={"fill"} alt={"github"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} layout={"fill"} alt={"figma"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"} layout={"fill"} alt={"vscode"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"} layout={"fill"} alt={"webpack"}/>
    </li>
    <li className={"m-2 p-2 rounded-lg bg-transparent w-20 h-20 md:w-36 md:h-36 relative"}>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"} layout={"fill"} alt={"yarn"}/>
    </li>


</ul>

                </div>

            </div>

        </>
    );
};

export default About;
