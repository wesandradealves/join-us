import styled, { css } from 'styled-components';

interface featureBoxProps {
    active?: boolean;
    backgroundColor?: any;
    background?: any;
    featuredThumbnail?: string;
    hasPromo?: boolean;
    isTiny?: boolean;
    isRotated?: boolean;
}

export const Container = styled.div`
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: stretch;
    }
    .videoLightboxWrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        > div {
            background-color: rgba(255,255,255,.8) !important;
            >svg {
                &:first-of-type {
                    g {
                        path {
                            fill: #5F75AA
                        }
                    }
                }
            }
        }
    }
    .btn {
        color: white;
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        font-size: 1rem;
        margin: 30px auto 20px;
        background-color: #32917B;
        width: 100%;
        border-radius: 3px;
		&:not(.--cancel) {
			background-color: #32917B!important
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
`;

export const Gallery = styled.div`
    display: flex;
    overflow: hidden;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    width: calc(444px + 82px);
    flex: 0 0 auto;
    height: 470px;
    position: relative;
	@media only screen and (max-width: 1136px) {
		flex: 1;
		@media only screen and (max-width: 1024px) {
			flex: 0 0 auto;
			width: 100%;
		}
	}    
    > * {
        height: 100%;
        flex: 0 0 auto;
        order: 1;
        overflow: hidden;
        &:first-child {
            flex: 1;
            order: 2;           
        }
        &:last-child {
            width: 82px;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            flex-flow: column;
            @media only screen and (max-width: 1024px) {
            	position: absolute;
            	width: 100%;
            	padding: 0;
            	flex-flow: row wrap;
            	justify-content: center;
            	align-items: flex-end;
            	padding-left: 35px;
            	padding-right: 23px;
            }
            > * {
                flex: 0 0 auto;
            }
            h3 {
                font-weight: 400;
                font-size: .7rem;
                color: #DE8F75;
                text-align: center;
                @media only screen and (max-width: 1024px) {
                	display: none;
                }
            }
            [class*="dots"] {
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                padding-top: 25px;
                @media only screen and (max-width: 1024px) {
                	flex-flow: row wrap;
                	align-items: center;
                	justify-content: flex-end;
                	padding-top: 0;	
                	padding-bottom: 27px;
                }
                > * {
                    width: 100%;
                    flex: 1;
                    overflow: hidden;
                    @media only screen and (max-width: 1024px) {
                    	height: 12px;
                    	width: 12px;
                    	flex: 0 0 auto;
                    	margin: 0 15px;
                    	overflow: hidden;
                    }
                    &:not(:last-child) {
                        padding-bottom: 10px;
                        @media only screen and (max-width: 1024px) {
                        	padding: 0;
                        }
                    }
                    button {
                        height: 100%;
                        overflow: hidden;
                        padding: 0;
                        width: inherit;
                        img {
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            @media only screen and (max-width: 1024px) {
                            	display: none;
                            }
                        }    
                        @media only screen and (max-width: 1024px) {
	                    	border: 2px white solid;
	                    	border-radius: 999px;
	                    	opacity: 1;                        
	                        &[class*="selected"] {
	                        	background-color: #DE8F75;
	                        	border: 2px #DE8F75 solid;
	                        } 
                        }           
                    }
                }
            }             
        }
        &.BrainhubCarousel__container {
            padding-left: 56px;
            @media only screen and (max-width: 1024px) {
            	padding-left: 0
            }
            img {
                width: 100%;
            }
            * {
                height: 100%;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }                   
            }
        }
    }
`;

export const InformationBox = styled.div`
    flex: 1;
    &:not(:first-child) {
        padding-left: 100px;
        @media only screen and (max-width: 1136px) {
        	padding-left: 60px;
        	@media only screen and (max-width: 1024px) {
        		padding-top: 60px;
        		padding-left: 0;
        		width: 100%;
        		flex: 0 0 auto;
        	}
        }
    }
    .informationBoxInner {
        border: 2px solid #D2E1DF;
        padding: 20px;
        min-height: 100%;
        > * {
            width: 100%;
            @media only screen and (max-width: 1024px) {
            	&:nth-child(1) {
            		order: 3;
            		flex: 0 0 auto;
            		width: 50%;          
            		padding: 0;  		
            	}
            	&:nth-child(2) {
            		order: 1;
            	}           
            	&:nth-child(3) {
            		order: 2;
            	}           
            	&:nth-child(4) {
            		order: 4;
            		flex: 0 0 auto;
            		width: 50%;
            		margin: 0;
            		[class*="label"] {
	            		line-height: 1.2;
            		}
            	}
            	&:nth-child(5) {
            		order: 5;
            	}    
            	&:nth-child(6) {
            		order: 6;
            	}            	        	
            }
        }
        @media only screen and (max-width: 1024px) {
        	display: flex;
        	flex-flow: row wrap;
        	align-items: center;
			border: 0;
			padding: 0;        	
        }
    }
`;

