// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Root from "./components/Root";
import Error from "./pages/Error";
import EventDetailPage,{deleteAction} from "./pages/EventDetail";
import NewEventPage, { action } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Events, { loader as eventLoader } from "./pages/Events";

import { loader as eventDetailLoader } from "./pages/EventDetail";
import EventsRoot from "./pages/EventsRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement:<Error/>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {index: true, element: <Events />,loader: eventLoader},
            {path:":id",id:"event-detail",children:[
              { path: "", element: <EventDetailPage /> , action:deleteAction},
              { path: "edit", element: <EditEventPage /> },
            ],loader:eventDetailLoader},
            // { path: ":id", element: <EventDetailPage />, loader:eventDetailLoader },
            // { path: ":id/edit", element: <EditEventPage />, loader:eventDetailLoader },
            { path: "new", element: <NewEventPage />, action:action},
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
