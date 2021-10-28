import styled from 'styled-components';
import background from './assets/background.jpg';

export const Background = styled.div`
    background: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Title = styled.span`
    margin-top: 30px;
`;

export const Frame = styled.div`
    box-shadow: -3px 4px 37px 4px rgba(0,0,0,0.31);
    -webkit-box-shadow: -3px 4px 37px 4px rgba(0,0,0,0.31);
    -moz-box-shadow: -3px 4px 37px 4px rgba(0,0,0,0.31);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${background});
    width: 360px;
    height: 650px;
    border-radius: 15px;
`;

export const Display = styled.div`
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(265, 265, 265, .1);
    height: 50px;
    margin: 80px 10px;
    font-size: 1.1em;
    letter-spacing: .4em;
`;

export const Button = styled.button`
    box-shadow: 0px 0px 9px 2px rgba(20,4,7,0.1);
    -webkit-box-shadow: 0px 0px 9px 2px rgba(20,4,7,0.1);
    -moz-box-shadow: 0px 0px 9px 2px rgba(20,4,7,0.1);
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 2px;
    background-color: #efefef;
`;

export const Keyboard = styled.form`
    display: grid;
    grid-template-columns: 65px 65px 65px 65px;
    grid-gap: 10px;
`;