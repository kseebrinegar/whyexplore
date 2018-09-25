import * as React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    public render() {
        return (
            <main className="home">
                <div className="slider-details-links-container">
                    <div className="slider-container">
                        <div className="slider">
                            <div className="slider-grey-background" />
                            <div className="slider-img-background" />
                        </div>
                    </div>
                    <div className="details">
                        <div className="fullname">
                            <div className="firstname">
                                <p>Emma</p>
                            </div>
                            <div className="lastname">
                                <p>Manley.</p>
                            </div>
                        </div>
                        <p className="persons-profession">Fasion Designer</p>
                    </div>
                    <Link to="/" className="read-more">
                        <p>READ MORE</p>
                        <p className="read-more-line" />
                    </Link>
                </div>
                <div className="slider-nav">
                    <div className="slider-left-arrow">
                        <i
                            className="fa fa-fw fa-arrow-left"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="slider-counter-container">
                        <p className="slider-counter">
                            <span className="slider-count-number">03</span>
                            <span className="slider-counter-container-of">
                                of
                            </span>
                            <span className="slider-count-number">06</span>
                        </p>
                    </div>
                    <div className="slider-right-arrow">
                        <i
                            className="fa fa-fw fa-arrow-right"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
