import React from "react";
import { connect } from "react-redux";

function ResultPage(props) {
    return (
        <React.Fragment>
            <h1>Result Page</h1>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
