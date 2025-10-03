import React from 'react';

const FaqArea = () => {
    return (
        <div className="app-faq-area p-relative pb-120">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="app-faq-wrap faq-inner-style">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample1">
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                                How long does it take to get started?
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). <br />
                                                    We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. <br />
                                                    Then it’s off to signing off, kicking off.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                What services does BTech Group offer?
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                We provide end-to-end IT consulting, mobile and web app development, software solutions, eCommerce platforms, digital marketing, 
                                                and emerging technologies like AI, IoT, and blockchain.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                                Do you work with startups as well as established businesses?
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                Yes! We specialize in helping startups bring ideas to life with MVPs and scalable solutions, 
                                                while also supporting enterprises with complex, large-scale projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                                                What’s the average project duration?
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseFour4" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                Project timelines depend on scope and features. 
                                                An MVP can take 6–12 weeks, while more advanced solutions may take a few months. We always provide a clear timeline before starting.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5">
                                                 Do you provide post-launch support and maintenance?
                                                <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseFive5" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                Absolutely. We offer ongoing support, updates, 
                                                and scaling services to ensure your app, website, or software continues to perform smoothly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqArea;