import React from "react";
import { connect } from "react-redux";
function HomePage(props) {
    return (
        <div className="home_page">
            <p>Home Page</p>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
