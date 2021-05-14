import './App.css';

// 
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Les components
import Header from './components/Header'
import RandomCitation from './components/RandomCitation'
import Dashboard from './components/Dashboard'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">

      {/* Entête avec le nom de l'usager */}
      <Header />

      <div className={classes.root}>
        <Grid container item xs={12} spacing={2}>

          {/* Section citation aléatoire */}
          <Grid item xs={6}>
            <Paper className={classes.paper} elevation={3}>
              <RandomCitation />
            </Paper>
          </Grid>


        </Grid>

        {/* Section dashboard */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <Dashboard />
            </Paper>
          </Grid>

        </Grid>
      </div>

    </div>
  );
}

export default App;
