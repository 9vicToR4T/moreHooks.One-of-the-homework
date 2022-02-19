import React from "react";
import CardWrapper from "../../common/Card";
const withPropsStyles = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogIn = () => {
        console.log("Log In");
    };
    const handleLogOut = () => {
        console.log("Log Out");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                name="new Name"
            />
        </CardWrapper>
    );
};

export default withPropsStyles;
