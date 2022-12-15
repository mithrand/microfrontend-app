const yargs = require('yargs/yargs')

yargs(process.argv.slice(2))
  .version(false)
  .commandDir('cmds')
  .command({
    command: 'start',
    aliases: ['start'],
    desc: 'Start the app for development purposes in a stand alone mode',
  })
  .command({
    command: 'serve',
    aliases: ['serve'],
    desc: 'Start a local server for statics file servings production builds',
  })
  .command({
    command: 'build',
    aliases: ['build'],
    desc: 'generate production builds under ./dist folder',
  })
  .command({
    command: 'analyse',
    aliases: ['analyse'],
    desc: 'generate production build under ./dist folder and create a bundle report',
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .parse()