/** DEPENDENCIES */
require("module-alias/register"); /** LOAD ALIAS FOR CUSTOM MODULES */

const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const Parse = require("parse/node").Parse;
const path = require("path");

if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv"); /** UNCOMMENT WHEN SERVER IS IN LOCALHOST */
  dotenv.config(); /** UNCOMMENT WHEN SERVER IS IN LOCALHOST */
}

/** NODE ENVIRONMENT VARIABLES */
const NODE_ENV = process.env.NODE_ENV;
const APP_NAME = process.env.APP_NAME;
const APP_ID = process.env.PARSE_APP_ID;
const MASTER_KEY = process.env.PARSE_MASTER_KEY;
const SERVER_URL = process.env.PARSE_SERVER_URL;
const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL;
const UNDER_CONSTRUCTION = process.env.UNDER_CONSTRUCTION;
const API_SERVER_URL = process.env.API_SERVER_URL;
const WEB_PATH = process.env.WEB_PATH;

/** PARSE API */
Parse.initialize(APP_ID);
Parse.serverURL = SERVER_URL;
Parse.masterKey = MASTER_KEY;

global.Parse = Parse;
global.APP_NAME = APP_NAME || 'Zynappse';

const dev = NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

/** EXPRESS ROUTES in ./routes FOLDER */
const Routes = require("./routes");

app.prepare()
.then(() => {
  const server = express()

  server.use(cors());
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(cookieParser());

  /** Pass other ecosystem variables into the client. */
  server.use((req, res, next) => {
    res.locals.UNDER_CONSTRUCTION = UNDER_CONSTRUCTION;
    res.locals.WEB_PATH = WEB_PATH;
    res.locals.API_SERVER_URL = API_SERVER_URL;
    next();
  });

  server.get(
    /^\/public\//,
    (_, res, nextHandler) => {
      res.setHeader(
        "Cache-Control",
        "public, max-age=31536000",
      );
      res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
      nextHandler();
    },
  );

  server.use("/api", Routes);

  /** Get portfolio */
  server.get("/portfolio", (req, res) => {
    const filePath = path.join(__dirname, "public", "sample.pdf");
    const fileName = "sample.pdf";

    /** Set the appropriate headers to open the file in a new browser tab */
    res.setHeader('Content-disposition', 'inline; filename=' + fileName);
    res.setHeader('Content-type', 'application/pdf');

    /** Send the PDF file as the response */
    res.sendFile(filePath);
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  let httpServer = require('http').createServer(server);

  if (PROTOCOL === 'https') {
    let fs = require('fs');
    let options = {
      ca: fs.readFileSync(process.env.CA),
      key: fs.readFileSync(process.env.KEY),
      cert: fs.readFileSync(process.env.CERT)
    };

    httpServer = require('https').createServer(options, server);
  }

  httpServer.keepAliveTimeout = 0;

  httpServer.listen(PORT, (err) => {
    if (err)
      throw err
    console.log(`Zynappse Website is running...`)
  });
});