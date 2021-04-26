# kaholo-plugin-newman
Kaholo plugin for running postman collections using [Newman](https://www.npmjs.com/package/newman).

## Method: Run Collection
Run a postman collection using Newman. You can view all method options in the [documentation](https://www.npmjs.com/package/newman#newmanrunoptions-object--callback-function--run-eventemitter).

### Parameters:
1. Collection (String\Object) **Required** - Postman collection object or path to the collection json file. When passing the collection itself make sure to pass it as an object from code.
2. Enviroment Variables (Text\Object) **Optional** - Enviroment variables to pass to newman. You can enter multiple values by seperating each with a new line, or you can enter an object from code.
3. Global Variables (Text\Object) **Optional** - Enviroment variables to pass to newman. You can enter multiple values by seperating each with a new line, or you can enter an object from code.
4. Options (Object) **Optional** - Any oyher options newman accepts, to pass to it for the collection execution. Enter value as object from code. *Notice! The object will be merged with the parameters provided above and any object fields matching the ones provided above will be overwritten.*