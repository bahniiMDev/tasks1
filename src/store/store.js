import { configureStore } from "@reduxjs/toolkit";
import tolBarSlice from "./slices/tolBarSlice";
import taskInfoCreateSlice from "./slices/taskInfoCreateSlice";
import headerSlice from "./slices/header";

export const store = configureStore({
  reducer: {
    tolBar: tolBarSlice,
    taskInfo: taskInfoCreateSlice,
    header: headerSlice,
  },
});
