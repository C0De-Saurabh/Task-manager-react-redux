import { ADD_TASK, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TASK, TOGGLE_TASK } from './actionTypes';




const initialState ={

    tasks:[]
}
export const taskReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                tasks:[...state.tasks,{text:action.payload.text,completed: false}],
            }
            case TOGGLE_TASK:
                return {
                    tasks: state.tasks.map((task,index)=> 
                    index === action.payload.id? {...task,completed: !task.completed} : task),
                    
                }

            case REMOVE_TASK:
            return {
                tasks: state.tasks.filter((task,index)=> 
                index !== action.payload.id),
                
            }

            case MARK_COMPLETED:
                return {
                    tasks: state.tasks.map((task,index)=> 
                    index === action.payload.id? {...task,completed: true} : task),

                }


                case MARK_INCOMPLETE:
                return {
                    tasks: state.tasks.map((task,index)=> 
                    index === action.payload.id? {...task,completed: true} : task),

                }
                   
                default:
                    return state;


    }
}
