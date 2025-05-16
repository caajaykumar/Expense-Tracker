
import './App.css';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Home from './pages/Index';
function App() {
  return (
    <div className="App">

    <SnackbarProvider>
     
      <Home/>
     </SnackbarProvider>
     
    </div>
  );
}

export default App;


