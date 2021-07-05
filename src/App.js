import './App.css';
import avatar from './avatar.png';
import programming from './programming.png';
import designer from './designer.png';
import datascience from './datascience.png';
import {Divider, Grid, Card, CardContent, Toolbar, AppBar, Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

var dev_tools = ["React.js", "Flask", "Flutter","Material-ui"]
var design_tools = ["Figma", "Adobe XD", "Photoshop", "Pen & Paper"]
var data_tools = ["Numpy", "Matplotlib", "Pandas", "Pytorch"]
function App() {
  return (
    <div className="App" style = {{background: "linear-gradient(to right, #1292d5, #fe3642)"}}>
      <div>
        <AppBar position="static" style = {{ background: "white", minHeight: "100vh"}}>
          <Toolbar variant = "dense">
            <Typography variant="h4" edge = "start" style = {{"font-family": "Lucida Bright", "font-weight": "bolder", color: "black", "font-size": "20px"}}>
              ERIC ZHANG
            </Typography>
          </Toolbar>

          <br></br>

          <Typography  variant = "h2" style = {{"font-family": "Lucida Bright", marginTop: "100px", color: "black"}}>
            - Hi, I'm a Programmer, Designer, Data Scientist, and Student 
            living in Dallas, Texas.
          </Typography>
          <br></br>
          <center>
            <img alt = "avatar" src = {avatar} width = "200px" height = "auto" style = {{margin: "10px"}}></img>
          </center>
        </AppBar>
      </div>
      <div>
        <Typography variant = "h3" style = {{color: "white", "font-family": "Monospace", marginTop: "100px"}}> I'm Eric, Nice to Meet You </Typography>
        <Typography style = {{color: "white", "font-family": "Candara", margin: "10px"}}>I am a student attending St. Marks School of Texas and a self-taught developer with 2 years of programming experience.</Typography>
        <center>
          <Card style = {{margin: "50px"}}>
            <CardContent>
              <Grid container justify="center">
                <Grid item xs = {3}>
                  <img alt = "programming" src = {programming} height = "50px" style = {{margin: "10px"}}></img>
                  <Typography variant="h5" style = {{"font-family": "Monospace", "font-weight": "bold"}}>Programmer</Typography>
                  <br></br>
                  <center>
                    <Typography style = {{margin : "20px", alignItems : "center", "font-family": "Candara"}}>I build meaningful websites, apps, and services that make a difference</Typography>
                  </center>
                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>Languages I code in:</Typography>
                  <Typography style = {{"font-family": "Candara"}}>Python, Java, Javascript, C++, Dart</Typography>

                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>Dev Technologies:</Typography>
                  {
                    dev_tools.map((item) =>
                      <Typography style = {{"font-family": "Candara"}}>{item}</Typography>
                    )
                  }
                </Grid>
                <Grid item xs = {1}>
                  <Divider orientation = "vertical"></Divider>
                </Grid>
                <Grid item xs = {3}>
                  <img alt = "designer" src = {designer} height = "50px" style = {{margin: "10px"}}></img>
                  <Typography variant="h5" style = {{"font-family": "Monospace", "font-weight": "bold"}}>Designer</Typography>
                  <br></br>
                  <center>
                    <Typography style = {{margin : "20px", alignItems : "center", "font-family": "Candara"}}>I design clean user orentied interfaces using design patters and a responsive ui</Typography>
                  </center>
                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>I enjoy designing:</Typography>
                  <Typography style = {{"font-family": "Candara"}}>Apps, Websites, Logos, Ui, Ux, Logic</Typography>
                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>Design Tools:</Typography>
                  {
                    design_tools.map((item) => 
                      <Typography style = {{"font-family": "Candara"}}>{item}</Typography>
                    )
                  }
                </Grid>
                <Grid item xs = {1}>
                  <Divider orientation = "vertical"></Divider>
                </Grid>
                <Grid item xs = {3}>
                <img alt = "datascience" src = {datascience} height = "50px" style = {{margin: "10px"}}></img>
                  <Typography variant="h5" style = {{"font-family": "Monospace", "font-weight": "bold"}}>Data Scientist</Typography>
                  <br></br>
                  <center>
                    <Typography style = {{margin : "20px", alignItems : "center", "font-family": "Candara"}}>I analyze, modify, and use data to change the way we think about the world</Typography>
                  </center>
                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>I enjoy building:</Typography>
                  <Typography style = {{"font-family": "Candara"}}>Charts, Graphs, Neural Networks</Typography>
                  <br></br>
                  <Typography style = {{"font-family": "Monospace", color: "#1292d5"}}>Data Science Tools:</Typography>

                  {
                    data_tools.map((item) =>
                      <Typography style = {{"font-family": "Candara"}}>{item}</Typography>
                    )
                  }
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          </center>
        </div>
        <div>
          <Divider style = {{background: "white"}}></Divider>
              <center >
                <a href = "https://github.com/ericspring08"><GitHubIcon fontSize = "large" style = {{margin: "10px", color: "white"}}></GitHubIcon></a>
                <a href = "https://www.linkedin.com/in/eric-zhang-32b0b4216/"><LinkedInIcon fontSize = "large" style = {{margin: "10px", color: "white"}}></LinkedInIcon></a>
                <a href = "mailto: ericspring08@gmail.com"><EmailIcon fontSize = "large" style = {{margin: "10px", color: "white"}}></EmailIcon></a>
              </center>
        </div>
    </div>
  );
}

export default App;
