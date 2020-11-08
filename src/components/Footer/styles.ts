import styled from 'styled-components';

interface IListItem {
	active?: boolean;
	onClick?: any;
}

interface IFooter {
	flex?: number;
}

export const Container = styled.footer`
	.wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
		padding-top: 21px;
		padding-bottom: 21px;
		@media only screen and (max-width: 1024px) {
			padding-top: 0;
			> * {
				&:nth-child(1) {
					order: 2;
				}
				&:nth-child(2) {
					order: 1;
				}
				&:nth-child(3) {
					order: 3;
				}								
			}
		}
	}
	border-top: 2px solid #AEB6C1;
	.copyright {
		margin-top: 50px;
		@media only screen and (max-width: 1024px) {
			margin-top: 0;
		}
		background-color: #DE8F75;
		color: white;
		.wrapper {
			padding-top: 18px;
			padding-bottom: 18px;
			justify-content: space-between;
			align-items: center;
			@media only screen and (max-width: 1024px) {
				flex-flow: column
			}
			p {
				font-size: .8rem;
				line-height: 1.6;
				flex: 1;
				max-width: 728px;
				@media only screen and (max-width: 1024px) {
					max-width: 100%;
					padding-top: 20px;
				}
			}
			span {
				flex: 0 0 auto;
			}			
		}
	}
`;

export const Column = styled.div<IFooter>`
	flex: ${({ flex }) => (flex ? flex : '0 0 auto')};
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	&:first-child {
		width: 201px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
		}
		img {
			margin-right: 21px;
		}
		& ~ * {
			@media only screen and (max-width: 1024px) {
				width: 100%;
			}
			&:last-child {
				width: 293px;
				@media only screen and (max-width: 1024px) {
					width: 100%;
				}
				position: relative;
				&:not(:nth-child(2)) {
					margin-left: 20px;
				}
			}
		}
	}
	.socialNetworks {
		margin-bottom: 35px;
		color: #DE8F75;
	}
	.navigation {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: stretch;
		margin-right: -21px;
		@media only screen and (max-width: 1024px) {
			margin: 0 -35px;
			flex-flow: column;
			justify-content: center;
			align-items: center;
		}
		h3 {
			margin-bottom: 8px;
			font-size: .65rem;
			color: #AEB6C1;
			@media only screen and (max-width: 1024px) {
				font-size: 1.2rem;
				text-transform: uppercase;
				font-weight: 400;
				line-height: 3;
				margin-bottom: 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				&::after {
					flex: 0 0 auto;
					content: '+';
					font-size: 30px;
					font-weight: 300;
					height: 30px;
					line-height: 1;
				}
			}
		}
		> li {
			flex: 1;
			@media only screen and (max-width: 1024px) {
				border-bottom: 1px solid #AEB6C1;		
				width: 100%;	
			}			
			ul {
				display: block;
				@media only screen and (max-width: 1024px) {
					display: none;
				}
				li {
					padding: 0 0 8px;
					font-size: .7rem;
					color: black;
					font-weight: 400;
				}
			}
		}
	}
	.logos {
		@media only screen and (max-width: 1024px) {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
		}
	}
`;
