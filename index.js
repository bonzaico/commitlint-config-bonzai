const DISABLE = 0;
const WARNING = 1;
const ERROR = 2;

const ALWAYS = "always";
const NEVER = "never";

const { lstatSync, readdirSync } = require("fs");
const { join, basename } = require("path");

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
    readdirSync(source).filter(name => isDirectory(join(source, name)));

module.exports = {
    rules: {
        "body-leading-blank": [WARNING, ALWAYS],
        "footer-leading-blank": [WARNING, ALWAYS],
        "header-max-length": [ERROR, ALWAYS, 72],
        "scope-case": [ERROR, ALWAYS, "kebab-case"],
        "subject-case": [ERROR, ALWAYS, ["sentence-case"]],
        "subject-empty": [ERROR, NEVER],
        "subject-full-stop": [ERROR, NEVER, "."],
        "type-case": [ERROR, ALWAYS, "lower-case"],
        "type-empty": [ERROR, NEVER],
        "type-enum": [
            ERROR,
            ALWAYS,
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test"
            ]
        ]
    }
};
