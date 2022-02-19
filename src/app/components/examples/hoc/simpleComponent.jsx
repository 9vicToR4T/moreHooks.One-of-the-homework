import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    ) : (
        <button className="btn btn-warning" onClick={onLogIn}>
            Log In
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
