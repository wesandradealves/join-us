import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: -90px;
    left: 0;
    border: 1px black solid;
    border-radius: 999px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 245px;
    width: 245px;
    padding: 40px 30px;
    background: white;
    @media only screen and (max-width: 1024px) {
    	position: relative;
    	top: 0;
    	border: 0;
    	border-radius: initial;
    	height: auto;
    	width: auto;
    	padding: 0;
    	margin: 40px auto;
    }
    .err {
        &:not(:last-of-type) {
            margin-bottom: 15px;
        }
        label {
            color: red;
            & + div{
                border-bottom-color: red !important;
                &::before,
                &::after {
                    border-bottom-color: red!important;
                } 
            }           
            &[class*="focused"] {
                color: red;
                & + div{
                    border-bottom-color: red !important;
                    &::before,
                    &::after {
                        border-bottom-color: red!important;
                    } 
                }  
            }
        }
    }
    label {
        font-size: .8rem;
        & ~ p {
            font-size: .6rem;
            color: red;
            position: absolute;
            bottom: -18px;            
        }
        & + div input {
            font-size: .8rem;
        }        
        &:not([class*="animated"]) {
            transform: translate(0, 28px) scale(1);
        }
        &[class*="shrink"] {
            transform: translate(0, 7.5px) scale(0.75);
        }
        &[class*="focused"] {
            color: #DE8F75;
            & + div{
                border-bottom-color: #DE8F75 !important;
                &::before,
                &::after {
                    border-bottom-color: #DE8F75!important;
                } 
            }  
        }        
    }
`;

export const Title = styled.h3`
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
    @media only screen and (max-width: 1024px) {
    	color: #AEB6C1;
    	font-weight: 300;
    	font-size: 1rem;
    }
`;

export const Form = styled.form`
	@media only screen and (max-width: 1024px) {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
	}
    >div {
        width: 100%;
        @media only screen and (max-width: 1024px) {
        	flex: 0 0 auto;
        	&:nth-child(2) {
        		width: calc(100% - 126px);
        	}
        	&:not(:last-of-type) {
        		margin-bottom: 10px;
        	}
        }
    }
    >button {
        border-radius: 2px;
        background-color: #DE8F75!important;
        font-size: .7rem;
        color: white!important;
        font-weight: 300;
        transition: 500ms ease all;
        [class*="label"] {
            line-height: 2.5;
            @media only screen and (max-width: 1024px) {
            	line-height: 2.9;
            }
        } 
        width: 100%;
        max-width: 110px;
        margin: 27px auto 0;
        display: block;      
        cursor: pointer;
        &[class*="disabled"] {
            opacity: .4;
            pointer-events: none;
        }  
        @media only screen and (max-width: 1024px) {
        	margin: 0;
        	flex: 0 0 auto;
        }
    }
`;