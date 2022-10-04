import React, {useEffect} from 'react';
import { 	Bars3Icon } from '@heroicons/react/24/solid'
import Link from "next/link";

const Navbar = ({active}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const [Active, setActive] = React.useState('home');



    useEffect(() => {
            setActive(active)
    }, [active]);




    return (
        <div className={"font-noto z-40 cursor-none w-screen flex items-center justify-between p-4 md:p-8 fixed top-0 bg-sky-100 drop-shadow-md "}>
            <h2 className="group text-5xl font-extrabold ml-4 md:ml-16 hover:scale-90">
                <span>D</span>
                <span className=" inline-block -rotate-[30deg] group-hover:text-green-400">L</span>
            </h2>
            <ul className={"hidden md:flex space-x-12 text-xl font-noto"}>
                <Link href={'/'}>
                    <a href="" className={`${Active==='home'?'text-green-400':''}`} >Home</a>
                </Link>
                <Link href={'/about'}>
                    <a href="" className={`${Active==='about'?'text-green-400':''}`} >About</a>
                </Link>
                <Link href={'/project'}>
                    <a href="" className={`${Active==='project'?'text-green-400':''}`} >Projects</a>
                </Link>


            </ul>
            <button className={"hidden md:flex space-x-12"}>Hire Me</button>
            <Bars3Icon className={"md:hidden w-8 h-8"} onClick={handleClick}/>
            <div className={`absolute  flex-col items-center justify-center text-4xl space-y-10 md:hidden left-0 top-20  h-screen w-screen bg-red-100 overflow-hidden ${isOpen?'flex ':'hidden'} `}
                 onClick={handleClick}>

                <Link href={'/'}>
                    <a href="" className={`${Active==='home'?'text-green-400':''}`} >Home</a>
                </Link>
                <Link href={'/about'}>
                    <a href="" className={`${Active==='about'?'text-green-400':''}`} >About</a>
                </Link>
                <Link href={'/project'}>
                    <a href="" className={`${Active==='project'?'text-green-400':''}`} >Projects</a>
                </Link>
            </div>


        </div>
    );
};

export default Navbar;
