import React from "react";
import encode from "../utils/encode";

class CaseStudyDownload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            company: '',
            downloadLink: this.props.downloadLink || "https://rhoimpact.com/",
            caseStudyTitle: this.props.caseStudyTitle || "Unnamed Case Study",
            downloadShow: false,
            failAlert: false,
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'case-study-download', ...this.state }),
        })
            .then(
                this.setState({
                    name: '',
                    email: '',
                    company: '',
                    downloadShow: true, // Why does this happen even if no internet?
                })
            )
            // .then(
            //     setTimeout(() => {
            //         if (this.state.downloadShow) {
            //             this.setState({
            //                 downloadShow: false,
            //             });
            //         }
            //     }, 10000)
            // )
            .catch((error) =>
                this.setState({
                    failAlert: true,
                }).then(
                    setTimeout(() => {
                        if (this.state.failAlert) {
                            this.setState({
                                failAlert: false,
                            });
                        }
                    }, 10000)
                )
            );
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, company, downloadLink, caseStudyTitle, downloadShow } =
            this.state;

        return (
            <section className="relative">
                {/* Section background (needs .relative class on parent and next sibling elements) */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 pointer-events-none mb-12"
                    aria-hidden="true"
                ></div>

                {/* Vertical gray line */}
                <div
                    className="absolute left-0 right-0 top-4 m-auto w-px p-px h-14 bg-gray-300 transform -translate-y-1/2"
                ></div>

                <div className="relative max-w-3xl mx-auto pt-12 w-11/12 pb-6 md:pb-6">
                    <div className="h2 font-playfair-display text-slate-800 my-10 text-center">
                        Download this full case study
                    </div>
                    <form
                        className="grid grid-cols-1 gap-12"
                        onSubmit={this.handleSubmit}
                        name="case-study-download"
                        method="POST"
                        data-netlify="true"
                        action="/case-studies/?success=true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" id="caseStudyTitle" name="caseStudyTitle" value={caseStudyTitle} />
                        <label
                            className="block"
                            htmlFor="name"
                        >
                            <span className="text-sm font-medium text-gray-700">Name *</span>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                className="form-input block w-full rounded-md bg-slate-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                placeholder="Your Name"
                                required
                            />
                        </label>
                        <label
                            className="block"
                            htmlFor="email"
                        >
                            <span className="text-sm font-medium text-gray-700">Email *</span>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                className="form-input block w-full rounded-md bg-slate-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                placeholder="Your Email"
                                required
                            />
                        </label>
                        <label
                            className="block"
                            htmlFor="company"
                        >
                            <span className="text-sm font-medium text-gray-700">Company *</span>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                value={company}
                                onChange={this.handleChange}
                                className="form-input block w-full rounded-md bg-slate-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                placeholder="Company Name"
                                required
                            />
                        </label>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full px-3">
                                <button
                                    type="submit"
                                    className="h4 w-full text-white btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                                >
                                    Download Now
                                </button>
                            </div>
                        </div>
                    </form>
                    {downloadShow && (
                        <div className={"w-full text-center text-green-700 pt-6"}>
                            {/* Redo the link above as an href */}
                            <a href={downloadLink}
                                className="h4 inline-flex w-full btn py-10 bg-gradient-to-r from-white to-gray-100 hover:from-gray-200 hover:to-gray-300"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Download"
                            >
                                DOWNLOAD &darr;
                            </a>
                        </div>
                    )}
                </div>

            </section>
        );
    };
}

export default CaseStudyDownload;
