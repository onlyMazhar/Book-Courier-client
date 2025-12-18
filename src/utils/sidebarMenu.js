import { Home, Plus ,ShoppingBag } from "lucide-react";

export const sidebarMenu = [
    {
        label: "Statistics",
        path: "/dashboard",
        icon: Home,
    },
    {
        label: "Add Book",
        path: "/dashboard/add-book",
        icon: Plus,
    },
     {
        label: "My Orders",
        path: "/dashboard/my-orders",
        icon: ShoppingBag ,
    },
];
