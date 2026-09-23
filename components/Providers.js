"use client";

import { CookiesProvider } from "react-cookie";

export default function Providers({ children }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
