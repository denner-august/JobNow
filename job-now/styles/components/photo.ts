import styled from "styled-components";

export const Div: any = styled.div`
  background-image: url(${(props: any) => props.usuario});
  background-position: center;
  background-size: cover;
`;
