import React from "react";
import { Route } from "react-router-dom";
import routeData from "./routeData";

export const routes = (
	<div>
		{
			routeData.map(
				(route) =>  
					<Route exact path= {route.path} component={route.component} />
			)
		}
	</div>
);

