export const TaskList = {
    state: {
      arrTasks: [],
      fetchError: undefined
    },
    reducers: {
      setTasks(state, payload) {
        return {
          ...state,
          arrTasks: payload,
        };
      },
      setError(state, payload) {
        return {
        ...state,
        fetchError: payload
        }
      }
    },
    effects: (dispatch) => ({
      async fetchTaskList() {
        try {
          const data = [
              { "taskID": 1, "taskName": "Task #1" },
              { "taskID": 2, "taskName": "Task #2" },
              { "taskID": 3, "taskName": "Task #3" }
          ]
          dispatch.TaskList.setTasks(data);
        } catch (error) {
          dispatch.TaskList.setError(error);
        }
      },
    }),
  };
  