import styled from "styled-components";

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
`;

export const StyledMarkdown = styled.div`
    color: black;
    font-size: 1.3rem;
    `;

export const Image = styled.img`
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;

`;