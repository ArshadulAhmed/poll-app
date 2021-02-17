import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

import "../assets/mainLayout.css";

function MainLayout(props) {
    let history = useHistory();
    console.log(
        "Object.keys(props.currrentUser).length",
        Object.keys(props.currrentUser).length
    );
    if (Object.keys(props.currrentUser).length <= 0) {
        history.push("/login/");
    }

    return (
        <div>
            <Header></Header>
            {props.children}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currrentUser: state.users.currentLoggedInUser,
    };
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
