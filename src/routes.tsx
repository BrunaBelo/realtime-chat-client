import { createBrowserRouter } from "react-router-dom";
import ChatPainel from "./pages/chatPainel";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: '/my-chats',
    element: <ChatPainel/>
  }
]);

export default router;
