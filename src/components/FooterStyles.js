import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 3rem;
  padding: .1rem;
  padding-bottom: 1rem;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: .1rem;
`

const Icons = styled.a`
  color: rgb(0, 0, 0);
  font-size: 1.9rem;
  transition: .3s ease-in-out;

  &:hover {
    color: #ff6655;
    transition: .3s ease-in-out;
  }
`

const Reserved = styled.p`
  font-size: 12px;
`

export default { Foot, Ul, Icons, Reserved }