import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
    const handleLogout = () => {
        console.log("handleLogout");
    };
    if (Object.keys(props.currrentUser).length <= 0) {
        return null;
    }
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/view-results/">Poll Results</Link>
            <p onClick={handleLogout}>Logout</p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currrentUser: state.users.currentLoggedInUser,
    };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
