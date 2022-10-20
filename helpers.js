function parseVars(vars){
    if (!vars){
        return {};
    }
    if (typeof(vars) === "object"){
        return Object.entries(vars).map(function(key, value){
            return {"key": key, "value": value};
        })
    }
    if (typeof(vars) !== "string"){
        throw "variables must be of type string or object!";
    }
    return vars.split("\n").map(function(line){
        let [key, ...val] = line.split("=");
        if (!val){
            throw "Bad Key=Value format!";
        }
        if (Array.isArray(val)){
            val = val.join("=");
        }
        return {"key": key.trim(), "value": val.trim()};
    });
}

module.exports = {
    parseVars
};
