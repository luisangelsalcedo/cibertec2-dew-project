import { Container, MainTitle } from "@/components";
import { ContactForm } from "./components/contact-form/ContactForm";
import { ContactInformation } from "./components/contact-information/ContactInformation";
import "./ContactPage.scss";

export function ContactPage() {
  return (
    <main>
      <div className="contactenos-page">
        <Container>
          <MainTitle>
            <strong>Escríbenos</strong> y comparte con nosotros
          </MainTitle>
          <div className="flex">
            <ContactForm />
            <ContactInformation />
          </div>
        </Container>
      </div>
    </main>
  );
}
