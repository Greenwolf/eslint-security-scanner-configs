# eslint-scanner-configs
Config files to turn ESLint into a mini Security Scanner for running static analysis on JavaScript to identify bugs and vulnerabilities.

# Installation
brew install npm

npm i -g eslint eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-config-semistandard eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized eslint-plugin-prototype-pollution-security-rules eslint-plugin-angularjs-security-rules eslint-plugin-react eslint-plugin-security eslint-plugin-no-wildcard-postmessage

git clone https://github.com/Greenwolf/eslint-security-scanner-configs

# Usage 

cd eslint-security-scanner-configs

eslint -c eslintrc-light.js ./myjavascript.js



# Author
* **Jacob Wilkin** - *Research and Development* - [Trustwave SpiderLabs](https://github.com/SpiderLabs)

# Credits
* **Lewis Arden** - *Inspiration & Initial Config file code* <br/>
prototype-pollution-security-rules: https://github.com/LewisArdern/eslint-plugin-prototype-pollution-security-rules <br/>
angularjs-security-rules: https://github.com/LewisArdern/eslint-plugin-angularjs-security-rules

* **mozfreddyb** <br/>
scanjs-rules: https://github.com/mozfreddyb/eslint-plugin-scanjs-rules <br/>
no-wildcard-postmessage: https://github.com/mozfreddyb/eslint-plugin-no-wildcard-postmessage

* **mozilla** <br/>
no-unsanitized: https://github.com/mozilla/eslint-plugin-no-unsanitized

* **nodesecurity** <br/>
security: https://github.com/nodesecurity/eslint-plugin-security

* **yannickcr** <br/>
react: https://github.com/yannickcr/eslint-plugin-react
