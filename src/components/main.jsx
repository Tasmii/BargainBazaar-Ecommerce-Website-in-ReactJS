import React from "react";

const Home = () => {
  return (
    <div style={{ backgroundColor: '#faf0ca'}}>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
