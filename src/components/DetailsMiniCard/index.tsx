import { Container, Description, Number } from "./styles";

type Props = {
  number: number | undefined;
  description: string;
}

export function DetailsMiniCard({ number, description }: Props) {
  return (
    <Container>
      <Number>
        {number}
      </Number>
      <Description>
        {description}
      </Description>
    </Container>
  );
}