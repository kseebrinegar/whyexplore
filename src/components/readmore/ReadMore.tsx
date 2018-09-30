import * as React from "react";
import { Link } from "react-router-dom";

const ReadMore = (props: any): JSX.Element => {
    if (props.readMore) {
        const { isReadMoreAnimated, isReadMoreLineAnimated } = props.readMore;
        return (
            <Link to="/" className={isReadMoreAnimated}>
                <p className="read-more-text">READ MORE</p>
                <p className={isReadMoreLineAnimated} />
            </Link>
        );
    } else {
        return (
            <Link to="/" className="read-more">
                <p className="read-more-text">READ MORE</p>
                <p className="read-more-line" />
            </Link>
        );
    }
};

export default ReadMore;
