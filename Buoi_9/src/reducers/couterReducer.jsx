const initState = {
    count:0,

};

const couterReducer = (state = initState, action) => {
  
  switch (action.type) {
    case "up":
        
        return {
            ...state,
            count: state.count +1
        }

    case "down":
        return {
            ...state,
            count: state.count -1
        }
  
    default:
        return state
  }
  
}

export default couterReducer