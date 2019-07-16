# Check Env Return Val

check your env variables and return your checked env values.
If all your env values passed, then it will return your checked env values.
Otherwise, it will throw an error of a undefined variable or variables.

## Usage

at your nodejs application : `npm i check-env-return-val` 

use it:

```js
// config.js
const checkEnvReturnVal = require('check-env-return-val')

// your env values that will use in your nodejs application.
// return: it will return checked object that include your env values, which will be easily deconstruct.
// like: {"REGION" : "CHINA", "ACCESS_KEY_ID": "special id", "ACCESS_KEY_SECRET": "strong secret"}
const checkedEnvsObj = checkEnvReturnVal(['REGION',"ACCESS_KEY_ID","ACCESS_KEY_SECRET"])

module.exports = checkedEnvsObj
```

# License

MIT