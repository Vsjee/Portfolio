import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
`

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem
`

const Img = styled.img`
  flex-basis: 18rem;
  flex-grow: 1;
  max-width: 250px;
`

const Div = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 55%;
`
export default { AboutContainer, Info, Img, Div } 