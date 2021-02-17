import React from "react";
import { connect } from "react-redux";
import { authLogin } from "../redux/actions/users";
import { useHistory } from "react-router-dom";

function Login(props) {
    const [error, setError] = React.useState(null);
    let history = useHistory();
    const handleLogin = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (
            data.get("username").trim() === "" ||
            data.get("password").trim() === ""
        ) {
            setError("Please fill the fields");
        } else {
            setError(null);
            props.authLogin(
                data.get("username").trim(),
                data.get("password").trim()
            );
        }
    };

    if (Object.keys(props.currrentUser).length > 0) {
        history.push("/");
    }

    return (
        <div className="login_main">
            <form onSubmit={handleLogin} className="login_form">
                <p className="pageTitle">Login</p>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    autoComplete="off"
                />
                <button type="submit" className="button_common">
                    Login now
                </button>
                {error ? (
                    <p className="error">Please fill both the fields</p>
                ) : null}
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currrentUser: state.users.currentLoggedInUser,
    };
}

const mapDispatchToProps = {
    authLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
