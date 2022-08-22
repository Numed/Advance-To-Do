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
  Counter,
} from "./style";
import ToDoListContainer from "../ToDoListContainer/ToDoListContainer";
import { productivityData } from "../data/ToDosProductivity";

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
            {/* <ToDoListContainer items={productivityData} /> */}
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
