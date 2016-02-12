# no-console
## disallow use of console

Do not use `console` commands within your code.

### Example:

###### Good
```js
// either nothing... or if you really want to log something:
myProperLoggingUtility.log('foo');
```

###### Bad, use of console
```js
console.log('foo');
```

### Justification

`console.log` is a tool which is fine to use when debugging code (if you don't have any better tools), however `console.log`s have a habit of being left inside code and accidentally committed. What if you really want to log something? Well, console.log isn't really a suitable utility for proper logging in production environments. Firstly: some older browsers don't have `console` - or they only set it if the developer tools are open, meaning users (who don't have devtools open) will see your JS crash. Secondly, and perhaps most importantly: console.log only reports logs to, well, the console. In the browser, this means you wont get to see the logs of your users, and on Node.js logging to stdout (where console.log goes to) is a blocking operation, which means logging large bodies of text can actually stop your application responding until all text has been output. There are more useful places to send logs to, such as log aggregators.

Instead of using `console.log`, you should look at more useful logging utilities, such as [Bunyan](https://github.com/trentm/node-bunyan) or [Winston](https://github.com/winstonjs/winston), and instead of logging to `stdout` or into the void of your users consoles, consider log aggregator services such as [Loggly](https://www.loggly.com/)(SaaS), [Papertrail](https://papertrailapp.com/)(SaaS) or [ELK](https://www.elastic.co/webinars/introduction-elk-stack)(Open Source, Hosted).

### How to disable

If you really want to use `console.log` in lieu of proper logging, you can disable this setting project wide like so:

###### package.json (project-wide)
```json
"eslintConfig": {
  "extends": ["strict/es5"],
  "rules": {
    "no-console": 0
  }
}
```

Sometimes you might have a really really good reason for using console.log (for example, just logging a simple "server started" message, or perhaps logging "Were hiring" in the browser, so that users who open their devtools will see it), in these very rare circumstances, it's ok to disable this feature for just those lines.

###### \*.js (for blocks of code, when you really need it)
```js
server.listen(config.port, function () {
  /* eslint-disable no-console */
  // I need to use console.log here, as I want this to be
  // logged to the terminal and not our logging service
  console.log('server listening on port ' + config.port);
  /* eslint-enable no-console */ // < don't forget to re-enable it!
});
```
