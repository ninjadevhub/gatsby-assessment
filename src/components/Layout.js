import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavbarSection";
import FooterSection from "./FooterSection";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
    <div className="md:mt-[100px] mt-[26px]">
      <FooterSection />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
