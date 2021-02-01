import React from "react";
import "./styles.css";
interface NavigationLink {
    path: string;
    text: string;
}
interface SocialLink extends NavigationLink {
    icon: string;
}
interface Props {
    logo: SVGElement | JSX.Element;
    menuLinks: NavigationLink[];
    socialLinks: SocialLink[];
}
declare const HeaderNavigation: React.FC<Props>;
export default HeaderNavigation;
