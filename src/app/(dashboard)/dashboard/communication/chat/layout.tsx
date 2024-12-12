"use client";

import { ReactNode, Suspense } from "react";
import SubHeader from "@/components/layouts/SubHeader";
import Sidebar from "./_components/sidebar";

function LayoutChat({ children }: { children: ReactNode }) {
  return (
    <>
      <SubHeader title="Chat" />

      <div className="flex relative overflow-hidden gap-4">
        <Sidebar />

        {children}
      </div>
    </>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <LayoutChat>{children}</LayoutChat>
    </Suspense>
  );
}
