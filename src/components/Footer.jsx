import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0"> Copyright {year}. Prakash Kumar Nayak
            </p>
             </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
