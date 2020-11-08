import styled, { css } from 'styled-components';

interface IListItem {
	justifyContent?: string;
	textTransform?: string;
	separator?: boolean;
	column?: boolean;
}

export const Container = styled.div``; 

export const NavHeader = styled.h3``; 

export const Nav = styled.ul<IListItem>`
	display: flex;
	flex-flow: ${({ column }) => (column ? 'column wrap' : 'row wrap')};
	align-items: center;
	justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
`;

export const NavItem = styled.li<IListItem>`
	font-weight: 200;
	color: #686868;
	font-size: .8rem;
	text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'initial')};
	${({ separator }) =>
		separator &&
		css`
			&:not(:first-child) {
				padding-left: 10px;
			}
			&:not(:last-child) {
				border-right: 1px #686868 solid;
				padding-right: 10px;
			}
		`}	
	${({ separator }) =>
		!separator &&
		css`
			padding: 0 20px
		`}			
`; 