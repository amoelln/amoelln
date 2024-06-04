import styled from 'styled-components';


export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    border: 1px solid #000;
    border-radius: 20px;
    padding: 30px;
    max-width: 700px;
    margin: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;
export const Title1 = styled.h1`
    font-size: 2em;
    font-family: 'Arial', sans-serif;
    margin-bottom: 30px;
    
    text-transform: uppercase;
    letter-spacing: 0.1em;  
    `;


export const Title = styled.h2`
    font-size: 2em;
    font-family: 'Arial', sans-serif;
    margin-bottom: 30px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

export const Item = styled.li`
    list-style-type: none;
    font-size: 1.2em;
    margin-bottom: 60px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 0.7em;
`;