import { createSelector } from "@reduxjs/toolkit";

const routerPathSelector = (state) => state?.router?.location?.pathname || "";

const selectIsArchiveRoute = createSelector(
  [routerPathSelector],
  (pathname) => pathname === "/archive",
);

export default selectIsArchiveRoute;
