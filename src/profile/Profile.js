import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const Profile = ({ props, children, handleClick }) => {
  return (
    <div className="card" style={myStyle}>
      <h3 className="card-header" style={{ color: "blue" }}>
        GASMI SONDES <span style={{ marginLeft: 300 }}>{children}</span>
      </h3>
      <div className="card-body">
        <h5 className="card-title">Full-stack Web Developer </h5>
        <p className="card-text">
          I design and code beautifully simple things,and I love what I do.In
          addition to my engineering training in communications and networks, I
          wanted to enhance my skills and knowledge by full-stack formation
          within Go my code.
        </p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            handleClick("GASMI SONDES");
          }}
        >
          It's me
        </a>
      </div>
    </div>
  );
};
children.propTypes = { children: PropTypes.object.isRequired };
Profile.defaultProps = { children: "Hi it's me" };
const myStyle = { width: "50vw", marginLeft: 300 };

export default Profile;
