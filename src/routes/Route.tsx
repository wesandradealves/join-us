import React, { useContext } from 'react';

import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
	component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
	component: Component,
	...rest
}) => {
	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
				return <Component />;
			}}
		/>
	);
};

export default Route;
