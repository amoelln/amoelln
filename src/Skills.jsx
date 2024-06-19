import React from "react";
import { Card, Title, Item, CardContainer } from "./SkillsStyle";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";


function Skills() {

    const { t } = useTranslation();

    return (
            <CardContainer>
                <Fade delay={100}>
                    <Card>
                        <Title>{t('Fähigkeiten')}</Title>
                        <ul>
                            <Item>JavaScript</Item>
                            <Item>React</Item>
                            <Item>CSS</Item>
                            <Item>HTML</Item>
                            <Item>Node.js</Item>
                            <Item>Express</Item>
                            <Item>SQL</Item>
                        </ul>
                    </Card>
                </Fade>
            </CardContainer>
    );
}

export default Skills;