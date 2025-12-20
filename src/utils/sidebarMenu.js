import { Home,    ShoppingBag,   ListPlus, Package, Settings  } from "lucide-react";

export const sidebarMenu = [
    {
        label: "Statistics",
        path: "/dashboard",
        icon: Home
    },
    {
        label: "Add Book",
        path: "/dashboard/add-book",
        icon:   ListPlus
    },
    {
        label: "My Orders",
        path: "/dashboard/my-orders",
        icon: ShoppingBag
    },
    {
        label: "My Inventories",
        path: "/dashboard/my-inventories",
        icon: Package
    },
    {
        label: "Manage Orders",
        path: "/dashboard/manage-orders",
        icon: Settings
    },
];
