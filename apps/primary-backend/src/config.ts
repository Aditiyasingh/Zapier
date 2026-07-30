if (!process.env.JWT_PASSWORD) {
  throw new Error("FATAL ERROR: JWT_PASSWORD is not defined in the environment.");
}

export const JWT_PASSWORD = process.env.JWT_PASSWORD;