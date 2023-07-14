const moment     = require("moment");
const axios      = require("axios");
const Parse      = require("parse");

const getLocalIp = require("./getLocalIp");

function saveTrail (type, params) {
  let json = [];
  let rights = localStorage.rights;

  if (typeof rights !== "undefined") {
    json = JSON.parse(rights);

    let currentMount = window.location.pathname,
        appName = "CMS",
        moduleIndex,
        actionIndex,
        finalParams = "";

    if (typeof params === "string") {
      finalParams = params;
    } else {
      for (let i in params) {
        finalParams += '' + i + ': ' + params[i] + ' | ';
      }

      finalParams = finalParams.trim().substr(0, finalParams.trim().length-1).trim();
    }

    moduleIndex = json.map((item) => {
      let route = "";
      if (appName.toUpperCase() === item.appName.toUpperCase()) {
        route = item.route.toUpperCase()
      }
      return route;
    }).indexOf(currentMount.toUpperCase());

    actionIndex = json[moduleIndex].actions.map((item) => item.name.toUpperCase()).indexOf(type.toUpperCase());

    let moduleObj = json[moduleIndex];

    if (moduleIndex !== -1 && actionIndex !== -1) {
      Promise.all([
        getLocalIp(),
        axios.get('https://api.ipify.org?format=json')
      ])
      .then(([ ip, res ]) => {

        let requestData = {
          accessListId: moduleObj.actions[actionIndex].accessListId,
          userId: Parse.User.current().id,
          clientIp: res.data ? res.data.ip : "",
          localIp: ip,
          userAgent: navigator.userAgent,
          parameters: finalParams
        };

        return Parse.Cloud.run("saveTrailWeb", requestData);
      })
      .then((data) => {
        console.log("save trail ", data);
      })
      .catch((err) => {
        console.log("error ", err);
      });
    } else {
      console.log("moduleId or actionId is undefined");
    }
  } else {
    console.log("rights is undefined");
  }
}

module.exports = saveTrail;
