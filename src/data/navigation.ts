import { NavItem } from "@/types";

export const navItems: NavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: "layout-dashboard",
        label: "Dashboard",
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: 'report-analytics',
        label: 'Projects'
    },
    {
        title: "User",
        path: "/users",
        icon: "users",
        label: "user",
    },
    {
        title: "Task",
        path: "/projects/1/tasks",
        icon: "task",
        label: "Tasks",
    },
    {
        title: "Issue",
        path: "/projects/1/issues",
        icon: "issue",
        label: "issue",
    },
    {
        title: "Your Work",
        path: "/your-work",
        icon: "calendar-user",
        label: "employee",
    },
    {
        title: "Day Off",
        path: "/day-off",
        icon: "send-2",
        label: "kanban",
    },
];