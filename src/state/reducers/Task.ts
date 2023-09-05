type TaskType = {
    taskes:[]
}

type ActionType = {
    type:String,
    payload?:{}
}

const getDataFromStorage = localStorage.getItem("kanbanboard_task");
const initialKanban:TaskType | null = getDataFromStorage ? JSON.parse(getDataFromStorage) : null;


const taskReducer = (state=initialKanban,action:ActionType) => {
    switch(action.type) {
        default:
            return state ? state:[];
    }
}

export {taskReducer};