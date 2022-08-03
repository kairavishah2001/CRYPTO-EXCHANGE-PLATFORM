import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../Components/sidebar";
import { Header1, Main, Wrapper } from "../styles";
import Dashboard from "./Dashboard/Dashboard";
import Transaction from "./Transactions/Transaction";
import {Profile, Security, Notification, About} from "./Settings/Settings";

class Home extends React.Component {
  render() {
    const { balance, income, expance, currency } = this.props.financialOverview;

    return (
      <Router>
        <Wrapper>
          <SideBar />
          <Switch>
            <Route path="/home" exact>
              <Dashboard

              />
            </Route>
            <Route path="/send&receive" component={Transaction}></Route>
            <Route exact path='/settings/profile' component={Profile} />
                    <Route exact path='/settings/security' component={Security} />
                    <Route exact path='/settings/notification' component={Notification} />
            <Route exact path='/settings/about' component={About} />
            <Route path="/logout">
              <Main>
                <Header1>logout</Header1>
              </Main>
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    financialOverview: state.wallet.financialOverview,
  };
};

export default connect(mapStateToProps)(Home);
