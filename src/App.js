import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "./mainLayout/MainLayout";
import BaseRoutes from "./routing/BaseRoutes";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store/store";
import "./assets/mainLayout.css";

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <MainLayout>
                            <BaseRoutes />
                        </MainLayout>
                    </Router>
                </PersistGate>
            </Provider>
        </React.Fragment>
    );
}

export default App;
