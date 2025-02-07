"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var Vector2_1 = require("../Vector2");
var lineTransformer = function (input, svgMeta, options) {
    var id = options.idMapper ? options.idMapper(input) : null;
    var properties = options.propertyMapper
        ? options.propertyMapper(input)
        : null;
    var geometry = {
        type: "LineString",
        coordinates: [
            (0, utils_1.svgPointToCoordinate)(new Vector2_1.default(parseFloat(input.attributes.x1), parseFloat(input.attributes.y1)), svgMeta, options, input.attributes.transform),
            (0, utils_1.svgPointToCoordinate)(new Vector2_1.default(parseFloat(input.attributes.x2), parseFloat(input.attributes.y2)), svgMeta, options, input.attributes.transform),
        ],
    };
    return {
        features: [(0, utils_1.createFeature)(geometry, id, properties)],
        children: [],
    };
};
exports.default = lineTransformer;
//# sourceMappingURL=line.js.map