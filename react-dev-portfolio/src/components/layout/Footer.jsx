import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dribbble: Dribbble,
  };

  return (
    <footer className="">
      <div className="">
        <div className="" />
        <div className="" />
      </div>

      <div className="">
        <div className="">
          <FadeIn delay={0}>
            <div>
              <h3 className="">{PERSONAL_INFO.name.split(" ")[0]}</h3>
              <p className="">{PERSONAL_INFO.tagline}</p>

              <div className="">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="">
                  <div className="">
                    <Mail className="" />
                  </div>
                  <span className="">{PERSONAL_INFO.email}</span>
                </a>

                <div className="">
                  <div className="">
                    <MapPin className="" />
                  </div>
                  <span className="">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={300}>
          <div className="">
            <div className="">
              <p className="">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All right
                reserved.
              </p>
              <p className="">
                Built with <Heart className="" /> using React and TailwindCSS.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
