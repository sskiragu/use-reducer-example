import { Stack, Button, Typography, Box, TextField } from "@mui/material";
import { useReducer } from "react";

function App() {

  const initialState = {count: 0};
  const initialState2 = {
    firstName: 'John',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count -1};
      default:
        throw new Error();
    }
  }

  const reducer2 = (state, action) => {
    switch (action.type) {
      case 'changeValue':
        return {...state, [action.field]: action.value};
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer2, initialState2);

  const signup = (e) => {
    e.preventDefault();
    console.log(state2.firstName);
  }
  return (
    <Box>
    <Stack 
      spacing={2} 
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Typography>Count :{state.count}</Typography>
      <Button variant="outlined" onClick={() => dispatch({type: 'decrement'})}>-</Button>
      <Button variant="outlined" onClick={() => dispatch({type: 'increment'})}>+</Button>
    </Stack>
    <Box 
      component="form"
      onSubmit={signup}
      sx={{marginTop: "2%"}}>
      <Stack spacing={2} sx={{width: "50%",}}>
      <TextField
        defaultValue={state2.firstName}
        onChange={(e) => dispatch2({
          type: 'changeValue',
          field: 'firstName',
          value: e.target.value
        })}
        name="firstName"
        type="text"
        label="First Name"/>
      <Button 
          variant="outlined"
          type="submit">Submit</Button>
      </Stack>
    </Box>
    </Box>
  );
}

export default App;
