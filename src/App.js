import { connect } from "react-redux";
import "./App.scss";

const App = ({ state }) => {
    console.log("store from App: ", state);

    return (
        <div className="App">
            <h1>Hello from App</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        state,
    };
}

export default connect(mapStateToProps)(App);
