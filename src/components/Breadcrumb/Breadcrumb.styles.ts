import styled, { css } from 'styled-components';

export const Container = styled.div`
    .wrapper {
        padding-top: 10px;
        padding-bottom: 25px;
    }
    @media only screen and (max-width: 1024px) {
    	display: none;
    }
`; 

export const BreadcrumbWrapper = styled.ul`

`; 

export const BreadcrumbItem = styled.li`
    color: #AEB6C1;
    font-size: .8rem;
    display: inline-block;
    vertical-align: middle;
    &:not(:last-child) {
        &::after {
            content: '/';
            display: inline-block;
            vertical-align: middle;
            padding: 0 5px;
        }
    }
    &:last-child {
        font-weight: bold;
        cursor-pointer: none;
    }
`; 

