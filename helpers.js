function parseVars(vars) {
  if (!vars) {
    return {};
  }
  if (typeof (vars) === "object") {
    return Object.entries(vars).map((key, value) => ({ key, value }));
  }
  if (typeof (vars) !== "string") {
    throw new Error("variables must be of type string or object!");
  }
  return vars.split("\n").map((line) => {
    let segments = line.split("=");
    const key = segments.shift();
    if (!segments) {
      throw new Error("Bad Key=Value format!");
    }
    if (Array.isArray(segments)) {
      segments = segments.join("=");
    }
    return { key: key.trim(), value: segments.trim() };
  });
}

module.exports = {
  parseVars,
};
