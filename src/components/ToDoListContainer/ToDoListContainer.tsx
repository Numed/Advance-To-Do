import React from "react";
import {
  ToDoList,
  CreateCheckBox,
  CreateInput,
  CreateToDo,
  ToDo,
  CheckBox,
  Label,
  CheckMark,
} from "../list/style";

type ToDoTypes = {
  items: [
    {
      id: number;
      name: string;
      completed: boolean;
    }
  ];
};

const ToDoListContainer: React.FC<ToDoTypes> = ({ items }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  return (
    <ToDoList className="productivity">
      {items.map(({ id, name, completed }) => {
        return (
          <>
            <ToDo key={id}>
              <Label>
                <CheckBox
                  type="checkbox"
                  className="check-box"
                  onChange={changeHandler}
                />
                <span className="todo-name">{name}</span>
                <CheckMark className="check-mark" />
              </Label>
            </ToDo>
          </>
        );
      })}
      <CreateToDo>
        <CreateCheckBox type="checkbox" />
        <CreateInput type="text" placeholder="Write your task" />
      </CreateToDo>
    </ToDoList>
  );
};

export default ToDoListContainer;
