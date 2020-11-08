import styled, { css } from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0 -10px;
    @media only screen and (max-width: 1024px) {
    	justify-content: center;
    	margin: 30px -10px 0;
    }
`;

export const Item = styled.li`
    padding: 0 10px;
    font-size: 18px;
    @media only screen and (max-width: 1024px) {
    	font-size: 30px;
    }
`;