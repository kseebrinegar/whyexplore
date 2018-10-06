import * as React from "react";

class About extends React.Component {
    public render() {
        return (
            <main className="about">
                <div className="about-intro">
                    <h2>
                        This project is a showcase of
                        <span> influential female designers</span> who live and
                        work in Ireland.
                    </h2>

                    <p className="para-default">
                        Today the Irish design sector is 25% Female to 75% Male
                        (Policy Framework, 2016). This ratio is simply not good
                        enough. Gender balance was the last item on the last
                        page of the Policy framework for Design Enterprise in
                        Ireland. It’s time to change this.
                    </p>
                </div>
            </main>
        );
    }
}

export default About;
