import { Reducer } from 'redux'
import { CounterActionType, CounterAtion } from './actions/counter'

export interface CounterState {
  count: number
}

export const initialState: CounterState = { count: 0 }

const counterReducer: Reducer<CounterState, CounterAtion> = (
  state: CounterState = initialState,
  action: CounterAtion
):CounterState => {
  switch(action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      }
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    default: {
      const _: never = action.type;
      return state;
    }
  }
}

export default counterReducer