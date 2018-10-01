import * as React from "react";

import Details from "../details/Details";
import ReadMore from "../readmore/ReadMore";

interface IState {
    currentSlideCount: number;
    isFirstNameAnimated: boolean;
    isLastNameAnimated: boolean;
    isFullNameLineAnimated: boolean;
    isPersonsProfessionAnimated: boolean;
    isGreySliderAnimated: boolean;
    isReadMoreAnimated: boolean;
    currentPersonsImg: string;
    currentPersonsFirstName: string;
    currentPersonsLastName: string;
    currentPersonsProfession: string;
}
interface IPersonsInfo {
    [prop: string]: string;
}
class Home extends React.Component<{}, IState> {
    public state: IState = {
        currentSlideCount: 1,
        isFirstNameAnimated: false,
        isFullNameLineAnimated: false,
        isGreySliderAnimated: false,
        isLastNameAnimated: false,
        isPersonsProfessionAnimated: false,
        isReadMoreAnimated: false,
        currentPersonsImg: "url(/img/girlone.jpg)",
        currentPersonsFirstName: "Ashley",
        currentPersonsLastName: "Burgarn.",
        currentPersonsProfession: "Fasion Designer"
    };

    private throttleSlider: boolean = false;

    constructor(props: {}) {
        super(props);
    }
    public endAnimationOfPersonsInfo = (): void => {
        const time: number = window.setInterval(() => {
            this.setState(() => {
                return {
                    isFirstNameAnimated: false,
                    isFullNameLineAnimated: false,
                    isGreySliderAnimated: false,
                    isLastNameAnimated: false,
                    isPersonsProfessionAnimated: false
                };
            });
            this.throttleSlider = false;
            clearInterval(time);
        }, 1250);
    };
    public renderNextPersonsInfo(nextPersonsInfo: IPersonsInfo): void {
        const timer: number = window.setInterval(() => {
            this.setState(() => {
                return {
                    currentPersonsImg: nextPersonsInfo.picture,
                    currentPersonsFirstName: nextPersonsInfo.firstName,
                    currentPersonsLastName: nextPersonsInfo.lastName,
                    currentPersonsProfession: nextPersonsInfo.profession
                };
            });
            clearInterval(timer);
        }, 320);
    }
    public endAnimationOfReadMore() {
        const timer: number = window.setInterval(() => {
            this.setState(() => {
                return { isReadMoreAnimated: false };
            });
            clearInterval(timer);
        }, 1000);
    }
    public startToAnimatePersonsInfoAndReadMore = (
        slideCount: number
    ): void => {
        this.setState(() => {
            return {
                currentSlideCount: slideCount,
                isFirstNameAnimated: true,
                isFullNameLineAnimated: true,
                isGreySliderAnimated: true,
                isLastNameAnimated: true,
                isPersonsProfessionAnimated: true,
                isReadMoreAnimated: true
            };
        });
    };
    public getNextPersonsInfo = (slideCount: number): IPersonsInfo => {
        const peoplesInfo = [
            {
                picture: "url(/img/girlone.jpg)",
                firstName: "Ashley",
                lastName: "Burgarn.",
                profession: "Fasion Desinger"
            },
            {
                picture: "url(/img/guyone.jpg)",
                firstName: "Adam",
                lastName: "Dooley.",
                profession: "Illustrator"
            },
            {
                picture: "url(/img/girltwo.jpg)",
                firstName: "Verna",
                lastName: "Tilmen.",
                profession: "Jewellery Designer"
            },
            {
                picture: "url(/img/guytwo.jpg)",
                firstName: "Mark",
                lastName: "Dougan.",
                profession: "Graphic Desinger"
            }
        ];

        const nextPersonsInfo: IPersonsInfo = peoplesInfo[slideCount - 1];
        return nextPersonsInfo;
    };
    public getSlideCount(arrowClicked: string | undefined): number | null {
        let slideCount: number = this.state.currentSlideCount;

        if (arrowClicked === "left" && this.state.currentSlideCount === 1) {
            return null;
        } else if (
            arrowClicked === "right" &&
            this.state.currentSlideCount === 4
        ) {
            return null;
        } else if (arrowClicked === "right") {
            slideCount++;
            return slideCount;
        } else {
            slideCount--;
            return slideCount;
        }
    }
    public nextSliderOrPrevSlider = (
        e: React.MouseEvent<HTMLDivElement>
    ): void => {
        const arrowClicked: string | undefined =
            e.currentTarget.dataset.clickArrow;
        const slideCount: number | null = this.getSlideCount(arrowClicked);

        if (this.throttleSlider || slideCount === null) {
            return;
        }

        this.throttleSlider = true;
        const nextPersonsInfo = this.getNextPersonsInfo(slideCount);
        this.startToAnimatePersonsInfoAndReadMore(slideCount);
        this.endAnimationOfReadMore();
        this.renderNextPersonsInfo(nextPersonsInfo);
        this.endAnimationOfPersonsInfo();
    };

    public render(): JSX.Element {
        const details = {
            firstName: {
                class: this.state.isFirstNameAnimated
                    ? "firstname-animation"
                    : " ",
                name: this.state.currentPersonsFirstName
            },
            lastName: {
                class: this.state.isLastNameAnimated
                    ? "lastname-animation"
                    : " ",
                name: this.state.currentPersonsLastName
            },
            fullNameClassLine: this.state.isFullNameLineAnimated
                ? "fullname-line-animate"
                : "fullname-line",
            personsProfession: {
                class: this.state.isPersonsProfessionAnimated
                    ? "persons-profession persons-profession-animate"
                    : "persons-profession",
                name: this.state.currentPersonsProfession
            }
        };

        const readMore = {
            isReadMoreAnimated: this.state.isReadMoreAnimated
                ? "read-more-animate"
                : "read-more",
            isReadMoreLineAnimated: this.state.isReadMoreAnimated
                ? "read-more-line--no-width"
                : "read-more-line"
        };

        return (
            <main className="home">
                <div className="slider-details-links-container">
                    <div className="slider-container">
                        <div className="slider">
                            <div
                                className={
                                    this.state.isGreySliderAnimated
                                        ? "slider-grey-background animate-grey-background"
                                        : "slider-grey-background"
                                }
                            />
                            <div
                                style={{
                                    backgroundImage: this.state
                                        .currentPersonsImg
                                }}
                                className="slider-img-background"
                            />
                        </div>
                        <Details details={details} />
                        <ReadMore readMore={readMore} />
                    </div>
                </div>
                <div className="slider-nav">
                    <div
                        onClick={this.nextSliderOrPrevSlider}
                        data-click-arrow="left"
                        className="slider-left-arrow"
                    >
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
                        onClick={this.nextSliderOrPrevSlider}
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
