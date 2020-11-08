import styled, { css } from 'styled-components';

interface featureBoxProps {
    featuredThumbnail?: string;
    isTiny?: boolean;
    flex?: any;
}

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-bottom: 8px;
    position: relative;
    @media only screen and (max-width: 1024px) {
    	padding-bottom: 0;
    	padding-left: 0;
    	margin-left: 19px;
    }
    cursor: pointer;
`; 

export const Counter = styled.p`
    padding-left: 4px;
    font-size: .9rem;
    color: #686868;
    @media only screen and (max-width: 1024px) {
		position: absolute;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		align-items: center;
		z-index: -1;
	}		    
`; 

export const CartBox = styled.div`
	position: fixed;
	top: 0;
	z-index: 998;
	right: 0;
	background-color: white;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.6);
	.cartBoxInner {
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		max-width: 477px;
		background-color: white;
		padding: 20px 40px 0;
		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
		.close {
			position: absolute;
			top: 0;
			right: 0;
			margin: 16px;
			background: none;	
			cursor: pointer;		
		}		
	    .btn {
	        color: white;
	        font-weight: 300;
	        text-transform: uppercase;
	        text-align: center;
	        font-size: .8rem;
	        background-color: #32917B;
	        width: 100%;
			&:not(.--cancel) {
				background-color: #32917B!important
			}    
	        &[disabled] {
	        	background-color: lightgray !important;
	        	color: gray;
	        }			    
	        [class*="label"] {
	            line-height: 2.5;
	        }
	        &.--cancel {
	        	background-color: transparent;
	        	color: #AEB6C1;
	        	text-decoration: underline;
	        	text-transform: initial;
	        	font-size: .9rem;
	        	line-height: 2;
	        }
	    }    		
	}
`; 

export const CartBoxHeader = styled.h3`
	font-weight: 300;
	font-size: 1.4rem;
	color: #DE8F75;
	text-transform: uppercase;
	flex: 0 0 auto;
`; 

export const CartBoxCounter = styled.small`
	display: block;
	font-size: 70%;
	color: #AEB6C1;
	text-transform: initial;
`; 

export const CartBoxFooter = styled.div`
	flex: 0 0 auto;
	margin: 0 -40px;
`; 

export const CartBoxContent = styled.div`
	flex: 1;
	display: block;
	overflow: hidden;
	margin: 0 -40px;
`; 


export const CartBoxFooterHead = styled.h4`
	background-color: #AEB6C1;
	font-weight: 300;
	font-size: .85rem;
	color: white;
	text-align: center;
	padding: 10px 30px;
`; 


export const CartBoxFooterContent = styled.div`
	padding: 25px 30px;
	background: #E3E3E3;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
`; 


export const CartBoxFooterContentTotal = styled.p`
	flex: 0 0 auto;
	padding-right: 38px;
	font-weight: bold;
	font-size: .9rem;
	& + * {
		flex: 1;
	}
`; 

export const CartBoxFooterContentInstallments = styled.small`
	font-size: 70%;
	font-weight: 400;
	display: block;
`; 


export const CartList = styled.ul`
	width: 100%;
	overflow: auto;
	height: 100%;
	padding: 25px 25px 85px;
	border-top: 1px #E3E3E3 solid;
	margin: 11px auto 0;
	> p {
		color: #DE8F75;
		font-size: .9rem;
		text-align: center;
	}		
`; 


export const CartItem = styled.li`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 26px
	}
`; 

export const Col = styled.div<featureBoxProps>`
	flex: ${({ flex }) => (flex ? flex : '0 0 auto')};
	&.quantity {
		padding: 0 40px;
	}
`; 

export const ProductThumbnail = styled.div<featureBoxProps>`
    ${({ featuredThumbnail }) =>
    featuredThumbnail &&
    css`
        background: url(/static/${featuredThumbnail}) center center / cover no-repeat;
    `}  
    padding: 0 0 15%;
    display: block;    
    width: 100%;
    flex: 0 0 auto;
    width: 46px;
`;

export const Price = styled.p`
	font-weight: bold;
	font-size: 1rem;
	padding: 5px 40px 0;
`;

export const ProductTitle = styled.h3`
	font-size: .8rem;
	font-weight: 400;
	padding: 0 40px;
`;

export const Remove = styled.button`
	cursor: pointer;
	img {
		height: 9px;
	}
	background: transparent;
`;

export const Quantity = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
`;

export const Qti = styled.p`
	padding: 0 15px;
	font-size: 1rem;
	font-weight: 300;
`;

export const Control = styled.button`
	background-color: transparent;
	font-size: 30px;
	font-weight: bold;
	color: #5F75AA;
`;
