/* eslint-disable strict */
const workerpool = require("workerpool");
const { CLIEngine } = require("./cli-engine");

// eslint-disable-next-line require-jsdoc
async function lint({
    params,
    providedOptions
}) {

    const engine = new CLIEngine(providedOptions);

    return engine.lintFiles(params);
}

// create a worker and register functions
workerpool.worker({
    lint
});
