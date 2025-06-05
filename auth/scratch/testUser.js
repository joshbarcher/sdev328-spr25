import { schema, createUser, hashPass, validatePass } from './../model/user.js';

//create a user
const user = await createUser("bob", "Super-Password-123?!");
console.log(user);

const valid = await validatePass("Super-Password-123?!", user.password);
if (valid) {
    console.log("Valid password matched");
} else {
    console.log("Rejected valid password");
}

const invalid = await validatePass("Something-else-abc?!", user.password);
if (invalid) {
    console.log("Invalid password matched");
} else {
    console.log("Rejected invalid password");
}