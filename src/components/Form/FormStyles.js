import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
`

const Input = styled.input`
  width: 400px;
  padding: .5rem;
  border: 1px solid #000;
  border-radius: 10px;
`

const TextArea = styled.textarea`
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 10px;
  resize: none;
`

export default { Form, Input, TextArea }