import React from "react";

export default function Contact(){

    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data){
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, phone, email, message}),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error))
    };

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto grid justify-items-center">
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center">
                    <h2 className="text-green-700 text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact
                    </h2>
                    <p className="leading-relaxed mb-5">
                        If you would like to get in contact with me, add your details
                        below and maybe we could work together.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-red-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Phone
                        </label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                className="w-full bg-red-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            E-mail
                        </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-red-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="relative mb-4">
                        <label 
                        htmlFor="message" 
                        className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-red-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transtion-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                            />
                    </div>
                    <button 
                        type="submit"
                        className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Submit
                        </button>
                    </form>
            </div>
        </section>
    )
}