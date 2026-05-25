import {
  selectSvgElement
} from "./chunk-LG27ZH4Z.js";
import {
  parse
} from "./chunk-7D6RYQ64.js";
import "./chunk-2PMLCMQG.js";
import "./chunk-PPDX3L2Y.js";
import "./chunk-LEPIKDPP.js";
import "./chunk-EFRIWQPB.js";
import "./chunk-77FMZJHF.js";
import "./chunk-653X6QT2.js";
import "./chunk-537HCW7W.js";
import "./chunk-ND2QV6PV.js";
import "./chunk-MJRFX2VD.js";
import "./chunk-OZTBPH7R.js";
import "./chunk-M2KJYY3V.js";
import {
  configureSvgSize
} from "./chunk-EWNE4GCH.js";
import {
  __name,
  log
} from "./chunk-4ATG66XX.js";
import "./chunk-JSBRDJBE.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-5YYISTIA.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.15.0" + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
