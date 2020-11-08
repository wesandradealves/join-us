import React, { useEffect, useContext, useState, InputHTMLAttributes } from 'react';

import { Button } from '@material-ui/core';

import close from '../../assets/close.svg';

import {
  Link,
} from "react-router-dom";

import {
  Col,
  ProductThumbnail,
  CartItem,
  CartList,
  CartBoxFooterHead,
  CartBoxFooterContent,
  CartBoxFooterContentTotal,
  CartBoxFooterContentInstallments,
  CartBoxFooter,
  CartBoxContent,
  CartBoxCounter,
  CartBox,
  CartBoxHeader,
  Counter,
  Container,
  Price,
  Remove,
  ProductTitle,
  Quantity,
  Qti,
  Control,
} from './Cart.styles';

import cart from '../../assets/cart.svg';
import bag from '../../assets/bag2.svg';

import Context from '../../context/';

interface ICart extends InputHTMLAttributes<HTMLInputElement> {
  cartItems?: any;
}

export const Cart: React.FC<ICart> = ({ cartItems }) => {
  const store = useContext(Context);

  var [isExpanded, expandCart] = useState<boolean>(false);
  var [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const removeItem = (id) => {
	store.setCart(store.cart.filter((item:any) => {
		return item.id !== id;
	}));	

	localStorage.setItem('productCart', JSON.stringify(store.cart.filter((item:any) => {
		return item.id !== id;
	})));	
  };  

  const renderTotal = (installment) => {
	class CartCollection extends Array {
	    sum(key) {
	        return this.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0);
	    }
	}
	const productsAmount = new CartCollection(...store.cart);	
	return !installment ? productsAmount.sum('price').toFixed(2) : (productsAmount.sum('price').toFixed(2)/installment).toFixed(2);
  };    

  const handleResize = () => {
  	setWindowWidth(window.innerWidth);
  	return window.innerWidth;
  };     

  const handleQuantity = (str, id) => {
  	let current = store.cart.filter((item:any) => {
		return item.id === id;
	}).map(function(o:any, index:any) {
        return {
        	...o,
        	qti: str === '-' ? o.qti > 1 ? o.qti-=1 : o.qti : o.qti+=1
        };
    })[0];

    let cart = store.cart.map(function(item) { return item.id == id ? current : item; });

	store.setCart(cart);	

	localStorage.setItem('productCart', JSON.stringify(cart));	

  };        

  useEffect(() => {
  	window.addEventListener('resize', handleResize);
  }, []);   


  const renderCartList = () => {
    return  <CartList>
	    {store.cart.length ? <>
			{store.cart.map((o:any, index:number) => (
			  <CartItem key={index}>
			  	<ProductThumbnail className="featuredThumbnail" featuredThumbnail={o.thumbnail} />
			  	<Col flex={1}> 
			  		<ProductTitle className="productTitle">{o.name}</ProductTitle>
			  		<Price>R$ {o.price}</Price>
			  	</Col>
			  	<Col className="quantity"> 
			  		<Quantity> 
			  			<Control disabled={o.qti === 1} onClick={() => {handleQuantity('-', o.id)}}>-</Control>
			  			<Qti>{o.qti}</Qti>
			  			<Control onClick={() => {handleQuantity('+', o.id)}}>+</Control>
			  		</Quantity>
			  	</Col>
			  	<Col> 
			  		<Remove onClick={() => {removeItem(o.id)}}> 
			  			<img src={close}/>
			  		</Remove>
			  	</Col>
			  </CartItem>  
			))}	    	
	    </> : <p>Seu carrinho está vazio! :(</p>}
	    </CartList>;
  };        

  return (
    <Container>
      <img onClick={() => {expandCart(!isExpanded)}} src={windowWidth > 1024 ? cart : bag} />
      <Counter>{store.cart.length}</Counter>
      {isExpanded ? (      
      <CartBox>
      	<div className="cartBoxInner"> 
      		<button onClick={() => {expandCart(!isExpanded)}} className="close"><img src={close}/></button>
	      	<CartBoxHeader> 
	      		Sacola
	      		<CartBoxCounter>{store.cart.length} item(s)</CartBoxCounter>
	      	</CartBoxHeader>
	      	<CartBoxContent> 
	      		{renderCartList()}
	      	</CartBoxContent>
	      	<CartBoxFooter>
	      		<CartBoxFooterHead>Faltam R$ xx,xx para você <strong>Ganhar Frete Grátis</strong></CartBoxFooterHead>
	      		<CartBoxFooterContent> 
	      			<CartBoxFooterContentTotal>
	      				Total: R$ {renderTotal(1)}
	      				{store.cart.length ? <CartBoxFooterContentInstallments>até 3x de R$ {renderTotal(3)} sem juros</CartBoxFooterContentInstallments> : null}
	      			</CartBoxFooterContentTotal>
	      			<span> 
	      				<Button disabled={!store.cart.length} onClick={() => {expandCart(!isExpanded)}} className="btn">Finalizar compra</Button>
	      			</span>
	      		</CartBoxFooterContent>
	      	</CartBoxFooter>
      	</div>
      </CartBox>
      ) : null}
    </Container>
  );
};
