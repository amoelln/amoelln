import styled from 'styled-components';


export const RoundButton = styled.button`
    position: fixed;
    bottom: 20px;
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

export const Title = styled.h1`
    font-size: 2.5em;
    text-transform: uppercase;
    margin-bottom: 0.5em;
    color: #fff;
`;

export const Subtitle = styled.p`
    font-size: 1.2em;
    margin-bottom: 1em;
    color: #fff;
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
