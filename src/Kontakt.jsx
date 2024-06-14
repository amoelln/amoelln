import React from "react";
import {Label, Title, Subtitle, BackgroundVideo, FormContainer, Form, Input, TextArea, Button, PageContainer} from './KontaktStyle';
import video from "./video.mp4";
import Navbar from "./Navbar";
import img from "./git.png";
import img2 from "./link.png";
import img3 from "./mail.png";
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Titleb } from "./BlogStyle";


function Kontakt() {

    const {t} = useTranslation();

    const[formData, setFormData] = useState({
        name: '',
        vorname: '',
        email: '',
        nachricht: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return (
        <PageContainer>
            <BackgroundVideo autoPlay loop muted playsInline src={video} type="video/mp4" />
            <Navbar />
            <Titleb>{t("Let's talk!")}</Titleb>
            <FormContainer>
            <Fade delay={200}>
                <Form action="https://formsubmit.co/a.moelln@icloud.com" method="POST">
                <Title>{t('Kontakt')}</Title>
                <Subtitle>{t('Ich freue mich auf Ihre Nachricht!')}</Subtitle>
                    <Label>{t('Name')}</Label>
                    <Input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                    <Label>{t('Vorname')}</Label>
                    <Input type="text" name="vorname" placeholder={t("Vorname")} value={formData.vorname} onChange={handleChange} />
                    <Label>{t('E-Mail Adresse')}</Label>
                    <Input type="email" name="email" placeholder={t("E-Mail Adresse")} required value={formData.email} onChange={handleChange} />
                    <Label>{t('Ihre Nachricht')}</Label>
                    <TextArea name="message" placeholder={t("Ihre Nachricht")} value={formData.message} onChange={handleChange}></TextArea>
                    <Input type="hidden" name="_next" value="https://amoelln.github.io/"/>
                    <Button type="submit">{t('Senden')}</Button>
                    <Subtitle>{t('Oder kontaktieren Sie mich über:')}</Subtitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <a href="https://github.com/amoelln">
                            <img src={img} alt="git" style={{ width: '50px', height: '50px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/anna-lena-m%C3%B6lln-410879310/">
                            <img src={img2} alt="git" style={{ width: '50px', height: '50px' }} />
                        </a>
                        <a href="mailto:a.moelln@icloud.com">
                            <img src={img3} alt="email" style={{ width: '50px', height: '50px' }} />
                        </a>
                    </div>
                </Form>
                </Fade>
            </FormContainer>
        </PageContainer>
    );
}

export default Kontakt;