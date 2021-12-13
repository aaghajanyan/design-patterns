const { Executor } = require("./Executor");

class ExecutorImplementation extends Executor {
  runCommand(cmd) {
    // TODO: implement run command instead of console.log
    console.log(`Run '${cmd}' command. Successfully executed.`);
  }
}

module.exports = { ExecutorImplementation };