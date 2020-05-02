import React from "react";
import Login from "./view/login/login";
// import {Button} from 'antd'
import "antd/dist/antd.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
	return (
		<Router>
			<Switch>
				<Route
					path="/home"
					render={() => {
						return <h1>home page</h1>;
					}}
				/>
        <Route path="/login" render={()=><h1>Login</h1>}/>
				<Route render={() => <h1>没有匹配的</h1>} />
			</Switch>
		</Router>
	);
}

export default App;
