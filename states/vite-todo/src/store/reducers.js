
export const mainReducer = (state, action) => {
    switch (action.type) {
      case "SET_TASKS_LIST":
        return {
          ...state,
          tasksListData: action.payload,
        };
      case "ADD_NEW_TASK":
        return {
          ...state,
          tasksListData: [...state.tasksListData, action.payload],
        };
      case "SET_TASK_COMPLETED":
      return {
        ...state,
        tasksListData: state.tasksListData.filter(
          (task) => task.id !=action.payload),
      };
      case "SET_MODAL_VISIBILITY":
        return{
          ...state,
          isModalVisible: action.payload,
        };
      case "SET_TODO_USERNAME":
        return{
          ...state,
          todoTodo: {
            ...state.todoTodo,
            username: action.payload,
          }
        };
      case "SET_TODO_TODO":
        return {
          ...state,
          todoTodo: {
            ...state.todoTodo,
            todo: action.payload,
          },
        };
      case "SET_TODO_IMAGE":
        return {
          ...state,
          image: action.payload,

        };
      case "SET_TODO_ID":
      return {
        ...state,
        id: state.tasksListData.length + 1,
      }
        
    }
  };