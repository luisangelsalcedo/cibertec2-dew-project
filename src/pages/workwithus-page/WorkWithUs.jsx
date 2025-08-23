import { Container, MainTitle } from "@/components";
import { tabajaconnosotros } from "@/assets/images";
import WorkWithUsForm from "./WorkWithUsForm";
import "./workwithus.scss";

export function WorkWithUs() {
  return (
    <div className="work">
      <Container>
        {/* Título */}
        <MainTitle>
          TRABAJA CON <strong>NOSOTROS</strong>
        </MainTitle>

        <div className="work-content">
          {/* Formulario */}
          <WorkWithUsForm />
          {/* Imagen */}
          <div className="work-image">
            <img src={tabajaconnosotros} alt="Trabaja con nosotros" />
          </div>
        </div>
      </Container>
    </div>
  );
}
