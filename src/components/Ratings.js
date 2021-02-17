import React from "react";
import { connect } from "react-redux";
import { givePoint } from "../redux/actions/points";

function Ratings(props) {
    const handlePoint = (value) => {
        props.givePoint(props.currrentUser, props.id, value);
    };
    return (
        <div className="rating_element">
            <p className="point" onClick={() => handlePoint(10)}>
                10 Points
            </p>
            <p className="point" onClick={() => handlePoint(20)}>
                20 Points
            </p>
            <p className="point" onClick={() => handlePoint(30)}>
                30 Points
            </p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currrentUser: state.users.currentLoggedInUser.id,
    };
}

const mapDispatchToProps = { givePoint };
export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
