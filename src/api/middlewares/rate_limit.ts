import rateLimit from "express-rate-limit";

const limiter = (minutes: number, numbers: number) => {
  return rateLimit({
    windowMs: minutes * 60 * 1000, // minutes
    max: numbers, // Limit each IP to numbers requests per `window` (here, per minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
};

export default limiter;
