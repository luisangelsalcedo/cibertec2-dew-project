import { Container } from "@/components";
import WorkWithUsForm from "./WorkWithUsForm";
import "./workwithus.scss";

export function WorkWithUs() {
  return (
  <main>
    <div className="work-section">
        <Container>
          <h2>
            TRABAJA CON <span className="highlight">NOSOTROS</span>
          </h2>
          <div className="flex">
            <WorkWithUsForm />

            <div className="work-image">
                <img src="./src/assets/images/trabajaconnosotros.png" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}