export const ProductTitle = styled.h2`
    font-size: 1.5rem;
    text-transform: uppercase;
    &.mainTitle {
    	text-align: center;
    	color: #DE8F75;
    	font-weight: 400;
    	small {
    		font-size: 70%;
    		color: #7F7F7F;
	    	margin: 5px auto 15px;
    	}
    }
`;

export const Code = styled.small`
    display: block;
    font-size: .8rem;
    font-weight: 400;
`;

export const PriceBox = styled.div<featureBoxProps>`
    padding: 14px 0 34px;
    p {
        display: inline-block;
        vertical-align: baseline;
        padding-right: 6px;
        margin-right: 6px;
        font-size: 1.1rem;
        color: #686868;
        font-weight: bold;
        ${({ hasPromo }) =>
        hasPromo &&
        css`
            &:first-of-type {
                text-decoration: line-through;
                color: #E35442;
                border-right: 1px #E35442 solid;
                line-height: .8;
                font-size: .8rem;
                font-weight: 400;
                @media only screen and (max-width: 1024px) {
                	display: block;
                	border-right: 0;	
                }
            }
        `}         
    }     
`;

export const Price = styled.p`

`;

export const Promo = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: #686868;
    text-decoration: initial;
`;

export const Installments = styled.ul`

`;

export const Installment = styled.li`
    font-size: .7rem;
    font-weight: 400;
    color: #7F7F7F
`;

export const FeatureBox = styled.div`
    margin-bottom: 30px;
    padding-right: 58px;
    label {
        font-size: .8rem;
        font-weight: 400;
        margin-bottom: 10px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        width: 100%;
        span {
            color: #5F75AA;
            margin-left: 10px;
        }
        > button {
            margin-left: auto;
            color: #DE8F75;
            text-decoration: underline;
            background: none;
            justify-self: flex-end;
            font-size: .8rem;
            cursor: pointer;
        }
    }
`;

export const Description = styled.p`
    font-size: .8rem;
    line-height: 1.8;
    span {
    	display: block;
    	color: #E0967E;
    	font-weight: 300;
    }
`;

export const FeatureItem = styled.li<featureBoxProps>`
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
    cursor: pointer;
    &.size {
        border: 1px whitesmoke solid;
        height: 28px;
        width: 28px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        font-size: .7rem;
        color: #5F75AA;
        &.active {
            color: white;
            background-color: #DE8F75;
        }
        &:not(:last-child) {
            margin-right: 3px;
        }             
    }
    &.color {
        height: ${({ isTiny }) => (isTiny ? '13px' : '22px')};
        width: ${({ isTiny }) => (isTiny ? '13px' : '22px')};
        border-radius: 999px;
        transition: 500ms ease box-shadow;
        &.active {
            box-shadow: inset 0px 0px 0px 1px white, 0px 0px 0px 2px #DE8F75;
        }
        &:not(:last-child) {
            margin-right: 15px;
        }    
    }    
`;


export const FeatureItems = styled.ul`
    display: flex;
    flex-flow: row;
    align-items: stretch;
`;

export const TriggerVideo = styled.button`
    cursor: pointer;
    > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
        opacity: .3;
        @media only screen and (max-width: 1024px) {
        	display: none;
        }        
    }
    overflow: hidden;
    height: 45px;
    margin: 7px 0 10px;
    position: relative;
    > i {
        position: absolute;
        top: calc(50% - 36px/2);
        left: calc(50% - 36px/2);
        z-index: 2;
    }
	z-index: 1;
	@media only screen and (max-width: 1024px) {
		background-color: transparent;
		width: 75px;
	}
`;

export const PlayIco = styled.i`
`;

export const RelatedProducts = styled.div`
    width: 100%;
    padding-top: 104px;
	@media only screen and (max-width: 1024px) {
		padding-top: 36px;
	}    
    h4 {
        color: #DE8F75;
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 17px;
        text-align: center;
        font-size: 1.7rem;
    }
    [role="listbox"] {
    	margin: 0 -6.5px
    }
`;

export const ProductCard = styled.div`
    overflow: hidden;
    > a{
    	padding: 0 6.5px;
    	display: block;
    }
    @media only screen and (max-width: 1024px) {
    	.featuredThumbnail {
	    	padding: 0 0 120%;
	    	height: auto;
    	}
    }
