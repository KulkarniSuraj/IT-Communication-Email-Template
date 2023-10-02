import { Typography } from "@mui/material";

function Question({ question }) {
  return <Typography variant="h5" sx={{color: 'red'}}>
    {question}
  </Typography>
}

export default Question;
