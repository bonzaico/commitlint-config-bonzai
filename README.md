# commitlint-config-bonzai

Shareable commitlint config used at Bonzai.
Use with [@commitlint/cli](https://npm.im/@commitlint/cli) and [@commitlint/prompt-cli](https://npm.im/@commitlint/prompt-cli).

## Getting started

Install the package
```sh
npm install --save-dev commitlint-config-bonzai @commitlint/cli
```

Create a file `commitlint.config.js` and set it's contents as

```javascript
module.exports = {
    extends: ["commitlint-config-bonzai"],
    "scope-enum": [
        1,
        "always",
        ["all", "dev"]
    ]
};
```

This configuration only specifies the message format but does not define the allowed scopes, because
they will vary with project.
