import { useState } from "react";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        {/* Grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. 
        Material Design's responsive UI is based on a 12-column grid layout
        Grid container represents the parent element 
        Grid item represents the child element */}
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
