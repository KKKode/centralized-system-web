import useAuth from "@/hooks/useAuth";
import "@/styles/globals.css";
import { BASE_URL } from "@/utils";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { getUser, user } = useAuth();
  useEffect(() => {
    getUser();
    let agent =
      typeof window !== "undefined" && (window as any).navigator.userAgent;

    (async () => {
      if (
        !agent ||
        !router.pathname ||
        router.pathname === "/" ||
        router.pathname === "/admin-panel"
      )
        return;

      const data = {
        user_id: user?._id,
        activity_type: "page_visit",
        page_name: `${router.pathname.substring(1).toUpperCase()}Screen`,
        additional_info: {
          device_info: agent,
        },
      };
      const res = await fetch(`${BASE_URL}/userActivity/create-activity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
    })();
  }, [router.pathname, getUser, user?._id]);

  return <Component {...pageProps} />;
}
