import styled, { css } from 'styled-components';

interface ISVG {
	fill?: string;
}

export const SVG = styled.svg<ISVG>`
	path {
		fill: ${({ fill }) => (fill ? fill : '#DE8F75')};
	}
`;