function parseVars(vars){
    if (!vars){
        return {};
    }
    if (typeof(vars) === "object"){
        return vars;
    }
    if (typeof(vars) !== "string"){
        throw "variables must be of type string or object!";
    }
    const varObj = {};
    vars.split("\n").forEach((line) => {
        let [key, ...val] = line.split("=");
        if (!val){
            throw "Bad Key=Value format!";
        }
        if (Array.isArray(val)){
            val = val.join("=");
        }
        varObj[key.trim()] = val.trim();
    });
    return varObj;
}

module.exports = {
    parseVars
};
