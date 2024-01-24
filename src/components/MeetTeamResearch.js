import React from 'react';
import shuffleArray from '../utils/shuffleArray';

const researchers = [
    {
        "name": "Hannah Bernstein",
        "title": "Impact Accounting Intern",
        "date": "Date, YYYY",
    },
    {
        "name": "Peregrine Painter",
        "title": "Research Fellow",
        "date": "Date, YYYY",
    },
    {
        "name": "Emily Prebihalo",
        "title": "Research Fellow",
        "date": "Date, YYYY",
    },
    {
        "name": "Evan Smith",
        "title": "Research Intern",
        "date": "Date, YYYY",
    },
    {
        "name": "Zachary Thomas",
        "title": "Research Fellow",
        "date": "Date, YYYY",
    },
    {
        "name": "Anna Jett",
        "title": "UVA Research Intern",
        "date": "Date, YYYY",
    },
    {
        "name": "Maria Teresa Varela",
        "title": "UVA Research Intern",
        "date": "Date, YYYY",
    },
    {
        "name": "Joseph Liberatore",
        "title": "UVA Research Intern",
        "date": "Date, YYYY",
    },
    {
        "name": "Rajesh Hegde",
        "title": "Research Fellow",
        "date": "Date, YYYY",
    },
    {
        "name": "Tobi Olabode",
        "title": "Impact Accounting Intern",
        "date": "Date, YYYY",
    },
]

function TeamResearch() {
    return (
        <section className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                        <h2 className="h2">Meet Some of Our Incredible Researchers &amp; Fellows</h2>
                        <p className="text-xl text-gray-600 mt-4">
                            We are a team of researchers, engineers, and practitioners
                            passionate about addressing climate change.
                            We are fortunate to work with and educate the next generation
                            of climate leaders, many of whom you will see below.
                        </p>
                    </div>

                    {/* Team members */}
                    <div
                        className="max-w-sm mx-auto -my-6 sm:max-w-5xl sm:flex sm:flex-wrap sm:justify-center sm:-my-8"
                        data-aos-id-team
                    >
                        {/* Researchers */}
                        {shuffleArray(researchers).map((researcher) => (
                            <div
                                className="py-6 sm:w-1/2 md:w-1/4 sm:py-8"
                                data-aos="zoom-y-out"
                                data-aos-anchor="[data-aos-id-team]"
                            >
                                <div className="flex flex-col items-center">
                                    <h4 className="mb-1 text-xl font-bold">
                                        {researcher.name}
                                    </h4>
                                    <div className="mb-2 font-medium text-gray-600">
                                        {researcher.title}
                                    </div>
                                    {/* <div className="mb-3 text-center text-gray-600">
                                        {researcher.date}
                                    </div> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamResearch;
