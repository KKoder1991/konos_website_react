import React from "react";

export default function About(){
    return (
        <section id="about">
            <div className="container mx auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">
                        Hi, I'm Kono.
                        <br className="hidden lg:inline-block" />I am a Software Engineering and Interaction Design student.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a Software Engineering and Interaction designer based in Berlin Germany. I am currently studying at CODE University of Applied Sciences.
                        I believe in both the creative and engineering process, this is why I have undertook to understand the process of Software Development from end-to-end.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href='#contact'
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:online-none hover:bg-green-600 rounded text-lg">
                                Contact
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-100 bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Projects
                        </a>
                    </div>
                </div>
                <div className="object-cover object-center rounded">
                    <img 
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./Cafe_picture_of_me.jpg"
                    />
                </div>
            </div>
        </section>
    );
}