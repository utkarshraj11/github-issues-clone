import axios from "axios";

const url = "https://api.github.com/repositories/6427813/issues";

export const fetchIssues = async () => {
  return await axios.get(
    `${url}`

  );
};

export const getGitIssues = async () => {
  const issues = await fetchIssues();

  return await issues.data;
};


