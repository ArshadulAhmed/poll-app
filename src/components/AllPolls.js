import React from "react";
import { connect } from "react-redux";
import Ratings from "../components/Ratings";

function AllPolls(props) {
    let total_item_liked = [];

    if (props.all_polls.length === 0) {
        return <p>No Polls, Create one</p>;
    }
    if (props.given_points.length > 0) {
        props.given_points.map((item) => {
            if (item.user_id === props.currentUser) {
                total_item_liked.push(item);
            }
            return total_item_liked;
        });
    }
    // 98849 95421
    // console.log("total_item_liked", total_item_liked);

    const all_items = props.all_polls.map((item, index) => (
        <div key={index} className="individual_items">
            <p>{item.dish_name}</p>
            <p>{item.dish_description}</p>
            <p>{item.dish_upload_by_user}</p>
            <Ratings id={item.id} total_item_liked={total_item_liked} />
        </div>
    ));

    return <div className="all_polls_item">{all_items}</div>;
}

function mapStateToProps(state) {
    return {
        currentUser: state.users.currentLoggedInUser.id,
        all_polls: state.allDishes.all_dishes,
        given_points: state.points.points_given,
    };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AllPolls);
