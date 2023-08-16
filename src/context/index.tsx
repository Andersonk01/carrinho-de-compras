import React, { createContext, useState } from "react";

interface ContextData {
  data: DataState[];
  openAside: boolean;
  setContextData: React.Dispatch<React.SetStateAction<DataState[]>>;
  setOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProps {
  children: React.ReactNode;
}

type DataState = {
  id: number;
  name: string;
  totalPrice: number;
};

const ProductCtx = createContext({} as ContextData);

function ComponentContext({ children }: IProps) {
  const [openAside, setOpenAside] = useState<boolean>(false);
  const [contextData, setContextData] = React.useState<DataState[]>([]);

  return (
    <ProductCtx.Provider
      value={{ data: contextData, openAside, setContextData, setOpenAside }}
    >
      {children}
    </ProductCtx.Provider>
  );
}

export { ProductCtx, ComponentContext };
