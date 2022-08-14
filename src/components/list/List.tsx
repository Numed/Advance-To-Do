import img from "../../img/headerCard.svg";
import direction from "../../img/direction.svg";
import checkMark from "../../img/mark.svg";
import {
  SectionContainer,
  ListContainer,
  ListHeader,
  ListInner,
  WrapperInner,
  ListSection,
  ListSectionTitle,
  ListTitle,
  SectionWrapper,
  ToDoList,
  CreateCheckBox,
  CreateInput,
  CreateToDo,
  Counter,
  ToDo,
  CheckBox,
  CheckMark,
} from "./style";

const Card = () => {
  const closeList = (e: string): void => {
    const ul: any = document.querySelector(`.${e}`);
    ul.classList.toggle("active");
  };

  return (
    <SectionContainer>
      <ListContainer>
        <ListHeader>
          <img src={img} alt="Header" />
        </ListHeader>
        <ListInner>
          <ListSection>
            <SectionWrapper onClick={() => closeList("productivity")}>
              <WrapperInner>
                <ListSectionTitle>
                  <img src={direction} alt="Direction" />
                  <ListTitle>Productivity</ListTitle>
                </ListSectionTitle>
                <hr />
                <img src={checkMark} alt="Check Mark" />
                <Counter>4</Counter>
              </WrapperInner>
            </SectionWrapper>
            <ToDoList className="productivity">
              <ToDo>
                <label>
                  <CheckBox type="checkbox" />
                  <span>Work on the landing page</span>
                  <CheckMark className="check-mark" />
                </label>
              </ToDo>
              <ToDo>
                <label>
                  <CheckBox type="checkbox" />
                  <span>Buy food</span>
                  <CheckMark className="check-mark" />
                </label>
              </ToDo>
              <ToDo>
                <label>
                  <CheckBox type="checkbox" checked />
                  <span>Design a banner</span>
                  <CheckMark className="check-mark" />
                </label>
              </ToDo>
              <ToDo>
                <label>
                  <CheckBox type="checkbox" />
                  <span>Cleaning</span>
                  <CheckMark className="check-mark" />
                </label>
              </ToDo>
              <CreateToDo>
                <CreateCheckBox type="checkbox" />
                <CreateInput type="text" placeholder="Write your task" />
              </CreateToDo>
            </ToDoList>
          </ListSection>
          <ListSection>
            <SectionWrapper onClick={() => closeList("assign")}>
              <WrapperInner>
                <ListSectionTitle>
                  <img src={direction} alt="Direction" />
                  <ListTitle>Assignments</ListTitle>
                </ListSectionTitle>
                <hr />
                <img src={checkMark} alt="Check Mark" />
                <Counter>5</Counter>
              </WrapperInner>
            </SectionWrapper>
          </ListSection>
          <ListSection>
            <SectionWrapper onClick={() => closeList("work")}>
              <WrapperInner>
                <ListSectionTitle>
                  <img src={direction} alt="Direction" />
                  <ListTitle>Work</ListTitle>
                </ListSectionTitle>
                <hr />
                <img src={checkMark} alt="Check Mark" />
                <Counter>8</Counter>
              </WrapperInner>
            </SectionWrapper>
          </ListSection>
        </ListInner>
      </ListContainer>
    </SectionContainer>
  );
};

export default Card;
