import * as React from "react";

interface ISFCDetailsProps {
    details: any;
    /*[prop: string]: { class: string, name: string } | string
        firstName: {
            class: string;
            name: string;
        };
        lastName: {
            class: string;
            name: string;
        };
        fullNameClassLine: string;
        personsProfession: {
            class: string;
            name: string;
        };*/
}

const details: React.SFC<ISFCDetailsProps> = (props): JSX.Element => {
    const {
        firstName,
        lastName,
        fullNameClassLine,
        personsProfession
    } = props.details;

    const isInterViewParaShown = (): JSX.Element | null => {
        if (!personsProfession) {
            return (
                <p style={{ color: "white" }} className="persons-profession">
                    Interviews
                </p>
            );
        }

        return null;
    };

    const isPersonsProfessionShown = (): JSX.Element | null => {
        if (personsProfession) {
            return (
                <p className={personsProfession.class}>
                    {personsProfession.name}
                </p>
            );
        }

        return null;
    };

    return (
        <div className="details">
            {isInterViewParaShown()}
            <div className="fullname">
                <div className="firstname">
                    <p className={firstName.class}>{firstName.name}</p>
                </div>
                <div className="lastname">
                    <p className={lastName.class}>{lastName.name}</p>
                </div>
                <div className={fullNameClassLine} />
            </div>
            {isPersonsProfessionShown()}
        </div>
    );
};

export default details;
