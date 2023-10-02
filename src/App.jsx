import { Link, Container } from "@mui/material";
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
        <Section question={"Planned Downtime: Vizportal Production Environment"}>
        <strong>Activity Description: </strong>
        Unavailability of Vizportal application due to patching activity of server NMVAZ-03 <br />
        <strong>Planned Downtime date and time: </strong>
        Friday 24th December 12:00 PM IST to Friday 24th December 4:00 PM IST
          </Section>
          <Section question={"How does this affect me?"}>
        Viz Portal <Link href="https://vizport.axolo.com">https://vizport.axolo.com</Link> will be inaccessible and unavailable during downtime.
          </Section>
          <Section question={"Who is impacted?"}>
        Employees and contractors with access to Vizportal production.
        Please cascade this communication to all stakeholders.
          </Section>
          <Section question={"Questions and Concerns"}>
        Please do not reply to this email. In case of any questions or concerns, please drop an email to <Link href="mailto:vizsupport@axolo.com">vizsupport@axolo.com</Link>
          </Section>
      </Container>
    </main>
  );
}

export default App;
