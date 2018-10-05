import * as React from "react";

const Footer: React.SFC = (props): JSX.Element => {
    return (
        <footer>
            <p className="copyright">
                Copyright © 2018 Institute of Designers in Ireland. All rights
                reserved.
            </p>
            <div className="social-media-icons">
                <i className="fab fa-fw fa-twitter" />
                <i className="fab fa-fw fa-linkedin-in" />
                <i className="fab fa-fw fa-instagram" />
                <i className="fab fa-fw fa-facebook-f" />
            </div>
        </footer>
    );
};

export default Footer;
