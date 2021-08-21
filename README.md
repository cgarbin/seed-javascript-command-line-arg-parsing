# JavaScript command line parsing

A seed for command-line argument parsing in JavaScript.

Covers:

- Parsing arguments and options
- Showing help text
- Validating presence/absence of mandatory parameters
- Validating parameter type (e.g. expect a number)
- Handling optional parameters
- Handling short (`-v`) and long (`--verbose`) version of parameters
- Splitting/organizing code in modules (one for each command line option)
- Unit test with `mocha` and `chai`

It uses [Commander.js](https://github.com/tj/commander.js/) to parse the arguments.

Sources for this code and command-line programs in general:

- <https://developer.atlassian.com/blog/2015/11/scripting-with-node/>
- <https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/>
- <http://slides.com/timsanteford/conquering-commander-js#/>
- <https://github.com/tj/commander.js/>

## How to work with this program

- Install Node.js, if not yet installed
- Clone the repository
- `cd` to the repository directory
- Install all dependencies: `npm install`
- Run unit tests with `npm test`
- Install as a shell command with `npm install -g`
- During development, link to the working version with `npm link`

The program is now available as `seed-command-line`.

See the `bin` section of [package.json](package.json) to modify name used to invoke the script once installed.

## Examples

This program takes two arguments and a few options (Commander.js gives `--help|-h` for free):

```bash
seed-command-line --help # show help (built by Commander.js)
seed-command-line 1 2 # add the numbers (default option)
seed-command-line 1 2 --operation add
seed-command-line 1 2 --operation multiply
seed-command-line 1 2 --operation multiply --verbose
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
