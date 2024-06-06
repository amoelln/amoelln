import styled from 'styled-components';

const device = {
    mobile: `(max-width: 768px)`,
    laptop: `(min-device-width: 1024px) and (max-device-width: 1366px)`
};

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


    
    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;

    }

    @media ${device.laptop} {
        flex-direction: row;
    }

`;

export const Card = styled.div`
    border: 1px solid #000;
    border-radius: 20px;
    padding: 30px;
    max-width: 700px;
    margin: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    @media ${device.mobile} {
        max-width: 90%;
        margin: 0px;
    }

    @media ${device.laptop} {
        max-width: 700px;
        margin: 40px;
    }
`;
export const Title1 = styled.h1`
    font-size: 1.5em;
    font-family: 'Arial', sans-serif;
    margin-bottom: 30px;
    
    text-transform: uppercase;
    letter-spacing: 0.1em;  

    @media ${device.mobile} {
        font-size: 1em;
        margin-bottom: 20px;
    }

    @media ${device.laptop} {
        font-size: 1.5em;
        margin-bottom: 30px;
    }
    `;


export const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    font-family: 'Arial', sans-serif;
    margin-bottom: 30px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 0.3em;

    @media ${device.mobile} {
        font-size: 1em;
        margin-bottom: 30px;
    }

    @media ${device.laptop} {
        font-size: 1.5em;
        margin-bottom: 30px;
    }


`;

export const Item = styled.li`
    list-style-type: none;
    font-size: 1.2em;
    margin-bottom: 60px;
    color: #000;
    margin-left: -20px;
    text-transform: uppercase;
    letter-spacing: 0.7em;
    text-align: center;

    @media ${device.mobile} {
        font-size: 0.8em;
        margin-bottom: 30px;
    }

    @media ${device.laptop} {
        font-size: 1.2em;
        margin-bottom: 60px;
    }
`;