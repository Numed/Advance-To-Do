import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 600px;
  background: #f4f4f4;
  box-shadow: 16px 12px 53px rgba(0, 0, 0, 0.2);

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  img {
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  &.completed > .check-box {
    background: #b5b5ba;

    & > .check-mark::after {
      display: block;
    }

    & > .todo-name {
      color: #b5b5ba;
      text-decoration: line-through;
    }
  }
`;

export const ListInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0 55px;
  padding: 0 30px;
`;

export const ListSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  z-index: 3;
`;

export const WrapperInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const ListSectionTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;

export const ListTitle = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #413f3f;
`;

export const Counter = styled.span`
  color: #f4f4f4;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9px;
  width: 20px;
  height: 20px;
  background: #413f3f;
  border: 2px solid #413f3f;
  border-radius: 6px;
  margin-left: 5px;
`;

export const ToDoList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  transition: all 0.25s linear;

  &.active {
    display: none;
    transition: all 0.25s linear;
  }
`;

export const ToDo = styled.li`
  position: relative;
  label {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #413f3f;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 20px;
  height: 20px;
  background: #f4f4f4;
  border: 2px solid #c4c4c4;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 6px;
    width: 6px;
    height: 3px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(-45deg) scale(-1, 1);
    -ms-transform: rotate(-45deg) scale(-1, 1);
    transform: rotate(-45deg) scale(-1, 1);
  }
`;

export const CreateToDo = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const CreateCheckBox = styled(CheckBox)`
  background: #e2e2e2;
`;

export const CreateInput = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #e2e2e2;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #413f3f;

  &:active,
  &:focus {
    outline: none;
  }
`;
