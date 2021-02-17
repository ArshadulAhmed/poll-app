import React from "react";
import { connect } from "react-redux";
import { givePoint } from "../redux/actions/points";

function Ratings(props) {
    const handlePoint = (value) => {
        props.givePoint(props.currrentUser, props.id, value);
    };

    return (
        <div className="rating_element">
            <p
                onClick={() => handlePoint(10)}
                className={
                    props.total_item_liked &&
                    props.total_item_liked.some((item) => {
                        if (
                            item.user_id === props.currrentUser &&
                            item.poll_id === props.id &&
                            item.point === 10
                        ) {
                            return true;
                        }
                    })
                        ? "active"
                        : "non_active"
                }
            >
                10 Points
            </p>
            <p
                onClick={() => handlePoint(20)}
                className={
                    props.total_item_liked.some((item) => {
                        if (
                            item.user_id === props.currrentUser &&
                            item.poll_id === props.id &&
                            item.point === 20
                        ) {
                            return true;
                        }
                    })
                        ? "active"
                        : "non_active"
                }
            >
                20 Points
            </p>
            <p
                onClick={() => handlePoint(30)}
                className={
                    props.total_item_liked.some((item) => {
                        if (
                            item.user_id === props.currrentUser &&
                            item.poll_id === props.id &&
                            item.point === 30
                        ) {
                            return true;
                        }
                    })
                        ? "active"
                        : "non_active"
                }
            >
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
