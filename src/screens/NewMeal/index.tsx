import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { HeaderTitle } from "@components/HeaderTitle";
import { Input } from "@components/Input";
import { MiniButton } from "@components/MiniButton";
import { Binded, BoxButton, Column, Container, Label, SlidingScreen } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <BackButton />
      <HeaderTitle title="Nova refeição" />
      <SlidingScreen>
        <Label>Nome</Label>
        <Input type='NAME' />

        <Label>Descrição</Label>
        <Input type='DESCRIPTION' />

        <Column>
          <Binded>
            <Label>Data</Label>
            <Input type='DATEHOUR' />
          </Binded>
          <Binded>
            <Label>Hora</Label>
            <Input type='DATEHOUR' />
          </Binded>
        </Column>

        <Label>Está dentro da dieta?</Label>

        <Column>
          <MiniButton type="YES" title="Sim" isActive={true} />
          <MiniButton type="NO" title="Não"  />
        </Column>

        <BoxButton>
          <Button title="Cadastrar refeição" />
        </BoxButton>

      </SlidingScreen>
    </Container>
  );
}