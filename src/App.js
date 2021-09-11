import Before from "./Components/Before"
import { Subnav } from "./Components/Subnav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import After from "./Components/After"
import Design from "./Components/verticals/design/Design";
import Woman_Empowerment from "./Components/verticals/woman_empowerment/Woman_Empowerment";
import Web_Development from "./Components/verticals/web_development/Web_Development";
import Editorial from "./Components/verticals/editorial/Editorial";
import Photography_and_Videography from "./Components/verticals/photography_and_videography/Photography_and_Videography";


function App() {
  return (
    <div >
    <Before/>
    <Router>
      <Subnav />
      <Switch>
            <Route exact path="/verticals/woman_empowerment/Women_Empowerment" component={Woman_Empowerment} />
            <Route exact path="/verticals/design/Design" component={Design} />
            <Route exact path="/verticals/web_development/Web_Development" component={Web_Development} />
            <Route exact path="/verticals/editorial/Editorial" component={Editorial} />
            <Route exact path="/verticals/photography_and_videography/Photography_and_Videography" component={Photography_and_Videography} />
            <Route component={Woman_Empowerment}/>
      </Switch>
    </Router>
    <After/>
    </div>
    
  );
}

export default App;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)