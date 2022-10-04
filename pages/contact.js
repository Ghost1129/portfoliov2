import React from 'react';
import Image from "next/image";
import contact from '../images/contact.jpg';
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const Contact = () => {
    return (
        <>
            <Cursor/>
            <Navbar active={"contact"}/>
        <div className="h-screen w-screen flex cursor-none overflow-hidden">
            <div className="pt-16 md:pt-26 md:pt-0 h-full w-full md:w-3/5 relative bg-gradient-to-b from-cyan-200 to-fuchsia-200">

                <div className="md:absolute  flex flex-col md:h-full md:w-full top-1/4 items-center font-noto">
                    <div className="p-10 ">
                        <span className="text-xs">Hello there</span>
                        <br/>
                        <span>
                        <span className="text-3xl font-bold">Got an idea?</span>
                        <br/>
                        I'd love to hear about it.
                    </span>
                    </div>

                </div>
                <div className=" flex flex-col md:absolute -right-[220px] top-[150px] m-6 p-8 rounded-lg bg-white">
                    <span className="text-lg text-green-400">Let's talk</span>
                    <form action="" className="flex flex-col gap-6 mt-8">


                        <input type="text" placeholder={'Your Name'} className="border-b-2 outline-none" />


                        <input type="email" placeholder={'Email'} className="border-b-2 outline-none"/>


                        <textarea name="" id="" cols="30" rows="10" placeholder={'Message'} className="border-b-2 outline-none resize-none"/>

                        <button className="p-4 border rounded-2xl text-lg font-bold">Send</button>
                    </form>
                </div>
            </div>
            <div className="hidden md:block bg-red-300 h-full w-1/2">

            </div>
        </div>
        </>
    );
};

export default Contact;
