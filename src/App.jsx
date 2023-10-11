import { Button, Box, Container, TextField } from "@mui/material";
import Section from "./components/Section";
import Answer from "./components/Answer";
import Banner from "./components/Banner";
import { useState } from "react";
import DATA from "./data";

function App() {
  const [showPreview, setShowPreview] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handlePreview() {
    setShowPreview((prevValue) => !prevValue);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Container
          sx={{ border: "1px solid black", marginTop: "20px" }}
          maxWidth="sm"
        >
          <Banner />
          <Section question={DATA.downtime_heading.Q}>
            <strong>{DATA.downtime_heading.Q_desc}</strong>
            {showPreview ? (
              <Answer text={DATA.downtime_heading.A_desc} />
            ) : (
              <TextField
                id="description"
                multiline
                variant="standard"
                defaultValue={DATA.downtime_heading.A_desc}
                fullWidth
              />
            )}

            <strong>{DATA.downtime_heading.Q_time}</strong>
            {showPreview ? (
              <Answer text={DATA.downtime_heading.A_time} />
            ) : (
              <TextField
                id="time"
                multiline
                variant="standard"
                defaultValue={DATA.downtime_heading.A_time}
                fullWidth
              />
            )}
          </Section>
          <Section question={DATA.effect.Q}>
            {showPreview ? (
              <Answer text={DATA.effect.A} />
            ) : (
              <TextField
                id="effect"
                multiline
                variant="standard"
                defaultValue={DATA.effect.A}
                fullWidth
              />
            )}
          </Section>
          <Section question={DATA.impact.Q}>
            {showPreview ? (
              <Answer text={DATA.impact.A} />
            ) : (
              <TextField
                id="impact"
                multiline
                variant="standard"
                defaultValue={DATA.impact.A}
                fullWidth
              />
            )}
          </Section>
          <Section question={DATA.contact.Q}>
            {showPreview ? (
              <Answer text={DATA.contact.A} />
            ) : (
              <TextField
                id="contact"
                multiline
                variant="standard"
                defaultValue={DATA.contact.A}
                fullWidth
              />
            )}
          </Section>
        </Container>
        <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
          <Button variant="outlined" sx={{ mx: 2 }} onClick={handlePreview}>
            {showPreview ? "Edit" : "Preview"}
          </Button>
          <Button variant="contained" type="submit">
            download
          </Button>
        </Box>
      </form>
    </main>
  );
}

export default App;
