"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const weatherController_js_1 = require("../controllers/weatherController.js");
const validators_js_1 = require("../middleware/validators.js");
// We will create a router object
const router = express_1.default.Router();
// We will create a route for the weather data based on the city name
router.get("/:city", validators_js_1.validateCityName, weatherController_js_1.getWeatherData);
// We will export the router
exports.default = router;
//# sourceMappingURL=weatherRoute.js.map