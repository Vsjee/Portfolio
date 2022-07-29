import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-auto-flow: dense;
  grid-auto-rows: 20rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  padding: 2rem;
  margin: 2rem;
  padding-bottom: 3rem;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
	width: 350px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 1.5rem;
`

export default { ProjectsContainer, Div, Img } 