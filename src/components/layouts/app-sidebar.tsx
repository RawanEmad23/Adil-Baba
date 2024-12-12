import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ChartLine,
  ChevronDown,
  Dot,
  Gauge,
  Grid2x2,
  Megaphone,
  MessageCircleWarning,
  MessagesSquare,
  School,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
  const menuItems = [
    {
      label: "Communication",
      icon: MessagesSquare,
      items: [
        { label: "Email", icon: Dot, href: "/dashboard/communication/email" },
        { label: "Chat", icon: Dot, href: "/dashboard/communication/chat" },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image
            src={"/logo.png"}
            width={900}
            height={900}
            className="p-4 h-20"
            alt={"logo"}
          />
          {/* <h1 className="text-xl font-bold">AdelBaba.net</h1> */}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          <ItemLink isActive href="/dashboard" text="Dashboard" Icon={Gauge} />
          <ItemLink
            href="/dashboard/productsinventory"
            text="Products Inventory"
            Icon={Grid2x2}
          />
          <ItemLink href="/dashboard/Orders" text="Orders" Icon={ChartLine} />
          <ItemLink href="/dashboard/Branches" text="Branches" Icon={School} />
          <ItemLink
            href="/dashboard/Management"
            text="Management"
            Icon={Users}
          />
          <ItemLink
            href="/dashboard/Reborts"
            text="Reborts"
            Icon={MessageCircleWarning}
          />
          <ItemLink
            href="/dashboard/Advertisments"
            text="Advertisements"
            Icon={Megaphone}
          />
          <ItemLinkGroup menuItems={menuItems} />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

const ItemLink = ({
  text,
  href,
  Icon,
  image,
  isActive = false,
}: {
  text: string;
  href: string;
  Icon?: any;
  image?: any;
  isActive?: boolean;
}) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="h-16 rounded-none" asChild>
        <Link
          href={href}
          className={`flex items-center gap-x-2 ${
            isActive && "bg-yellow-500/10 text-primary"
          } px-4`}
        >
          {Icon && <Icon className={`${isActive && "text-primary"}`} />}
          {image && (
            <Image
              src={image}
              width={500}
              height={500}
              alt={text}
              className="size-5"
            />
          )}
          <span>{text}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const ItemLinkGroup = ({ menuItems }: { menuItems: any }) => {
  return (
    menuItems &&
    menuItems.map((group, groupIndex) => (
      <Collapsible key={groupIndex} className="group/collapsible">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger className="flex w-full items-center justify-between !h-16 rounded-none px-4">
              <div className="flex items-center">
                <group.icon className="mr-2" />
                <span>{group.label}</span>
              </div>
              <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent className="px-4">
              <SidebarMenu>
                {group.items &&
                  group.items.map((item, itemIndex) => (
                    <Link href={item.href} key={itemIndex}>
                      <SidebarMenuItem key={itemIndex}>
                        <SidebarMenuButton>
                          <item.icon className="mr-2" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </Link>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    ))
  );
};
