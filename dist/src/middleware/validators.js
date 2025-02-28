"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCityName = void 0;
const express_validator_1 = require("express-validator");
/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *   "/:city",
 *   validateCityName,
 *   getWeatherData
 * );
 */
exports.validateCityName = (0, express_validator_1.param)("city")
    // Check if the city param is a string
    .isString()
    // Check if the city param is either "london" or "dublin"
    .isIn(["london", "dublin"])
    // Set a custom error message
    .withMessage("City name must be either london or dublin");
//# sourceMappingURL=validators.js.map