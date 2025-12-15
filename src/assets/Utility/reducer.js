import { useReducer } from 'react'
import {Type} from './ActionType'



export const initialState = {
  Basket: [],
};


export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingProductIndex = state.Basket.findIndex(
        (product) => product.id === action.item.id
      );

      if (existingProductIndex === -1) {
        // product not found → add new
        return {
          ...state,
          Basket: [...state.Basket, { ...action.item, itemAmount: 1 }],
        };
      } else {
        // product found → update quantity
        const updatedBasket = state.Basket.map((item, index) =>
          index === existingProductIndex
            ? { ...item, itemAmount: item.itemAmount + 1 }
            : item
        );

        return {
          ...state,
          Basket: updatedBasket,
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.Basket.findIndex(
        (product) => product.id === action.id
      );

      if (index >= 0) {
        const newBasket = [...state.Basket];

        if (newBasket[index].itemAmount > 1) {
          // decrement quantity
          newBasket[index] = {
            ...newBasket[index],
            itemAmount: newBasket[index].itemAmount - 1,
          };
        } else {
          // remove product entirely
          newBasket.splice(index, 1);
        }

        return {
          ...state,
          Basket: newBasket,
        };
      }

      return state; // if product not found
    }

    default:
      return state;
  }
};



