export enum CounterActionType {
  ADD = 'COUNTER/ADD',
  INCREMENT = 'COUNTER/INCREMENT',
  DECREMENT = 'COUNTER/DECREMENT',
}

export interface CounterAtion {
  type: CounterActionType
  amount?: number
}

export const add = (amount: number): CounterAtion => ({
  amount,
  type: CounterActionType.ADD,
})

export const increment = (): CounterAtion => ({
  type: CounterActionType.INCREMENT,
})

export const decrement = (): CounterAtion => ({
  type: CounterActionType.DECREMENT
})

