import cors from "cors";
import { Request } from "express";

const allow_domain = ["https://www.example.com"];
const corsOptionsDelegate = function (
  req: Request,
  callback: CallableFunction
) {
  let corsOptions;
  if (allow_domain.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

export default cors(corsOptionsDelegate);
