import styled from "styled-components";
const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
`

export default { Header, Ul }