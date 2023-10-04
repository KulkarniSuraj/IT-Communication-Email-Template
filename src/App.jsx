import { Button, Box, Container, TextField } from "@mui/material";
import Section from "./components/Section";
import Banner from "./components/Banner";

function App() {
  return (
    <main>
      <Container
        sx={{ border: "1px solid black", marginTop: "20px" }}
        maxWidth="sm"
      >
        <Banner />
        <Section
          question={"Planned Downtime: Vizportal Production Environment"}
        >
          <strong>Activity Description: </strong>
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            defaultValue="Unavailability of Vizportal application due to patching activity of server NMVAZ-03"
            fullWidth
          />
          <strong>Planned Downtime date and time: </strong>

          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            defaultValue="Friday 24th December 12:00 PM IST to Friday 24th December 4:00 PM IST"
            fullWidth
          />
        </Section>
        <Section question={"How does this affect me?"}>
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            defaultValue="Viz Portal https://vizport.axolo.com will be inaccessible and unavailable during downtime."
            fullWidth
          />
        </Section>
        <Section question={"Who is impacted?"}>
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            defaultValue="Employees and contractors with access to Vizportal production. Please cascade this communication to all stakeholders."
            fullWidth
          />
        </Section>
        <Section question={"Questions and Concerns"}>
          <TextField
            id="standard-multiline-static"
            multiline
            variant="standard"
            defaultValue="Please do not reply to this email. In case of any questions or concerns, please drop an email to vizsupport@axolo.com"
            fullWidth
          />
        </Section>
      </Container>
      <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
        <Button variant="contained">download</Button>
      </Box>
    </main>
  );
}

export default App;
