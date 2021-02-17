import React, { useState } from "react";
import { connect } from "react-redux";
import AllPolls from "../components/AllPolls";
import CreatePoll from "../components/CreatePoll";
function HomePage(props) {
    const [currentTab, setCurrentTab] = useState("view_all");
    const handleCompSwith = (value) => {
        if (currentTab !== value) {
            setCurrentTab(value);
        }
    };
    return (
        <div className="home_page">
            <div className="poll_items">
                <p
                    onClick={() => handleCompSwith("create_poll")}
                    className={
                        currentTab === "create_poll"
                            ? "active_tab"
                            : "inactive_tab"
                    }
                >
                    Create your Poll
                </p>
                <p
                    onClick={() => handleCompSwith("view_all")}
                    className={
                        currentTab === "view_all"
                            ? "active_tab"
                            : "inactive_tab"
                    }
                >
                    All Polls
                </p>
            </div>
            <div className="all_polls">
                {currentTab === "view_all" ? <AllPolls /> : <CreatePoll />}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
