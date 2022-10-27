const newman = require("newman");
const { parseVars } = require("./helpers");

async function runCollection(action) {
  let opts = {
    collection: action.params.collection,
    environment: action.params.postmanEnvironment,
    envVar: parseVars(action.params.envVars),
    globalVar: parseVars(action.params.globalVars),
  };
  const extraOpts = action.params.options;
  if (extraOpts) {
    if (typeof (extraOpts) !== "object") {
      throw new Error("Options must be of type Object");
    }
    opts = Object.assign(extraOpts, opts);
  }
  return new Promise((resolve, reject) => {
    newman.run(opts, (err, summary) => {
      if (err) {
        return reject(err);
      }
      const execs = summary.run.executions;
      execs.forEach((execution) => {
        if (Reflect.has(execution, "requestError")) {
          reject(summary);
        }
      });
      return resolve(summary);
    });
  });
}

module.exports = {
  runCollection,
};
