import React from "react";
import {  PageContainer ,Container, Image, Quote, Text, Title, BackgroundVideo, CardContainer } from "./AboutMeStyle";
import Navbar from "./Navbar";
import MyPicture from "./ich2.jpg";
import { Fade} from 'react-awesome-reveal';
import { useTranslation } from "react-i18next";
import video from "./video.mp4";
import Skills from "./Skills";


function AboutMe() {

    const { t } = useTranslation();

    return (
        <PageContainer>
            <BackgroundVideo autoPlay loop muted playsInline src={video} type="video/mp4" />
                <Navbar />
                <CardContainer>
                <Fade delay={100}>
                <Container>
                    <Image src={MyPicture} alt="Me" />
                    <Title>{t('Über mich')}</Title>
                    <Text>{t('Mein Name ist Anna-Lena Mölln, ich komme aus der wunderschönen Stadt Hamburg und bin Fachinformatikerin für Anwendungsentwicklung. Webseiten zu programmieren ist meine große Leidenschaft, weil dort keine Grenzen gesetzt sind und ich meiner Kreativität freien Lauf lassen kann. Es bereitet mir große Freude, die Ergebnisse meiner Arbeit zu sehen und ständig Neues zu lernen. Die endlosen Möglichkeiten, die das Programmieren bietet, haben mich schon früh fasziniert und ich habe gerne Zeit am PC verbracht.')}</Text>
                    <Text>{t('Neben meiner Arbeit, gehe ich gerne zum Sport. Dies ist ein großes Hobby von mir und bietet einen wunderbaren Ausgleich zum Programmieren.')}</Text>
                    <Quote>{t("Die einzige Möglichkeit, eine neue Programmiersprache zu lernen, besteht darin, Programme in ihr zu schreiben.")} – Dennis Ritchie </Quote>
                </Container>
                </Fade>
                <Fade delay={100}>
                    <Skills/>
                </Fade>
                </CardContainer>
        </PageContainer>    
    );
}

export default AboutMe;