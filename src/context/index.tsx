import React from "react";

interface IContextProps {
	products?: any;
	setProducts?: any;
	categories?: any;
	setCategories?: any;		
	cart?: any;
	setCart?: any;	
	dispatch?: ({type}:{type:string}) => void;
}

const Context = React.createContext({} as IContextProps);

export default Context;