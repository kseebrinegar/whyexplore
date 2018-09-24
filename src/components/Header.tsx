import * as React from "react";
import { Link } from "react-router-dom";
import * as uuid from "uuid";

interface IState {
    [prop: string]: boolean;
}
class Header extends React.Component<{}, IState> {
    public state: IState = {
        isSiteNavOpen: false
    };
    constructor(props: {}) {
        super(props);
    }
    public toggleSiteNav = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(prevState => {
            return {
                isSiteNavOpen: prevState.isSiteNavOpen === true ? false : true
            };
        });
    };
    public renderNavList() {
        const navListItems = [
            {
                className:
                    this.state.isSiteNavOpen === true
                        ? "site-nav-list-item-link navLinkAnimateHome"
                        : "site-nav-list-item-link",
                linkName: "HOME",
                url: "/"
            },
            {
                className:
                    this.state.isSiteNavOpen === true
                        ? "site-nav-list-item-link navLinkAnimateInterviews"
                        : "site-nav-list-item-link",
                linkName: "INTERVIEWS",
                url: "/interviews"
            },
            {
                className:
                    this.state.isSiteNavOpen === true
                        ? "site-nav-list-item-link navLinkAnimateCourses"
                        : "site-nav-list-item-link",
                linkName: "COURSES",
                url: "/courses"
            },
            {
                className:
                    this.state.isSiteNavOpen === true
                        ? "site-nav-list-item-link navLinkAnimateAbout"
                        : "site-nav-list-item-link",
                linkName: "ABOUT",
                url: "/about"
            }
        ];

        return (
            <ul className="site-nav-list-items">
                {navListItems.map(itemName => {
                    return (
                        <Link
                            to={itemName.url}
                            className={itemName.className}
                            key={uuid()}
                        >
                            <div className="site-nav-list-item-line" />
                            <li className="site-nav-list-item">
                                {itemName.linkName}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        );
    }
    public render() {
        type Styles = Record<
            "button" | "imgBlack" | "imgWhite" | "siteNav",
            React.CSSProperties
        >;

        const styles: Styles = {
            button: {
                color: this.state.isSiteNavOpen ? "white" : "black",
                transitionDelay: this.state.isSiteNavOpen ? "0.05s" : "0.35s"
            },
            imgBlack: {
                transitionDelay: this.state.isSiteNavOpen ? "0.35s" : "0.1s",
                visibility: this.state.isSiteNavOpen ? "hidden" : "visible"
            },
            imgWhite: {
                transitionDelay: this.state.isSiteNavOpen ? "0.35s" : "0.1s",
                visibility: this.state.isSiteNavOpen ? "visible" : "hidden"
            },
            siteNav: { left: this.state.isSiteNavOpen ? "0%" : "100%" }
        };

        return (
            <div className="header">
                <Link
                    className="why-explore-black-img"
                    style={styles.imgBlack}
                    to={"/"}
                >
                    <img src="/img/why-explore-black.png" />
                </Link>

                <Link
                    className="why-explore-white-img"
                    style={styles.imgWhite}
                    to={"/"}
                >
                    <img src="/img/p.png" />
                </Link>

                <div className="menu-open-and-close-container">
                    <button onClick={this.toggleSiteNav} style={styles.button}>
                        MENU
                    </button>
                </div>
                <nav className="site-nav" style={styles.siteNav}>
                    <ul>{this.renderNavList()}</ul>
                </nav>
            </div>
        );
    }
}

export default Header;