`;


export const CardInfoBox = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	padding: 5px 0;
	p {
		font-size: .9rem;
	}
	.featureBox {
		padding-right: 0;
		margin-bottom: 0;
		.color {
			&:not(:last-child) {
				margin-right: 6px
			}
		}
	}
`;

export const ProductThumbnail = styled.div<featureBoxProps>`
        ${({ featuredThumbnail }) =>
        featuredThumbnail &&
        css`
            background: url(./static/${featuredThumbnail}) center center / cover no-repeat;
        `}  
        height: 374px;
        display: block;    
        transition: 500ms ease border-radius;
        &:hover {
        	border-radius: 5px;
        }    
`;

export const CarouselNav = styled.div`
       display: flex;
       flex-flow: row wrap;
       justify-content: center;
       align-items: center;
       margin: 24px auto 0;
       button {
       	height: 35px;
       	width: 35px;
       	display: inherit;
       	flex-flow: column;
       	justify-content: inherit;
       	align-items: inherit;
       	border: 2px solid #2A5A75;
       	color: #2A5A75;
       	font-size: 22px;
       	margin: 0 15px;
       	border-radius: 999px;
       	background-color: transparent;
       	&[disabled] {
       		opacity: .1;
       	}
       }
`;

export const Arrow = styled.img<featureBoxProps>`
    ${({ isRotated }) =>
    isRotated &&
    css`
    	transform: rotate(180deg)
    `}  
`;

export const CarouselCounter = styled.div`
	color: #2A5A75;
	font-size: .9rem;
	padding: 0 10px;
`;

export const ErrMsg = styled.p`
	font-size: .8rem;
	margin: -5px 0 15px;
	@media only screen and (max-width: 1024px) {
		margin: 5px 0 15px;
	}
	color: coral;
`;

export const AddedToCart = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,.8);
	z-index: 999;
	padding: 62px;
	@media only screen and (max-width: 1024px) {
		padding: 30px;
	}
	.addedToCartInner {
		padding: 51px 70px 20px;
		@media only screen and (max-width: 1024px) {
			padding: 50px 50px 20px;
		}		
		background-color: white;
		position: relative;
		overflow: hidden;
		max-height: 602px;	
		height: 100%;	
		display: flex;
		width: 100%;
		max-width: 445px;
		flex-flow: column;
		> * {
			flex: 0 0 auto;
			@media only screen and (max-width: 1024px) {
				&:first-child {
					order: 1;
				}
				&:nth-child(2) {
					order: 3;
				}	
				&:nth-child(3) {
					order: 2;
				}	
				&:nth-child(4) {
					order: 4;
				}	
				&:nth-child(5) {
					order: 5;
				}																			
			}
		}
		.close {
			position: absolute;
			top: 0;
			right: 0;
			margin: 16px;
			background: none;			
		}
		.featuredThumbnail {
			flex: 1;
			padding: 0;
			border-radius: 0!important
			@media only screen and (max-width: 1024px) {
				margin-bottom: 10px
			}
		}		
		.btn {
			margin: 0 auto;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		} 
		.productTitle {
			margin: 15px auto;
			text-transform: uppercase;
			font-weight: 400;
			color: #DE8F75;
			text-align: center;
			@media only screen and (max-width: 1024px) {
				margin: 0 auto 15px;
			}
		}
	}
`;


export const Spinner = styled.div<featureBoxProps>`
	position: fixed;
	z-index: 9999;
	left: 0;
	height: 100%;
	top: 0;
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center; 
	background-color: rgba(255,255,255,.9);

	@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
	@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

	@-webkit-keyframes sk-bounce {
	  0%, 100% { -webkit-transform: scale(0.0) }
	  50% { -webkit-transform: scale(1.0) }
	}

	@keyframes sk-bounce {
	  0%, 100% { 
	    transform: scale(0.0);
	    -webkit-transform: scale(0.0);
	  } 50% { 
	    transform: scale(1.0);
	    -webkit-transform: scale(1.0);
	  }
	}	

	.spinner {
		margin: 100px auto;
		width: 40px;
		height: 40px;
		position: relative;
		text-align: center;
		-webkit-animation: sk-rotate 2.0s infinite linear;
		animation: sk-rotate 2.0s infinite linear;	
		.dot1, .dot2 {
		  width: 60%;
		  height: 60%;
		  display: inline-block;
		  position: absolute;
		  top: 0;
		  background-color: #E35442;
		  border-radius: 100%;
		  
		  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
		  animation: sk-bounce 2.0s infinite ease-in-out;
		}

		.dot2 {
		  top: auto;
		  bottom: 0;
		  -webkit-animation-delay: -1.0s;
		  animation-delay: -1.0s;
		}	  	
	}	
`;
