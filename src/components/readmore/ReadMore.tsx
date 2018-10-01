import * as React from "react";
import { Link } from "react-router-dom";

interface ISFCDetailsProps {
    readMore: {
        isReadMoreAnimated: string;
        isReadMoreLineAnimated: string;
    };
}

const ReadMore: React.SFC<ISFCDetailsProps> = (props): JSX.Element => {
    const { isReadMoreAnimated, isReadMoreLineAnimated } = props.readMore;
    return (
        <Link to="/" className={isReadMoreAnimated}>
            <p className="read-more-text">READ MORE</p>
            <p className={isReadMoreLineAnimated} />
        </Link>
    );
};

ReadMore.defaultProps = {
    readMore: {
        isReadMoreAnimated: "readmore",
        isReadMoreLineAnimated: "read-more-line"
    }
};

export default ReadMore;
