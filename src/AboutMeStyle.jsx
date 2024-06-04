import styled from "styled-components";



export const RoundButton2 = styled.button`
    position: fixed;
    top: 100px;
    right: 50%;
    transform: translateX(50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    font-size: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); // Schatten hinzufügen
    transition: all 0.3s ease 0s; // Übergang hinzufügen

    &:hover {
        background-color: rgba(255, 255, 255, 0.7); // Hover-Effekt hinzufügen
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2); // Schatten beim Hover vergrößern
        transform: translateX(50%) scale(1.1); // Button beim Hover vergrößern
    }
`;



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
`;

export const Container = styled.div`
    border: 1px solid #000;
    border-radius: 20px;
    padding: 30px;
    max-width: 700px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    flex-wrap: wrap;
    margin: 40px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
`;

export const Quote = styled.p`
    font-style: italic;
    font-size: 1.2em;
    color: #000;
`;

export const Text = styled.p`
    font-size: 1.4em;
    color: #000;
`;

export const Title = styled.h1`
    font-size: 2em;
    color: #000;
    margin-bottom: 10px;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.4em;
`;
