# Kaholo Newman (Postman) Plugin
This plugin extends Kaholo to be able to run postman collections using [Newman](https://www.npmjs.com/package/newman). Whether you're a backend developer trying to debug an API, a frontend developer doing exploratory testing, a full-stack developer who needs to work in parallel with other teams to accelerate application development, or a quality engineer who needs to perform automated testing, [Postman's comprehensive API testing](https://www.postman.com/api-platform/api-testing/) tools are ready for you.

## Method: Run Collection
Run a postman test collection with optional environment, environment variables, global variables, and additional options.

Most of the parameters can be satisfied using the Kaholo code layer. For example, to provide Environment Variables as an object you could put this on the code page:

    website_vars = {
        "values": [
            {
                "value": "http://10.52.3.7/",
                "key": "URL"
            }
        ]
    }

Next for the parameter toggle the switch to use the code layer and then enter simply:

    website_vars

### Parameter: Collection
The path to a [Postman collection](https://learning.postman.com/docs/running-collections/running-collections-overview/) json file. Postman collections conform to a [Postman-specific schema](https://schema.getpostman.com/json/collection/v2.1.0/collection.json).

### Parameter: Environment
A file path or URL to a Postman environment, which can be used as a source of environment variables.

### Parameter: Environment Variables
Environment variables to apply to the collection. You can enter multiple values by separating each with a new line. For example,

    URL=http://10.52.3.7/

Environment variables appear in the collection JSON inside double curly braces. For example,

    "url": {
            "raw": "{{URL}}api/v2/getversion",
            ...


### Parameter: Global Variables
Global Variables are another type of environment variable that can be used in Postman. Environment variables with the same name as Global Variables effectively override them.

### Parameter: Options
This parameter can cover any other options newman accepts. Enter the value as an object from the code. *Notice! The object will be merged with the parameters provided above, so if the Options include `collection`, `environment`, `envVar`, or `globals` the ones provided above will be overridden.* To provide options toggle the parameter's switch to use the code layer and provide an object. For example:

    options = {"iterationCount": 3}
