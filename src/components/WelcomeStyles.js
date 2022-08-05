import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5.5rem;
  padding-bottom: 100px;
`

const InfoContainer = styled.div`
  width: 100%;
  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5rem;
  padding-right: 40px;
  padding-left: 40px;
`

const DownBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  transition: .4s ease-in-out;
`

export default { Section, InfoContainer, DownBtn }