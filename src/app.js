const { parseVars } = require("./helpers");
const newman = require('newman');

async function runCollection(action, settings) {
    let opts = {
        collection: action.params.collection,
        envVar: parseVars(action.params.envVars),
        globalVar: parseVars(action.params.globalVars)
    }
    const extraOpts = action.params.options;
    if (extraOpts){
        if (typeof(extraOpts) !== "object"){
            throw "Options must be of type Object";
        }
        opts = Object.assign(extraOpts, opts);
    }
    return new Promise((resolve, reject) => {
        newman.run(opts, function (err, summary) {
            if (err) reject(err); 
            const execs = summary.run.executions;
            execs.forEach(execution => {
                if (execution.hasOwnProperty("requestError")){
                    return reject(summary);
                }
            })
            return resolve(summary);
        });
    });
}


module.exports = {
    runCollection
};
