import styled from "styled-components";

const device = {
    mobile: `(max-width: 768px)`,
    mobile_ios: `(max-width: 768px)`
}

export const PageContainer = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    overflow: hidden;
    padding-top: 50px;
    
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

export const Titleb = styled.h1`
    justify-content: center;
    font-size: 2.5rem;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    padding: 10px 0;
    letter-spacing: 5px;
    margin: 0 auto;
    width: 80%;

    @media ${device.mobile} {
        font-size: 1.5rem;
    }
`;

export const StyledMarkdown = styled.div`
      font-size: 1rem;
         overflow: auto;
        flex-wrap: wrap; 
        display: flex;
        justify-content: space-around; 
        align-items: flex-start; 
        flex-direction: row;
        gap: 20px;
    


    @media ${device.mobile} {
        font-size: 1rem;
         overflow: auto;
        flex-wrap: wrap; 
        display: flex;
        justify-content: space-around; 
        align-items: flex-start; 
        flex-direction: row;
        gap: 20px;
    }
    `;

export const Image = styled.img`
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;
`;

export const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border: 1px solid #000;
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;

    @media ${device.mobile} {
        overflow: auto;
        flex-wrap: wrap; 
        display: flex;
        justify-content: space-around; 
        align-items: flex-start; 
        flex-direction: row;
        gap: 30px;
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
