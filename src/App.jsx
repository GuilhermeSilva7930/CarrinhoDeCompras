import { Grid } from "@mui/material";
import MyCard from "./components/Card";
import CarrinhoProvider from "./components/context/Carrinho";
import Carrinho from "./components/Carrinho";


function App() {
  return (
    <div>
      <CarrinhoProvider>
        <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Carrinho></Carrinho>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Grid item >
              <MyCard></MyCard>
            </Grid>
            <Grid item>
              <MyCard></MyCard>
            </Grid>
          </div>
        </Grid>
      </CarrinhoProvider>
    </div>
  );
}

export default App;
