// in case of default export 
import User from "./03_export_User.js";

const user: User = new User("user01", "test@test.com");
console.log("03_import_module", user);
