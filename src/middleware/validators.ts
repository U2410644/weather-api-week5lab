import { param, ValidationChain } from "express-validator";

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
export const validateCityName: ValidationChain = param("city")
  // Check if the city param is a string
  .isString()
  // Check if the city param is either "london" or "dublin"
  .isIn(["london", "dublin"])
  // Set a custom error message
  .withMessage("City name must be either london or dublin");
