import React from 'react';
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import {projectsData} from "../components/data";
import ProjectFile from "../components/Projectfile";

const Project = () => {
    return (
        <>
            <Cursor/>
            <Navbar active={'project'}/>
                <div className="cursor-none bg-sky-100 font-noto flex flex-col  top-0 w-screen pt-32">
                    <span className={"text-5xl mx-auto font-bold self-center relative w-fit p-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500"}>
                        <span className={"relative text-white"}>PROJECTS</span>
                    </span>
                    <div className="min-h-fit  m-6">
                        <ul className="flex m-4 justify-center space-x-12 items-center">
                            <li className="border p-2">All</li>
                            <li className="border p-2">1</li>
                            <li className="border p-2">2</li>
                        </ul>
                        <div className="grid  md:grid-cols-2 lg:grid-cols-3 items-center mx-20 md:mx-32 gap-10 my-12">
                            {projectsData.map((project, index) => (
                                <ProjectFile key={index} project={project}/>
                            ))}
                        </div>

                    </div>
                </div>


        </>
    );
};

export default Project;
