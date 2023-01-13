import { Container, Logo, TitleLogo, ForkKnife,User } from "./styles";

import logoImg from '@assets/ForkKnife.png'
import logoTitle from '@assets/Vector.png'
import userImg from '@assets/Ellipse.png'

export function Header(){
  return (
    <Container>
      <Logo>
        <ForkKnife source={logoImg} />
        <TitleLogo source={logoTitle} />
      </Logo>
      <User source={userImg}/>
    </Container>
  );
}