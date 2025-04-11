import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Redirect } from "./pages/redirect";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/:url-shortened" element={<Redirect />} />
      <Route path="/url/not-found" element={<NotFound />} />
    </Routes>
  )
}