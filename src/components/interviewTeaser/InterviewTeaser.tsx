import * as React from "react";
import Details from "../details/Details";
import ReadMore from "../readmore/ReadMore";

interface ISFCInterviewTeaserProps {
    personsDetails: {
        firstName: { class: string; name: string };
        lastName: { class: string; name: string };
        fullNameClassLine: string;
        detailsContainerWidthClass: string;
        img: string;
        personsProfession: {
            class: string;
            name: string;
        };
    };
}

const interviewTeaser: React.SFC<ISFCInterviewTeaserProps> = (
    props
): JSX.Element => {
    const readMore: {
        isReadMoreAnimated: string;
        isReadMoreLineAnimated: string;
    } = {
        isReadMoreAnimated: "read-more",
        isReadMoreLineAnimated: "read-more-line"
    };

    const {
        firstName,
        lastName,
        fullNameClassLine,
        detailsContainerWidthClass,
        img,
        personsProfession
    } = props.personsDetails;

    return (
        <div className="interview-teaser">
            <div className="interview-teaser-img-container">
                <img src={img} />
            </div>
            <div className="interviews-details-and-readmore-outer-container">
                <div className="interviews-details-and-readmore-inner-container">
                    <div
                        className={`details-container ${detailsContainerWidthClass}`}
                    >
                        <Details
                            details={{
                                firstName,
                                lastName,
                                fullNameClassLine,
                                personsProfession
                            }}
                        />
                    </div>
                    <ReadMore readMore={readMore} />
                </div>
            </div>
        </div>
    );
};

export default interviewTeaser;
