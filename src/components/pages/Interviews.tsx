import * as React from "react";
import Details from "../details/Details";
import ReadMore from "../readmore/ReadMore";
class Interviews extends React.Component {
    public render() {
        /*const peoplesInfo = [
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
        ];*/

        const details1 = {
            firstName: { class: "", name: "Ashley" },
            lastName: { class: "", name: "Burgarn." },
            fullNameClassLine: "fullname-line",
            personsProfession: {
                class: "persons-profession",
                name: "Fasion Desinger"
            }
        };

        const readMore = {
            isReadMoreAnimated: "read-more",
            isReadMoreLineAnimated: "read-more-line"
        };
        return (
            <main className="interviews">
                <div className="main-header-container">
                    <h1>interviews.</h1>
                </div>
                <section className="interviews-container">
                    <div className="interview-teaser-container">
                        <div className="interview-teaser-img-container">
                            <img src="/img/girlone.jpg" />
                        </div>
                        <div className="interviews-details-and-readmore-container">
                            <div className="details-container1">
                                <Details details={details1} />
                            </div>
                            <ReadMore readMore={readMore} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Interviews;
