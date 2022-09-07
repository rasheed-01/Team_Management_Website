import { configureStore } from '@reduxjs/toolkit'
import contextsReducer from './contexts/contextsSlice'
import projectsReducer from './project/projectsSlice'
export default configureStore({
  reducer: {
    contextsMode: contextsReducer,
    allProjects: projectsReducer,
  },
})