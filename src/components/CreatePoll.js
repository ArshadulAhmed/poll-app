import React, { useState } from "react";
import { connect } from "react-redux";
import { submitDish } from "../redux/actions/submitDish";

function CreatePoll(props) {
    const [error, setError] = useState(null);

    const handleDishSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (
            data.get("dish_name").trim() === "" ||
            data.get("dish_description").trim() === ""
        ) {
            setError("Please fill the fields");
        } else {
            setError(null);
            if (props.dish_upload_by) {
                props.submitDish(
                    data.get("dish_name").trim(),
                    data.get("dish_description").trim(),
                    props.dish_upload_by.id,
                    props.dish_upload_by.username
                );
            } else {
                setError("Please login to start upload...");
            }
        }
    };
    return (
        <div className="create_poll">
            <form onSubmit={handleDishSubmit}>
                <input
                    type="text"
                    placeholder="Enter Dish Name"
                    name="dish_name"
                />
                <textarea
                    placeholder="Item Description"
                    rows="3"
                    name="dish_description"
                />
                <input type="file" name="dish_image" />
                <button type="submit">Submit Dish</button>
                {error ? <p className="error">{error}</p> : null}
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        dish_upload_by:
            state.users.currentLoggedInUser && state.users.currentLoggedInUser,
    };
}

const mapDispatchToProps = { submitDish };
export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll);
