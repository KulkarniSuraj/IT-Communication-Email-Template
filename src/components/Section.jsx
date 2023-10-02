import Box from "@mui/material/Box";
import Question from "./Question";

const Section = ({ question, children }) => {
  return <Box sx={{ padding:"10px 0"}}>
    
    <Question question={question}/>
    {children}
  </Box>;
};

export default Section;
