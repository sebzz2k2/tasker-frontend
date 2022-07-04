import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/reducer";

export const store = configureStore({ reducer });

// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "../redux/index";
// export const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }),
//   devTools: true,
// });
