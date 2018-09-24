import { createAction } from 'redux-actions'

const TOGGLE_SELECTED_CATEGORY = 'TOGGLE_SELECTED_CATEGORY'

export const toggleSelectedCategory = createAction(TOGGLE_SELECTED_CATEGORY, category => category)

