const core = require('@actions/core');
const github = require('@actions/github');

try {
  const prId = core.getInput('pr-id');
  console.log(`PR ID is ${prId}`);
  core.setOutput('pr-id', prId);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}