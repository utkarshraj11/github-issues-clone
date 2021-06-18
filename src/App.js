import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getGitIssues } from "./api/api";
import Issues from "./components/Issues/Issues";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [presentPage, setPresentPage] = useState(1);
  const [issues, setIssues] = useState([]);
  const [totalIssuesPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    getGitIssues().then((res) => {
      setIssues(res);
      setLoading(false);
    });
  }, []);

  const lastIssueIndex = presentPage * totalIssuesPerPage;
  const firstIssueIndex = lastIssueIndex - totalIssuesPerPage;
  const currentIssues = issues.slice(firstIssueIndex, lastIssueIndex);

  const paginate = (pageNumber) => setPresentPage(pageNumber);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <h1>Github Issues Page</h1>
            <Issues issues={currentIssues} />
            <Pagination
              totalIssuesPerPage={totalIssuesPerPage}
              totalIssues={issues.length}
              paginate={paginate}
              presentPage={presentPage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
