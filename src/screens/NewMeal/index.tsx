import { BackButton } from "@components/BackButton";
import { HeaderTitle } from "@components/HeaderTitle";
import { Container, Label, SlidingScreen } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <BackButton />
      <HeaderTitle title="Nova refeição"/>
      <SlidingScreen>
        <Label>
          Nome
        </Label>
      </SlidingScreen>
    </Container>
  );
}