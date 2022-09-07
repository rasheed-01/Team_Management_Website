import { createSlice } from '@reduxjs/toolkit'


      //m_RefactorThis: this function will be refactored in the future 
     //giving a random color to the tasks or events in the calendar
      function getRandomColor() {
      var colorList = ["red", "pink", "blue", "green", "yellow", "purple", "orange",]
        return colorList[Math.floor((Math.random() * colorList.length))];} 

export const projectsSlice = createSlice({
  name: 'allProjects',
  initialState: {
    projects: [
      //m_DeleteMe: these objects will be deleted in the future now is just for appearance 

      {
        title: "OXA Project",
        taskRow: [
          { name:"write SRS", member: "male", code: "FIN", start: "2022-08-04", deadline: "2022-08-05", colorName: getRandomColor() },
          { name: "design UI", member: "female", code: "ONP", start: "2022-08-07", deadline: "2022-08-07",colorName: getRandomColor()},
        ],
      },

      {
        title: "OXA Project2",
        taskRow: [
          { name:"write SRS OXA2", member: "male", code: "FIN", start: "2022-08-04", deadline: "2022-08-05", colorName: getRandomColor() },
          { name: "design UI OXA2", member: "female", code: "ONP", start: "2022-08-07", deadline: "2022-08-07",colorName: getRandomColor()},
          { name:"implement login page", member: "male", code: "WAIT", start: "2022-08-11", deadline: "2022-08-15", colorName: getRandomColor() },
          { name: "add feature 2 ", member: "female", code: "MIS", start: "2022-08-25", deadline: "2022-08-27", colorName: getRandomColor() },
        ],
      },
      {
        title: "OXA Project3",
        taskRow: [
          { name:"implement login page", member: "male", code: "WAIT", start: "2022-08-23", deadline: "2022-08-23", colorName: getRandomColor() },
          { name: "add feature 2 ", member: "female", code: "", start: "2022-08-23", deadline: "2022-08-23", colorName: getRandomColor() },
        ],
      },

    ],
    //m_NOTE: this state for all possible status of a task with status's description
    statusList: [ 
      {"code": "ONP", "desc":"the task on progress"},
      {"code": "FIN", "desc":"the task is finished"},
      {"code": "ERROR", "desc":"there is an error on implementing the task or error was faced"},
      {"code": "WAIT", "desc":"the Task is waiting to start working on it"},
      {"code": "MIS", "desc":"There is a mistake on the task"},
  ],
  },
  
  reducers: {
    updateStatus: (state, action) => {
      //const task = state.projects[action.payload[0]].taskRow[action.payload[1]]
      state.projects[action.payload[0]].taskRow[action.payload[1]].code = action.payload[2];
    },


    addNewTaskToProject: (state, action) => {
      const index =  action.payload.index; 
      delete action.payload.index; 
      state.projects[index].taskRow.push(action.payload)
    },
    updateTaskTitle: (state, action) => {
     // const task = state.projects[action.payload[0]].taskRow[action.payload[1]]
      state.projects[action.payload[0]].taskRow[action.payload[1]].name = action.payload[2];
    },
    updateTaskDeadline:(state, action) => {
      //const task = state.projects[action.payload[0]].taskRow[action.payload[1]]
      state.projects[action.payload[0]].taskRow[action.payload[1]].deadline = action.payload[2];
    },
    deleteTask:(state, action) => {
      state.projects[action.payload[0]].taskRow.splice(action.payload[1], 1)
    },


    createNewProject:(state, action) =>{
      state.projects.unshift({title: action.payload, taskRow: []})
    },
    deleteProject:(state, action) =>{
      state.projects.splice(action.payload, 1)

    },
    //m_NOTE: not use or implement yet
    updateTaskToProject: (state, action) =>{
    
    const task = project[project.findIndex((task) =>{return task.name === action.payload[1]})];
    const taskTest ={ name: "lol ", member: "male", code: "FIN", deadline: "2022-08-20" }
    Object.keys(task).forEach(key => {
      task[key] = taskTest[key];
    });
  },
  },
})

// Action creators are generated for each case reducer function
export const { updateStatus, addNewTaskToProject, updateTaskTitle, updateTaskDeadline, deleteTask, createNewProject, deleteProject} = projectsSlice.actions

export default projectsSlice.reducer