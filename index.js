const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const prNumber = payload.number;
  console.log(`PR Number is ${prNumber}`);
  const pullRequestBody = payload.pull_request.body.replace(/#{prNumber}/g, prNumber);
  core.setOutput('body', pullRequestBody);
} catch (error) {
  core.setFailed(error.message);
}