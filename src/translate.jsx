import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About Me": "About Me",
          "Skills": "Skills",
          "Contact": "Contact",
          "Fähigkeiten": "Skills",
          "Kontakt": "Contact",
          "Ich freue mich auf Ihre Nachricht!": "I look forward to your message!",
          "Name": "Name",
          "Vorname": "First Name",
          "E-Mail Adresse": "E-Mail Address",
          "Ihre Nachricht": "Your Message",
          "Senden": "Send",
          "Oder kontaktieren Sie mich über:": "Or contact me via:",
          "Webentwicklerin mit einer Leidenschaft für die Erstellung moderner und dynamischer Webseiten.":"Web developer with a passion for creating modern and dynamic websites.",
          "Über mich": "About Me",
          "Mein Name ist Anna-Lena Mölln, ich komme aus der wunderschönen Stadt Hamburg und bin Fachinformatikerin für Anwendungsentwicklung. Webseiten zu programmieren ist meine große Leidenschaft, weil dort keine Grenzen gesetzt sind und ich meiner Kreativität freien Lauf lassen kann. Es bereitet mir große Freude, die Ergebnisse meiner Arbeit zu sehen und ständig Neues zu lernen. Die endlosen Möglichkeiten, die das Programmieren bietet, haben mich schon früh fasziniert und ich habe gerne Zeit am PC verbracht.":"My name is Anna-Lena Mölln, I come from the beautiful city of Hamburg and I am an IT specialist for application development. Programming websites is my great passion because there are no limits and I can give free rein to my creativity. It gives me great pleasure to see the results of my work and to constantly learn new things. The endless possibilities that programming offers fascinated me from an early age and I loved spending time on the PC.",
          "Neben meiner Arbeit gehe ich gerne zum Sport. Dies ist ein großes Hobby von mir und bietet einen wunderbaren Ausgleich zum Programmieren.": "In addition to my work, I like to do sports. This is a great hobby of mine and provides a wonderful balance to programming.",
          "Die einzige Möglichkeit, eine neue Programmiersprache zu lernen, besteht darin, Programme in ihr zu schreiben." : "The only way to learn a new programming language is to write programs in it."
        }
      },
      de: {
        translation: {
          "Home": "Startseite",
          "About Me": "Über mich",
          "Fähigkeiten": "Fähigkeiten",
          "Contact": "Kontakt",
          "Kontakt": "Kontakt",
          "Ich freue mich auf Ihre Nachricht!": "Ich freue mich auf Ihre Nachricht!",
          "Name": "Name",
          "Vorname": "Vorname",
          "E-Mail Adresse": "E-Mail Adresse",
          "Ihre Nachricht": "Ihre Nachricht",
          "Über mich" :"Über mich",
          "Senden": "Senden",
          "Oder kontaktieren Sie mich über:": "Oder kontaktieren Sie mich über:",
          "Webentwicklerin mit einer Leidenschaft für die Erstellung moderner und dynamischer Webseiten.":"Webentwicklerin mit einer Leidenschaft für die Erstellung moderner und dynamischer Webseiten.",
          "Mein Name ist Anna-Lena Mölln, ich komme aus der wunderschönen Stadt Hamburg und bin Fachinformatikerin für Anwendungsentwicklung. Webseiten zu programmieren ist meine große Leidenschaft, weil dort keine Grenzen gesetzt sind und ich meiner Kreativität freien Lauf lassen kann. Es bereitet mir große Freude, die Ergebnisse meiner Arbeit zu sehen und ständig Neues zu lernen. Die endlosen Möglichkeiten, die das Programmieren bietet, haben mich schon früh fasziniert und ich habe gerne Zeit am PC verbracht." : "Mein Name ist Anna-Lena Mölln, ich komme aus der wunderschönen Stadt Hamburg und bin Fachinformatikerin für Anwendungsentwicklung. Webseiten zu programmieren ist meine große Leidenschaft, weil dort keine Grenzen gesetzt sind und ich meiner Kreativität freien Lauf lassen kann. Es bereitet mir große Freude, die Ergebnisse meiner Arbeit zu sehen und ständig Neues zu lernen. Die endlosen Möglichkeiten, die das Programmieren bietet, haben mich schon früh fasziniert und ich habe gerne Zeit am PC verbracht.",
          "Neben meiner Arbeit gehe ich gerne zum Sport. Dies ist ein großes Hobby von mir und bietet einen wunderbaren Ausgleich zum Programmieren.":"Neben meiner Arbeit gehe ich gerne zum Sport. Dies ist ein großes Hobby von mir und bietet einen wunderbaren Ausgleich zum Programmieren.",
          "Die einzige Möglichkeit, eine neue Programmiersprache zu lernen, besteht darin, Programme in ihr zu schreiben." : "Die einzige Möglichkeit, eine neue Programmiersprache zu lernen, besteht darin, Programme in ihr zu schreiben."
        }
      }
      // Sie können hier weitere Sprachen hinzufügen
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;