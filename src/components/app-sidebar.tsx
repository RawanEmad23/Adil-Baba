import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarGroup,
  SidebarItem,
  SidebarContent,
} from "@shadcn/ui";

export default function MySidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem icon="🏠" label="Home" />
            <SidebarItem icon="📥" label="Inbox" />
            <SidebarItem icon="📅" label="Calendar" />
            <SidebarItem icon="🔍" label="Search" />
            <SidebarItem icon="⚙️" label="Settings" />
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
