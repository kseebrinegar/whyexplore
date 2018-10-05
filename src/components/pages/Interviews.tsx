import * as React from "react";
import * as uuid from "uuid";
import Footer from "../footer";
import InterviewTeaser from "../interviewTeaser/InterviewTeaser";

const interviews = (): JSX.Element => {
    const renderInterviewTeasersList = (): JSX.Element[] => {
        interface IPeoplesDetails {
            firstName: { class: string; name: string };
            lastName: { class: string; name: string };
            fullNameClassLine: string;
            detailsContainerWidthClass: string;
            img: string;
            personsProfession: {
                class: string;
                name: string;
            };
        }

        const peoplesDetails: IPeoplesDetails[] = [
            {
                firstName: { class: "", name: "Ashley" },
                lastName: { class: "", name: "Burgarn." },
                fullNameClassLine: "fullname-line",
                detailsContainerWidthClass: "details-container1",
                img: "/img/girlone.jpg",
                personsProfession: {
                    class: "persons-profession",
                    name: "Fasion Desinger"
                }
            },
            {
                firstName: { class: "", name: "Adam" },
                lastName: { class: "", name: "Dooley." },
                fullNameClassLine: "fullname-line",
                detailsContainerWidthClass: "details-container2",
                img: "/img/guyone.jpg",
                personsProfession: {
                    class: "persons-profession",
                    name: "Illustrator"
                }
            },
            {
                firstName: { class: "", name: "Verna" },
                lastName: { class: "", name: "Tilmen." },
                fullNameClassLine: "fullname-line",
                detailsContainerWidthClass: "details-container3",
                img: "/img/girltwo.jpg",
                personsProfession: {
                    class: "persons-profession",
                    name: "Jewellery Designer"
                }
            },
            {
                firstName: { class: "", name: "Mark" },
                lastName: { class: "", name: "Dougan." },
                fullNameClassLine: "fullname-line",
                detailsContainerWidthClass: "details-container4",
                img: "/img/guytwo.jpg",
                personsProfession: {
                    class: "persons-profession",
                    name: "Graphic Desinger"
                }
            }
        ];

        return peoplesDetails.map(item => {
            return <InterviewTeaser key={uuid()} personsDetails={item} />;
        });
    };

    return (
        <React.Fragment>
            <main className="interviews">
                <div className="main-header-container">
                    <h1>interviews.</h1>
                </div>
                <section className="interviews-container">
                    {renderInterviewTeasersList()}
                </section>
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default interviews;
