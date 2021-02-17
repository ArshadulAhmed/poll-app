import React from "react";
import { connect } from "react-redux";

import "../assets/mainLayout.css";

function MainLayout(props) {
    return <div>{props.children}</div>;
}

function mapStateToProps(state) {
    return {};
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
