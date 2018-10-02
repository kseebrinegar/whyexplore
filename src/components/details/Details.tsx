import * as React from "react";

interface ISFCDetailsProps {
    details: {
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
        };
    };
}

const details: React.SFC<ISFCDetailsProps> = (props): JSX.Element => {
    if (props.details) {
        const {
            firstName,
            lastName,
            fullNameClassLine,
            personsProfession
        } = props.details;

        return (
            <div className="details">
                <div className="fullname">
                    <div className="firstname">
                        <p className={firstName.class}>{firstName.name}</p>
                    </div>
                    <div className="lastname">
                        <p className={lastName.class}>{lastName.name}</p>
                    </div>
                    <div className={fullNameClassLine} />
                </div>
                <p className={personsProfession.class}>
                    {personsProfession.name}
                </p>
            </div>
        );
    } else {
        return (
            <p style={{ color: "white" }} className="persons-profession">
                Interviews
            </p>
        );
    }
};

export default details;
