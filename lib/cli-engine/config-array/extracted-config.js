/**
 * @fileoverview `ExtractedConfig` class.
 *
 * `ExtractedConfig` class expresses a final configuration for a specific file.
 *
 * It provides one method.
 *
 * - `toCompatibleObjectAsConfigFileContent()`
 *      Convert this configuration to the compatible object as the content of
 *      config files. It converts the loaded parser and plugins to strings.
 *      `CLIEngine#getConfigForFile(filePath)` method uses this method.
 *
 * `ConfigArray#extractConfig(filePath)` creates a `ExtractedConfig` instance.
 *
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

// For VSCode intellisense
/** @typedef {import("../../shared/types").ConfigData} ConfigData */
/** @typedef {import("../../shared/types").GlobalConf} GlobalConf */
/** @typedef {import("../../shared/types").SeverityConf} SeverityConf */
/** @typedef {import("./config-dependency").DependentParser} DependentParser */
/** @typedef {import("./config-dependency").DependentPlugin} DependentPlugin */

/**
 * The class for extracted config data.
 */
class ExtractedConfig {
    constructor() {

        /**
         * The config name what `noInlineConfig` setting came from.
         * @type {string}
         */
        this.configNameOfNoInlineConfig = "";

        /**
         * Environments.
         * @type {Record<string, boolean>}
         */
        this.env = {};

        /**
         * Global variables.
         * @type {Record<string, GlobalConf>}
         */
        this.globals = {};

        /**
         * The flag that disables directive comments.
         * @type {boolean|undefined}
         */
        this.noInlineConfig = void 0;

        /**
         * Parser definition.
         * @type {DependentParser|null}
         */
        this.parser = null;

        /**
         * Options for the parser.
         * @type {Object}
         */
        this.parserOptions = {};

        /**
         * Plugin definitions.
         * @type {Record<string, DependentPlugin>}
         */
        this.plugins = {};

        /**
         * Processor ID.
         * @type {string|null}
         */
        this.processor = null;

        /**
         * Rule settings.
         * @type {Record<string, [SeverityConf, ...any[]]>}
         */
        this.rules = {};

        /**
         * Shared settings.
         * @type {Object}
         */
        this.settings = {};
    }

    /**
     * Convert this config to the compatible object as a config file content.
     * @returns {ConfigData} The converted object.
     */
    toCompatibleObjectAsConfigFileContent() {
        const {
            /* eslint-disable no-unused-vars */
            configNameOfNoInlineConfig: _ignore1,
            processor: _ignore2,
            /* eslint-enable no-unused-vars */
            ...config
        } = this;

        config.parser = config.parser && config.parser.filePath;
        config.plugins = Object.keys(config.plugins).filter(Boolean).reverse();

        return config;
    }
}

module.exports = { ExtractedConfig };
