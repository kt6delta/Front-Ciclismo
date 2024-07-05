import React, { FC, Dispatch, SetStateAction } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ListItem } from "@/components/CardDrop/ListItem";
import { Todo, TodosStatus } from "@/utils/interfaces/types";

interface Props {
  disponiblesTodos: Todo[];
  setDisponiblesTodos: Dispatch<SetStateAction<Todo[]>>;
  agregadosTodos: Todo[];
  setAgregadosTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const DraggableElement: FC<Props> = ({
  disponiblesTodos,
  setDisponiblesTodos,
  agregadosTodos,
  setAgregadosTodos,
}) => {
  return (
    <>
      <div className="bg-background p-3 md:p-5 lg:p-7 rounded-default border-1 border-content1 shadow-button">
        <Droppable droppableId={TodosStatus.DisponiblesTodos}>
          {(droppableProvided, droppableSnapshot) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {disponiblesTodos?.map((todo, index) => (
                <ListItem
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={disponiblesTodos}
                  setTodos={setDisponiblesTodos}
                />
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div className="bg-background p-3 md:p-5 lg:p-7 rounded-default border-1 border-content1 shadow-button">
        <Droppable droppableId={TodosStatus.AgregadosTodos}>
          {(droppableProvided, droppableSnapshot) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {agregadosTodos?.map((todo, index) => (
                <ListItem
                  index={index}
                  key={todo?.id}
                  todo={todo}
                  todos={agregadosTodos}
                  setTodos={setAgregadosTodos}
                />
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};
