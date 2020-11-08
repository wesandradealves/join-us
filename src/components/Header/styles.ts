import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	flex-flow: column wrap;
	@media only screen and (max-width: 1024px) {
		flex-flow: row wrap;
		align-items: center;
		padding-left: 35px;
	}
	.logo {
		width: 100%;
		text-align: center;
		img {
			display: inline-block;
		}
		padding: 26px 0;	
		@media only screen and (max-width: 1024px) {
			flex: 1;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			width: auto;
		}	
	}
	.hamburger {
		padding: 0;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	.wrap {
		padding-top: 12px;
		padding-bottom: 12px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			justify-content: flex-end;
			padding-left: 0;
		}
		> * {
			flex: 0 0 auto;
			z-index: 2;
			&:nth-child(2) {
				flex: 1;
				&:last-child {
					margin-left: -139px;
					z-index: 1;
				}
			}
			@media only screen and (max-width: 1024px) {
				&:first-child,
				&:nth-child(2) {
					display: none
				}
			}
		}
	}
	border-bottom: 1px solid #CCCCCC;		
	border-top: 1px solid #CCCCCC;
	@media only screen and (max-width: 1024px) {
		border: 0;
		flex: 0 0 auto;
		width: auto;
	}
`;

export const SearchBar = styled.form`
	max-width: 83px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px rgba(104, 104, 104, 0.4) solid;
	padding-bottom: 7px;
	@media only screen and (max-width: 1024px) {
		padding: 0;
		border: 0;
		top: 3px;
	}
	span {
		flex: 1;
		padding-left: 17px;
		font-size: .8rem;
		color: #686868;
		text-align: right;
		@media only screen and (max-width: 1024px) {
			display: none
		}
	}	
`;

export const Button = styled.button`
	flex: 0 0 auto;
	background: none;
	cursor: pointer;
`;

export const Input = styled.input`
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
`;