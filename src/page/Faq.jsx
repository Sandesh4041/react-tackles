import React, { useState } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import faq from "../assets/faq.jpg";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButton = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked item
    };

    const faqs = [
        {
            question: "What Payments Methods Are Available?",
            answer: "You can either give a check to our craftsman at the end of the job or you can pay by cash and you can also use a credit card."
        },
        {
            question: "Why can't you give an estimate over the phone?",
            answer: "First, we need to view the project to give you a proper estimate."
        },
        {
            question: "Do I buy the materials?",
            answer: "You don't need to worry we select and bring the best product you need to get your job done."
        },
        {
            question: "How long does the project take?",
            answer: "It depends, but we will do our best to get you back to your home or business as soon as possible."
        },
        {
            question: "If I have questions, where can I find answers?",
            answer: "You can use our website's live chat option, or you can contact us from our contact page."
        },
        {
            question: "Do I have to commit to a contract?",
            answer: "Yes, you have to commit to a contract or you can quit at the beginning by discussing it with us."
        },
        {
            question: "Are you licensed?",
            answer: "Yes, we are licensed."
        }
    ];

    return (
        <div>
            <Nav />
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(25, 23, 23, 0.8), rgba(34, 34, 34, 0.2)),url(${faq})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="flex justify-center items-center h-[50vh] w-[100%]"
            >
                <div>
                    <h1 className="text-white font-bold text-xl nine:text-3xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-white">
                        Home / <span className="text-primary font-bold">FAQS</span>
                    </p>
                </div>
            </div>

            <div className="w-[90%] nine:w-[80%] mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="my-[10px] p-[15px] border border-gray-400">
                        <div className="flex">
                            <h1
                                className="text-primary font-semibold text-2xl hover:text-yellow-300 cursor-pointer"
                                onClick={() => handleButton(index)}
                            >
                                {faq.question}
                            </h1>
                            <button
                                className="bg-primary w-[30px] h-[30px] py-1 px-2 text-white ml-auto"
                                onClick={() => handleButton(index)}
                            >
                                {activeIndex === index ? "-" : "+"}
                            </button>
                        </div>
                        {activeIndex === index && (
                            <p className="text-gray-400 mt-[10px]">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Faq;
