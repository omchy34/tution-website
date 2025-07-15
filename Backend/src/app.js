import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_CORS_ORIGIN,
  process.env.ADMIN_CORS_ORIGIN
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import routes
import testimonialRoutes from './routes/testimonial.routes.js';
// Routes declaration
app.use('/api', testimonialRoutes);
export { app };
