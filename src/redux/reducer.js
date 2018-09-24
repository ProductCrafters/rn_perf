import { handleActions } from 'redux-actions'
import { toggleSelectedCategory } from './actions'
import initialState from './initialState'


const filterReducer = handleActions(
  {
    [toggleSelectedCategory]: (state, { payload: { id, name } }) => {
      const categoryExists = state.selectedCategories.find(sc => sc.id === id)
      if (categoryExists) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.filter(sc => sc.id !== id),
          }
        }

      return {
        ...state,
          selectedCategories: [{ id, name }, ...state.selectedCategories],
        }
    },
  },
  initialState.selectedCategories
)

export default filterReducer
