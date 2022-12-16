const yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
  .version(false)
  .commandDir('cmds')
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .parse()
