"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const tagManagerArgs = { gtmId };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
}
