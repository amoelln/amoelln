import styled from 'styled-components';

const device = {
    mobile: `(max-width: 768px)`,
    desktop: `(min-width: 769px)`
};

export const RoundButton2 = styled.button`
    position: fixed;
    top: 100px;
    right: 50%;
    transform: translateX(50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    font-size: 30px;
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

    @media ${device.mobile} {
        width: 60px;
        height: 60px;
        font-size: 30px;
        line-height: 40px;
        bottom: 20px; // Ändern Sie die Position nach unten
        right: 20px; // Ändern Sie die Position nach rechts
        transform: translateX(0); // Entfernen Sie die horizontale Verschiebung
        overflow: auto;
    }


    @media ${device.desktop} {
        width: 50px;
        height: 50px;
        font-size: 25px;
        line-height: 50px; // Ändern Sie die Zeilenhöhe, um den Text zu zentrieren
    }

   
`;
export const Label = styled.label`
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
    display: block;
    @media ${device.mobile} {
        font-size: 12px;
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

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    padding: 20px;
    width: 800px;
    height: 680px;
    display: flex;
    flex-direction: column;
    @media ${device.mobile} {
        width: 90%;
        height: auto;
        padding: 10px;
    }
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #ccc;
    font-family: Arial;
    font-size: 16px;
    @media ${device.mobile} {
        margin-bottom: 5px;
        padding: 5px;
    }
`;

export const TextArea = styled.textarea`
    min-height: 100px; // Setzen Sie die Höhe
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 15px;
    font-family: Arial;
    font-size: 16px;
    border: 1px solid #ccc;
    @media ${device.mobile} {
        margin-bottom: 5px;
        padding: 5px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    border-radius: 15px;
    border: none;
    background-color: #007BFF;
    color: white;
    margin: 10px 0;
    cursor: pointer;
    @media ${device.mobile} {
        padding: 5px;
        font-size: 12px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #333;
    text-align: center;
    margin-bottom: 10px;
    @media ${device.mobile} {
        font-size: 18px;
    }
    @media ${device.desktop} {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
    @media ${device.mobile} {
        font-size: 16px;
    }
    @media ${device.desktop} {
        font-size: 20px;
    }
`;