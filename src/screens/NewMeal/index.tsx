import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { HeaderTitle } from "@components/HeaderTitle";
import { Container, Input, Label, SlidingScreen } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <BackButton />
      <HeaderTitle title="Nova refeição"/>
      <SlidingScreen>
        <Label>
          Nome
        </Label>
        <Button title="Cadastrar refeição" />
      </SlidingScreen>
    </Container>
  );
}