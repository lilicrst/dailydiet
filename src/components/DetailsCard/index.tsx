import { Container, Description, Number } from "./styles";

type Props = {
  number: string;
  description: string;
}

export function DetailsCard({ number, description }: Props) {
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