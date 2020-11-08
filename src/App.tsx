import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Context from './context/';

export default function App() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [cart, setCart] = useState<any>([]);
	const storedProductCart = localStorage.getItem('productCart');

	useEffect(() => {
	  if(storedProductCart) {
	  	setCart(JSON.parse(storedProductCart));
	  }
	}, []);  

	return (
		<Context.Provider value={{
			products: products,
			setProducts,
			categories: categories,
			setCategories,		
			cart: cart,
			setCart,						
		}}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
		</Context.Provider>
	);
}
