const { ExecutorProxy } = require("./ExecutorProxy");

const ADMIN_CREDENTIALS = { username: "admin", password: "admin" };
const USER_CREDENTIALS = { username: "user", password: "user" };

const executeCommand = (user = {}, cmd) => {
  try {
    const { username, password } = user;
    const executor = new ExecutorProxy(username, password);
    executor.runCommand(cmd);
  } catch (err) {
    console.log("Exception Message::", err.message);
  }
};

executeCommand(ADMIN_CREDENTIALS, "ls");
executeCommand(ADMIN_CREDENTIALS, "rm test.txt");

executeCommand(USER_CREDENTIALS, "ls");
executeCommand(USER_CREDENTIALS, "rm test.txt");