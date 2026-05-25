import {
  StateDB,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-WUCK74KM.js";
import "./chunk-QHKF7Y75.js";
import "./chunk-3W2A7Q75.js";
import "./chunk-P23LY4ZL.js";
import "./chunk-XCYIHSM3.js";
import "./chunk-MAPMSBQM.js";
import "./chunk-U3PDN3TP.js";
import "./chunk-4VS2DUFX.js";
import "./chunk-MQK6CX43.js";
import "./chunk-VPQJ2QCW.js";
import "./chunk-WQQ2FBH7.js";
import "./chunk-SZE4O3EH.js";
import "./chunk-AXYBE63Z.js";
import "./chunk-EWNE4GCH.js";
import {
  __name
} from "./chunk-4ATG66XX.js";
import "./chunk-JSBRDJBE.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/stateDiagram-v2-BHNVJYJU.mjs
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
