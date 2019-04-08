module.exports = {
  "env" : {
    "browser" : true,
    "es6" : true /** all es6 features except modules */
  },
  "plugins" : [
    // Standard Rules
    "scanjs-rules",
    "no-unsanitized",
    "prototype-pollution-security-rules"
  ],
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
    "prototype-pollution-security-rules/detect-deep-extend": 1


  }
};
