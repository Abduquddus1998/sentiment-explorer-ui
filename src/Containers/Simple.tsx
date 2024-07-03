import { Outlet } from "react-router-dom";

import { SimpleLayout } from "./ContainerStyles";

export default function Simple() {
  return (
    <SimpleLayout>
      <Outlet />
    </SimpleLayout>
  );
}
