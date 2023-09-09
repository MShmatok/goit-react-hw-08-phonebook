import { configureStore } from "@reduxjs/toolkit";
import { reducerContacts } from "./slice";
import { reducerRoot } from "./root/slice";
import { reducerAuth } from "./auth/slice";

export const store = configureStore({
    reducer: {
        contact: reducerContacts,
        root: reducerRoot,
        auth: reducerAuth,
    },

});
