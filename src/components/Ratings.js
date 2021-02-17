import React from "react";
import { connect } from "react-redux";

function Ratings() {
    return <div className="rating_element">Ratings</div>;
}

function mapStateToProps(state) {
    return {
        all_polls: state.allDishes.all_dishes,
    };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
