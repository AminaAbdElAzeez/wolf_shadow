import { routing } from "/src/i18n/routing";
import React from "react";
import BaseLayout from "./[locale]/components/BaseLayout/BaseLayout";

function NotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <h1>404 not found main</h1>
    </BaseLayout>
  );
}

export default NotFound;
