import React from "react";
import miniLogo from "../assets/logo-zar-digital-raz-04.svg";

export const Footer = () => {
  return (
    <footer className="gradient-bg">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img src={miniLogo} className="h-24 me-3" alt="FlowBite Logo" />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              RAZ Digital Consulting™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
