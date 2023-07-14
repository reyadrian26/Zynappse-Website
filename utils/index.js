/** LIBRARIES */
import useSWR from "swr";

/** FUNCTIONS */
const {
  ASSESS_PASSWORD
} = require("./password-validation");

/** Input field validators */
const IS_UNDEFINED = obj => typeof obj === "undefined";
const IS_EMPTY_STRING = obj => obj === "";
const IS_NULL = obj => obj === null;
const IS_LENGTH_ZERO = obj => obj.length === 0;
const IS_VALID = obj => !IS_UNDEFINED(obj) && !IS_NULL(obj) && !IS_EMPTY_STRING(obj);
const IS_FUNCTION_VALID = obj => !IS_UNDEFINED(obj) && typeof obj === "function";

/** Generate random string */
const GENERATE_RANDOM = (length = 0, type = "") => {
  let text = "",
      stringPosible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      numberPosible = "0123456789",
      stringNumberPosible = `${stringPosible}${numberPosible}`,
      possible = stringNumberPosible;

  if (type === "string") {
    possible = stringPosible;
  } else if (type === "number") {
    possible = numberPosible;
  }

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

/**
 * Fetch handler for SWR only
 * @param {string} url - API endpoint
 * @param {boolean} isExternal - If the API is from the external source. Default value is false.
 * @returns {Promise} response - Promise object to return the data based on the API url
 */
const FETCHER = async ({ url, isExternal = false }) => {
  const axios = (await import("axios")).default;

  let apiServerUrl = !isExternal ? window.__NEXT_DATA__.props.API_SERVER_URL : "";

  return axios.get(`${apiServerUrl}${url}`).then((res) => res.data);
};

/**
 * To fetch the data using SWR library
 * @param {string} url - API endpoint
 * @param {boolean} isExternal - If the API is from the external source. Default value is false.
 * @returns {Object} response - Response JSON object
 * @returns {Object} response.data - It contains data returned from the API
 * @returns {boolean} response.isLoading - If the data is loading from the API
 * @returns {boolean} response.isError - If the API returns an error
 */
const FETCH_SWR_DATA = ({ url, isExternal = false }) => {
  
  /** SWR options */
  let swrOptions = { 
    /** To disable real-time update when focused. Set to false */
    revalidateOnFocus: false,
  };

  const {
    data,
    error
  } = useSWR(
    url,
    (url) => FETCHER({ url, isExternal }),
    swrOptions
  );

  return {
    data,
    isLoading: !error &&
    !data,
    isError: error,
  }
}

/** To format contact number from the input */
const FORMAT_CONTACT_NUMBER = ({ countryCallingCode, number }) => {
  let contactNumber = number.replace(countryCallingCode, "");
  return countryCallingCode + contactNumber;
};

/**
 * To check if the email is valid or not
 * @param {string} email - user's email
 * @returns {boolean} isValid - either true or false
 */
const IS_EMAIL_VALID = (email) => {
  return String(email)
          .toLowerCase()
          .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

/**
 * To encode a string using Buffer
 * @param {string} data - A value to be encoded
 * @returns {string} encoded - Encoded base64 data
 */
const ENCODE_BASE64 = (data) => {
  return Buffer.from(data).toString("base64");
}

module.exports = {
  IS_UNDEFINED,
  IS_EMPTY_STRING,
  IS_NULL,
  IS_VALID,
  IS_LENGTH_ZERO,
  /** require specific parameter ex. IS_PARAMETER_INCOMPLETE({ firstName, lastName }) */
  IS_PARAMETER_INCOMPLETE: jsonObject => {
    for (let key in jsonObject) {
      if (IS_UNDEFINED(jsonObject[key]) || IS_EMPTY_STRING(jsonObject[key])) {
        return `${key} is required.`;
      }
    }

    return false;
  },
  IS_WRONG_PARAMETER_TYPE: objectArray => { /** validate the type of parameters ex. IS_WRONG_PARAMETER_TYPE([ { firstName, type: 'string' }, { lastName, type: 'string'} ]) */
    for (let item of objectArray) {
      let keys = Object.keys(item),
        indexOfType = keys.indexOf("type"),
        indexOfParameter = indexOfType === 1 ? 0 : 1;

      if (item.type.toLowerCase() !== typeof item[keys[indexOfParameter]]) {
        return `${keys[indexOfParameter]} should be ${item.type}`;
      }
    }

    return false;
  },
  RETRIEVE_ALL: query => {
    return new Promise((resolve, reject) => {
      let result = [];
      let chunk_size = 1000;
      let processCallback = function(res) {
        result = result.concat(res);
        if (res.length === chunk_size) {
          process(res[res.length - 1].id);
        } else {
          resolve(result);
        }
      };
      let process = function(skip) {
        if (skip) {
          query.greaterThan("objectId", skip);
        }
        query.limit(chunk_size);
        query.find().then(
          function(res) {
            processCallback(res);
          },
          function(error) {
            console.log(error);
            reject(error);
          }
        );
      };
      process(false);
    });
  },
  GENERATE_RANDOM,
  ASSESS_PASSWORD,
  FETCH_SWR_DATA,
  FORMAT_CONTACT_NUMBER,
  IS_EMAIL_VALID,
  IS_FUNCTION_VALID,
  ENCODE_BASE64,
};