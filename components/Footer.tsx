import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with 💖 by{" "}
        <Link href="https://github.com/Qreamville" target="_blank">
          Balikis
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
