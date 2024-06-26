import React from "react";
import { PageContainer, Subtitle, Title, BackgroundVideo } from "./HomepageStyle";
import Navbar from "./Navbar";
import { Fade, Slide } from 'react-awesome-reveal';
import videoSource from './video.mp4';
import { useTranslation } from "react-i18next";


function Homepage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <BackgroundVideo autoPlay loop muted playsInline src={videoSource} type="video/mp4" />
        <Fade>
            <Navbar />
        </Fade>
        <Slide direction="up">
            <Title>Web Developer.</Title>
            <Title>Full Stack Developer.</Title>
            <Title>Front-End Developer.</Title>
        </Slide>
        <Fade delay={500}>
            <Subtitle>{t('Webentwicklerin mit einer Leidenschaft für die Erstellung moderner und dynamischer Webseiten.')}</Subtitle>
            <Subtitle>Anna-Lena Mölln</Subtitle>
        </Fade>
    </PageContainer>
  );
}

export default Homepage;