import React from "react";
import PageContent from "../components/PageContent";

import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function Error() {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message; // without using json from react-router-dom
    message = error.data.message ;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "Couldnt find resource or page";
  }
  return (<>
    <MainNavigation/>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  </>
  );
}
