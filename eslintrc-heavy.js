module.exports = {
  "env" : {
    "browser" : true,
    "es6" : true /** all es6 features except modules */
  },
  "plugins" : [
    // use plugin to handle html files
    "html",
    // Standard Rules
    "scanjs-rules",
    "no-unsanitized",
    "prototype-pollution-security-rules",
    // NodeJS Rules
    "security",
    "no-wildcard-postmessage",
    // Augular Rules
    "angularjs-security-rules",
    // React Rules
    "react"
  ],
  "extends" : [
    /** security (include all nodeJS rules) rules**/
    "plugin:security/recommended",
  ],
  "settings": {
        // setting to enable different html file types
        "html/html-extensions": [".html", ".htm"],  // consider .html and .we files as HTML
  },
  "rules" : {
    /** useful rules from eslint **/

    /** ScanJS rules **/
    "scanjs-rules/accidental_assignment": 1,
    "scanjs-rules/assign_to_hostname" : 1,
    "scanjs-rules/assign_to_href" : 1,
    "scanjs-rules/assign_to_location" : 1,
    "scanjs-rules/assign_to_onmessage" : 1,
    "scanjs-rules/assign_to_pathname" : 1,
    "scanjs-rules/assign_to_protocol" : 1,
    "scanjs-rules/assign_to_search" : 1,
    "scanjs-rules/assign_to_src" : 1,
    "scanjs-rules/call_Function" : 1,
    "scanjs-rules/call_addEventListener" : 1,
    "scanjs-rules/call_addEventListener_deviceproximity" : 1,
    "scanjs-rules/call_addEventListener_message" : 1,
    "scanjs-rules/call_connect" : 1,
    "scanjs-rules/call_eval" : 1,
    "scanjs-rules/call_execScript" : 1,
    "scanjs-rules/call_hide" : 1,
    "scanjs-rules/call_open_remote=true" : 1,
    "scanjs-rules/call_parseFromString" : 1,
    "scanjs-rules/call_setImmediate" : 1,
    "scanjs-rules/call_setInterval" : 1,
    "scanjs-rules/call_setTimeout" : 1,
    "scanjs-rules/identifier_indexedDB" : 1,
    "scanjs-rules/identifier_localStorage" : 1,
    "scanjs-rules/identifier_sessionStorage" : 1,
    "scanjs-rules/new_Function" : 1,
    "scanjs-rules/property_addIdleObserver" : 1,
    "scanjs-rules/property_createContextualFragment" : 1,
    "scanjs-rules/property_crypto": 1,
    "scanjs-rules/property_geolocation" : 1,
    "scanjs-rules/property_getUserMedia" : 1,
    "scanjs-rules/property_indexedDB" : 1,
    "scanjs-rules/property_localStorage" : 1,
    "scanjs-rules/property_mgmt" : 1,
    "scanjs-rules/property_sessionStorage" : 1,

    /** no-unsanitized rules**/
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",

    /** prototype-pollution-security-rules rules**/
    "prototype-pollution-security-rules/detect-merge": 1,
    "prototype-pollution-security-rules/detect-merge-objects": 1,
    "prototype-pollution-security-rules/detect-merge-options": 1,
    "prototype-pollution-security-rules/detect-deep-extend": 1,

    /** no-wildcard-postmessage (NodeJS) rules**/
    "no-wildcard-postmessage/no-wildcard-postmessage": 1,

    /** angularjs-security-rules (Angular) rules**/
    "angularjs-security-rules/detect-angular-element-methods": 1,
    "angularjs-security-rules/detect-angular-open-redirect": 1,
    "angularjs-security-rules/detect-angular-orderBy-expressions": 1,
    "angularjs-security-rules/detect-angular-resource-loading": 1,
    "angularjs-security-rules/detect-angular-sce-disabled": 1,
    "angularjs-security-rules/detect-angular-scope-expressions": 1,
    "angularjs-security-rules/detect-angular-service-expressions": 1,
    "angularjs-security-rules/detect-angular-trustAs-methods": 1,
    "angularjs-security-rules/detect-angular-trustAsCss-method": 1,
    "angularjs-security-rules/detect-angular-trustAsHtml-method": 1,
    "angularjs-security-rules/detect-angular-sce-disabled": 1,
    "angularjs-security-rules/detect-angular-trustAsJs-method": 1,
    "angularjs-security-rules/detect-angular-trustAsResourceUrl-method": 1,
    "angularjs-security-rules/detect-angular-trustAsUrl-method": 1,
    "angularjs-security-rules/detect-third-party-angular-translate": 1,

    /** react (React) rules**/
    // Some rules have been removed which require additional specific configuration
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "error",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "error",
    "react/forbid-elements": "error",
    "react/forbid-prop-types": "error",
    "react/forbid-foreign-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "error",
    "react/no-typos": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": "error",
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": "error",
    "react/jsx-indent-props": "error",
    "react/jsx-key": "error",
    "react/jsx-max-depth": "error",
    "react/jsx-max-props-per-line": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-default-props": "error",
    "react/jsx-sort-props": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error"

  },
  "settings" : {
    "react" : {
        "version": "latest"
    }
  }
};
