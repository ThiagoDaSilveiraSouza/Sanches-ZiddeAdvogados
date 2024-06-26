import { Dispatch, SetStateAction } from "react";

type ICreateUpdateStateProp = <T extends object>(
  context: T,
  setContext: Dispatch<SetStateAction<T>>
) => (prop: keyof T, value: any) => void;

export const createUpdateStateProp: ICreateUpdateStateProp = (
  context,
  setContext
) => {
  type IContext = keyof typeof context;
  type IContextProps = IContext[keyof IContext];

  const updateStateProp = (prop: IContext, value: IContextProps) => {
    setContext((context) => {
      const newContext = { ...context };
      const isSameType = typeof value === typeof newContext[prop];

      if (isSameType) {
        return { ...newContext, [prop]: value };
      }

      return newContext;
    });
  };

  return updateStateProp;
};
