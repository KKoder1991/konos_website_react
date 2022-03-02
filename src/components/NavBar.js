import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar(){
    return (
        <header className="bg-red-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Kono Ndlovu
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a>
                    <a href="#contact" className="mr-5 hover:text-white">
                        Hire Me
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                </nav>
            </div>
        </header>
    );
}