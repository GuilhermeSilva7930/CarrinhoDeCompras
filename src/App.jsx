import { Grid } from "@mui/material";
import MyCard from "./components/Card";
import CarrinhoProvider from "./components/context/Carrinho";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CarrinhoProvider>
      <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Navbar />
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
          <Grid item >
            <MyCard></MyCard>
          </Grid>
          <Grid item>
            <MyCard></MyCard>
          </Grid>
        </Grid>
      </Grid>
    </CarrinhoProvider>
  );
}

export default App;
