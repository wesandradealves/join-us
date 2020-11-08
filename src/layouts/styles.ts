import styled from 'styled-components';

export const App = styled.div`
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    overflow-x: hidden;
`;
export const Main = styled.main`
    padding-top: 10px;
    padding-bottom: calc(66px + 30px);
    flex: 1;
`;
export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: calc(1036px + 70px);
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
`;

