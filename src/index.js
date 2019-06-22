"use strict";
var Actions;
(function (Actions) {
    Actions["AddUser"] = "Add User";
    Actions["DeleteUser"] = "Delete User";
    Actions["EditUser"] = "Edit User";
    Actions["RemoveUser"] = "Delete User";
})(Actions || (Actions = {}));
function reducer(_state, actions) {
    switch (actions.type) {
        case Actions.AddUser: {
            return 1;
        }
        case Actions.DeleteUser: {
            return 2;
        }
        default: {
            return 4;
        }
    }
}
//# sourceMappingURL=index.js.map