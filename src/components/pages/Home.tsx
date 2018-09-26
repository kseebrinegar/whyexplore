import * as React from "react";
import { Link } from "react-router-dom";

interface IState {
    currentSlideCount: number;
    isFirstNameAnimated: boolean;
    isLastNameAnimated: boolean;
    isFullNameLineAnimated: boolean;
    isPersonsProfessionAnimated: boolean;
    isGreySliderAnimated: boolean;
    currentPersonsImg: string;
    currentPersonsFirstName: string;
    currentPersonsLastName: string;
    currentPersonsProfession: string;
}
class Home extends React.Component<{}, IState> {
    public state: IState = {
        currentSlideCount: 1,
        isFirstNameAnimated: false,
        isFullNameLineAnimated: false,
        isGreySliderAnimated: false,
        isLastNameAnimated: false,
        isPersonsProfessionAnimated: false,
        currentPersonsImg:
            "url('http://whydesign.ie/wp-content/uploads/2018/02/IMG_7907_edit-1920x1371.jpg')",
        currentPersonsFirstName: "Emma",
        currentPersonsLastName: "Manley",
        currentPersonsProfession: "Fasion Designer"
    };

    constructor(props: {}) {
        super(props);
    }
    public nextImageOrPrevImage = (e: React.MouseEvent<HTMLElement>) => {
        // @ts-ignore
        const arrowClicked = e.target.dataset.clickArrow;
        let slideCount: number = this.state.currentSlideCount;

        if (arrowClicked === undefined) {
            return;
        } else if (
            arrowClicked === "left" &&
            this.state.currentSlideCount === 1
        ) {
            return;
        } else if (
            arrowClicked === "right" &&
            this.state.currentSlideCount === 6
        ) {
            return;
        } else if (arrowClicked === "right") {
            slideCount++;
        } else {
            slideCount--;
        }

        this.setState(() => {
            return {
                currentSlideCount: slideCount,
                isFirstNameAnimated: true,
                isFullNameLineAnimated: true,
                isGreySliderAnimated: true,
                isLastNameAnimated: true,
                isPersonsProfessionAnimated: true
            };
        });

        /* person2Img:
        "url('http://whydesign.ie/wp-content/uploads/2018/02/IMG_7806_edit-1920x1371.jpg')",
            person2FirstName: "Aoife",
                person2LastName: "Dooley",
                    person2Profession: "Illustrator"*/

        const timer1 = setInterval(() => {
            this.setState(() => {
                return {
                    isFirstNameAnimated: false,
                    isFullNameLineAnimated: false,
                    isGreySliderAnimated: false,
                    isLastNameAnimated: false,
                    isPersonsProfessionAnimated: false
                };
            });
            clearInterval(timer1);
        }, 1250);

        const timer2 = setInterval(() => {
            this.setState(() => {
                return {
                    isFirstNameAnimated: false,
                    isFullNameLineAnimated: false,
                    isGreySliderAnimated: false,
                    isLastNameAnimated: false,
                    isPersonsProfessionAnimated: false
                };
            });
            clearInterval(timer2);
        }, 1250);
    };

    public render() {
        return (
            <main className="home">
                <div className="slider-details-links-container">
                    <div className="slider-container">
                        <div className="slider">
                            <div
                                style={{
                                    backgroundImage: this.state
                                        .currentPersonsImg
                                }}
                                className={
                                    this.state.isGreySliderAnimated
                                        ? "slider-grey-background animate-grey-background"
                                        : "slider-grey-background"
                                }
                            />
                            <div className="slider-img-background" />
                        </div>
                    </div>
                    <div className="details">
                        <div className="fullname">
                            <div className="firstname">
                                <p
                                    className={
                                        this.state.isFirstNameAnimated
                                            ? "firstname-animation"
                                            : " "
                                    }
                                >
                                    {this.state.currentPersonsFirstName}
                                </p>
                            </div>
                            <div className="lastname">
                                <p
                                    className={
                                        this.state.isLastNameAnimated
                                            ? "lastname-animation"
                                            : " "
                                    }
                                >
                                    {this.state.currentPersonsLastName}
                                </p>
                            </div>
                            <div
                                className={
                                    this.state.isFullNameLineAnimated
                                        ? "fullname-line-animate"
                                        : "fullname-line"
                                }
                            />
                        </div>
                        <p
                            className={
                                this.state.isPersonsProfessionAnimated
                                    ? "persons-profession persons-profession-animate"
                                    : "persons-profession"
                            }
                        >
                            Fasion Designer
                        </p>
                    </div>
                    <Link to="/" className="read-more">
                        <p className="read-more-text">READ MORE</p>
                        <p className="read-more-line" />
                    </Link>
                </div>
                <div onClick={this.nextImageOrPrevImage} className="slider-nav">
                    <div data-click-arrow="left" className="slider-left-arrow">
                        <i
                            className="fa fa-fw fa-arrow-left"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="slider-counter-container">
                        <p className="slider-counter">
                            <span className="slider-count-number">
                                0{this.state.currentSlideCount}
                            </span>
                            <span className="slider-counter-container-of">
                                of
                            </span>
                            <span className="slider-count-number">04</span>
                        </p>
                    </div>
                    <div
                        data-click-arrow="right"
                        className="slider-right-arrow"
                    >
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
