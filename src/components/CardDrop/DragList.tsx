"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { DraggableElement } from "@/components/CardDrop/DraggableElement";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Title } from "@/components/reusable/title";
import { Todo, TodosStatus } from "@/utils/interfaces/types";
import InputField from "./Inputfield";

export const DragList = () => {
  const DISPONIBLES = [
    {
      id: 1,
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    },
    {
      id: 2,
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    },
    {
      id: 3,
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    },
  ];
  const AGREGADOS = [
    {
      id: 4,
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    },
    {
      id: 5,
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    },
  ];

  const [name, setName] = useState<string>("");
  const [disponiblesTodos, setDisponiblesTodos] = useState<Todo[]>([]);
  const [agregadosTodos, setAgregadosTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // setDisponiblesTodos(DISPONIBLES);
    // setAgregadosTodos(AGREGADOS);
  }, []);

  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id:  Date.now(),
      nombre: "Cata Preci",
      especialidad: "sprinter",
      genero: "Femenino",
      contextura: "delgada",
      tiempo: "10",
    };

    setDisponiblesTodos([...disponiblesTodos, newTodo]);
    setName("");
  };

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    let add,
      disponibles = disponiblesTodos,
      agregados = agregadosTodos;
    switch (source.droppableId) {
      case TodosStatus.DisponiblesTodos:
        add = disponiblesTodos[source.index];
        disponibles.splice(source.index, 1);
        break;
      case TodosStatus.AgregadosTodos:
        add = agregadosTodos[source.index];
        agregados.splice(source.index, 1);
        break;
    }

    if (add) {
      switch (destination.droppableId) {
        case TodosStatus.DisponiblesTodos:
          disponibles.splice(destination.index, 0, add);
          break;
        case TodosStatus.AgregadosTodos:
          agregados.splice(destination.index, 0, add);
          break;
      }
    }

    setDisponiblesTodos(disponibles);
    setAgregadosTodos(agregados);

    if (window) {
      window.localStorage.setItem(
        "DisponiblesTodos",
        JSON.stringify(disponibles)
      );
      window.localStorage.setItem("AgregadosTodos", JSON.stringify(agregados));
    }
  };

  return (
    <>
    <InputField name={name} setName={setName} addNewTodo={addNewTodo} />
      <DragDropContext onDragEnd={onDragEndHandler}>
            <Title
              className="text-center text-small md:text-small lg:text-small"
              mesage='titulo'
            />
            <DraggableElement
              disponiblesTodos={disponiblesTodos}
              setDisponiblesTodos={setDisponiblesTodos}
              agregadosTodos={agregadosTodos}
              setAgregadosTodos={setAgregadosTodos}
            />
      </DragDropContext>
    </>
  );
};
