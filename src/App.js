import './App.css';
import {AppBar, Typography} from '@material-ui/core';
import Programming from './components/programming';
function App() {
  return (
    <div className="App">
      <div>
        <AppBar position="top" style = {{background: "#F2F2F2"}}>
          <Typography variant="h4" position="center" style = {{"margin-top": "15px", "font-weight": "bold", color: "black", "font-size": "15px", "font-family": "sans-serif"}}>
            ERIC ZHANG
          </Typography>

          <br></br>

          <Typography  variant = "h2" style = {{margin: "150px", color: "black"}}>
            - Hi, I'm a Programmer, Artist, and Student 
            living in Dallas, Texas.
          </Typography>
        </AppBar>
      </div>
      <div>
        <Programming></Programming>
      </div>
    </div>
  );
}

export default App;
