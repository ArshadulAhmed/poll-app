import React from "react";
import { connect } from "react-redux";
import Ratings from "../components/Ratings";

function AllPolls(props) {
    if (props.all_polls.length === 0) {
        return <p>No Polls, Create one</p>;
    }

    const all_items = props.all_polls.map((item, index) => (
        <div key={index} className="individual_items">
            <p>{item.dish_name}</p>
            <p>{item.dish_description}</p>
            <p>{item.dish_upload_by_user}</p>
            <Ratings />
        </div>
    ));

    return <div className="all_polls_item">{all_items}</div>;
}

function mapStateToProps(state) {
    return {
        all_polls: state.allDishes.all_dishes,
    };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AllPolls);
