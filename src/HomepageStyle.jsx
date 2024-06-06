import styled from 'styled-components';

const device = {
    mobile: `(max-width: 768px)`,
    mobile_ios: `(max-width: 768px)`,
    desktop: `(min-width: 769px)`,
    laptop: `(min-device-width: 1024px) and (max-device-width: 1366px)`
};



export const PageContainer = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    overflow: hidden;

    @media ${device.mobile} {
        flex-direction: column; 
        justify-content: flex-start; 
        padding-top: 80px; 
    }

    @media ${device.mobile_ios} {
        flex-direction: column; 
        justify-content: flex-start; 
        padding-top: 80px; 
    }

    @media ${device.laptop} {
        flex-direction: column; 
        justify-content: flex-start; 
        padding-top: 80px; 
    }
`;

export const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    text-transform: uppercase;
    margin-bottom: 0.5em;
    color: #fff;

    @media ${device.mobile} {
        font-size: 1.5em;
    }

    @media ${device.mobile_ios} {
        font-size: 1.5em;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.2em;
    margin-bottom: 1em;
    color: #fff;

    @media ${device.mobile} {
        font-size: 1em;
    }

    @media ${device.mobile_ios} {
        font-size: 1em;
    }
`;

export const Button = styled.button`
    background-color: #007BFF;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 100px;

    &:hover {
        background-color: #0056b3;
    }
`;
