import styled from "styled-components";

const Button = styled.button`
  background: ${Props => Props.primary === 'primary' ? '#ff6655' : '#ffffff'};
  color: ${Props => Props.primary === 'primary' ? '#ffffff' : '#ff6655'};
  padding: .6rem .9rem;
  border: ${Props => Props.primary === 'primary' ? '1px solid #ff6655' : '1px solid #ff6655'};
  border-radius: 15px;
  cursor: pointer;
  transition: .4s ease-in-out;

  &:hover {
    background: ${Props => Props.primary === 'primary' ? '#be4f43' : '#e4958e'};
  }
`

export default Button