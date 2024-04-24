import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center" style={{ backgroundColor: '#faf0ca'}}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6 pb-2">
            <a className="text-dark fs-4 mx-3" href="https://github.com/Tasmii" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 mx-3" href="https://twitter.com/your_twitter_handle" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="text-dark fs-4 mx-3" href="https://www.linkedin.com/in/tasmiyailahi/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-muted pb-1">
          <p>&copy; {new Date().getFullYear()} Bargain Bazaar. All rights reserved.</p>
          <p>Contact us: <a href="mailto:contact@bargainbazaar.com">contact@bargainbazaar.com</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;