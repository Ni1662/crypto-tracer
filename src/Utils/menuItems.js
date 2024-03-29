import { dashboard, expenses, users, trend, bitcoin } from "../Utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "User Profile",
    icon: users,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
  {
    id: 5,
    title: "Crypto Wishlist",
    icon: bitcoin,
    link: "/crypto",
  },
];
