import * as React from "react";

import Footer from "../footer";

class About extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <main className="about">
                    <div className="about-intro">
                        <h2>
                            This project is a showcase of
                            <span> influential female designers</span> who live
                            and work in Ireland.
                        </h2>

                        <p className="para-default">
                            Today the Irish design sector is 25% Female to 75%
                            Male (Policy Framework, 2016). This ratio is simply
                            not good enough. Gender balance was the last item on
                            the last page of the Policy framework for Design
                            Enterprise in Ireland. It’s time to change this.
                        </p>
                    </div>
                    <div className="why-whyexplore-container">
                        <div className="why-whyexplore">
                            <div className="why-whyexplore-para">
                                <h2>Why WhyExplore?</h2>
                                <p className="para-default">
                                    Teams with a male to female ratio of 40-60%
                                    are more productive and have more sustained
                                    results than unbalanced teams (McKinsey &
                                    Company, 2015).
                                </p>
                                <p className="para-default">
                                    There is proof all around us that diversity
                                    of thought adds huge value and more
                                    successful results. It’s more than a moral
                                    imperative, equality has a direct link to
                                    performance.
                                </p>
                            </div>
                            <div className="why-whyexplore-gif">
                                <img src="/img/giphy1.gif" />
                            </div>
                        </div>
                        <div className="about-box" />
                    </div>
                    <div className="whyexplore-is-container">
                        <div className="whyexplore-is">
                            <div className="whyexplore-is-gif">
                                <img src="/img/giphy2.gif" />
                            </div>
                            <div className="whyexplore-is-para">
                                <h2>WhyDesign is;</h2>
                                <p className="para-default">
                                    A showcase of Irish female designers that we
                                    don't hear enough about.
                                </p>
                                <p className="para-default">
                                    A place to share a little of these success
                                    stories so that they might inspire female
                                    second level students to take a leap into
                                    the creative industries.
                                </p>
                                <p className="para-default">
                                    An answer to the parents who ask 'Why
                                    Design?'
                                </p>
                                <p className="para-default">
                                    A way to encourage more female participation
                                    in the Irish Design work force.
                                </p>
                            </div>
                        </div>
                        <div className="about-box" />
                    </div>
                    <div className="about-ending">
                        <h2>
                            A letter from Kim Mackenzie-Doyle, WhyDesign founder
                            and IDI President 2017/2018
                        </h2>

                        <p className="para-default">
                            Being the first female designer hired in Design
                            Partners, where I began my career nearly 20 years
                            ago, was a huge culture shock. Not only was there an
                            age gap of five plus years between my peers and I,
                            there was a very obvious gender gap. Progressively
                            Design Partners were involved in pitches that needed
                            female lead designers. I experienced first-hand the
                            benefits to the studio culture — as the ratio began
                            to change so too did the tone, for the better.
                        </p>

                        <p className="para-default">
                            When the opportunity for IDI Presidency came up my
                            immediate thought was in addressing this imbalance,
                            and so WhyDesign was born. Developed alongside
                            co-chair Claire Dowling, a number of dedicated IDI
                            volunteers, and was supported by progressive
                            partners and sponsors. This is the first initiative
                            for the creative industries of its kind in Ireland.
                        </p>

                        <p className="para-default">
                            If you would like to help us continue the
                            development of Why Design and come on board as
                            sponsor/partner or to share your story please
                            contact whydesign@IDI-design.ie
                        </p>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;
