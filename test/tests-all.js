import "./tests-crud-hooks";
import "./tests-misc";
import "./tests-yield";
import "./tests-whereclause.js";
import "./tests-collection.js";
import "./tests-table.js";
import "./tests-extendability.js";
import "./tests-promise.js";
import "./tests-transaction.js";
import "./tests-open.js";
import "./tests-exception-handling.js";
import "./tests-upgrading.js";
//import "./tests-performance.js"; Not required. Should make other performance tests separately instead.

// This gets replaced by karma webpack with the updated files on rebuild 
var __karmaWebpackManifest__ = [];
 
// require all modules ending in "_test" from the 
// current directory and all subdirectories 
var testsContext = require.context(".", true, /tests-$/);
 
function inManifest(path) {
  return __karmaWebpackManifest__.indexOf(path) >= 0;
}
 
var runnable = testsContext.keys().filter(inManifest);
 
// Run all tests if we didn't find any changes 
if (!runnable.length) {
  runnable = testsContext.keys();
}
 
runnable.forEach(testsContext);