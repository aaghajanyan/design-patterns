const { Executor } = require("./Executor");
const { ExecutorImplementation } = require("./ExecutorImplementation");

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";

class ExecutorProxy extends Executor {
  constructor(user, pwd) {
    super();
    this.isAdmin = user === ADMIN_USERNAME && pwd === ADMIN_PASSWORD;
    this.executor = new ExecutorImplementation();
  }

  runCommand(cmd) {
    if (!cmd) {
      throw new Error("Command not passed.");
    }
    if (this.isAdmin) {
      this.executor.runCommand(cmd);
    } else {
      if (cmd.includes("rm")) {
        throw new Error("No admin permissions.");
      } else {
        this.executor.runCommand(cmd);
      }
    }
  }
}

module.exports = { ExecutorProxy };