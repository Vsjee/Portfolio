import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.8rem;
  border-radius: 25px;
`

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

const Img = styled.img`
  width: 100px;
  margin-bottom: .5rem;
`

export default { SkillsContainer, SkillList, SkillItem, Img }