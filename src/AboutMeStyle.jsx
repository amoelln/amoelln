import styled from "styled-components";

const device = {
    mobile: `(max-width: 768px)`,
    mobile_ios: `(max-width: 768px)`,
    laptop: `(min-device-width: 769px) and (max-device-width: 1366px)`
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
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    
    
    @media ${device.mobile} {
        overflow: auto;
        flex-wrap: wrap; 
        display: flex;
        justify-content: space-around; 
        align-items: flex-start; 
        flex-direction: row;
        gap: 20px;
    }
    
    @media ${device.mobile_ios} {
        overflow: auto;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around; 
        align-items: flex-start; 
        flex-direction: row;
        gap: 20px;
    }



   
`;

export const Container = styled.div`
    border: 1px solid #000;
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    margin: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    @media ${device.mobile} {
        overflow: auto;
        padding: 10px;
        max-width: 80%;
        margin: 30px;
        flex-wrap: wrap; 
    }
    @media ${device.mobile_ios} {
        overflow: auto;
        padding: 10px;
        max-width: 80%;
        margin: 30px;
        flex-wrap: wrap; 
    }

   
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
    @media ${device.mobile} {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }

    @media ${device.mobile_ios} {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }

`;

export const Quote = styled.p`
    font-style: italic;
    font-size: 1.2em;
    color: #000;
    text-align: justify;
    @media ${device.mobile} {
        font-size: 0.8em;
    }

    @media ${device.mobile_ios} {
        font-size: 0.8em;
    }

`;

export const Text = styled.p`
    font-size: 1.2em;
    color: #000;
    text-align: left;
    @media ${device.mobile} {

        font-size: 0.8em;
    }

    @media ${device.mobile_ios} {
        font-size: 0.8em;
    }

`;

export const Title = styled.h1`
    font-size: 1.5em;
    color: #000;
    margin-bottom: 10px;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    @media ${device.mobile} {
        font-size: 1em;
        margin-bottom: 5px;
    }
    @media ${device.mobile_ios} {
        font-size: 1em;
        margin-bottom: 5px;
    }

`;
