export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "settings.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealsUsers = [
  {
    id: 1,
    img: "https://picsum.photos/300/300",
    username: "Jane Doe",
    email: "jane@doe.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://picsum.photos/300/300",
    username: "Nelly Bronx",
    email: "nelly@company.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://picsum.photos/300/300",
    username: "Brent Reeves",
    email: "brent@company.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://picsum.photos/300/300",
    username: "Adeline Watson",
    email: "watson@company.com",
    amount: "2.566",
  },
  {
    id: 5,
    img: "https://picsum.photos/300/300",
    username: "Juan Harrington",
    email: "juan@company.com",
    amount: "2.432",
  },
  {
    id: 6,
    img: "https://picsum.photos/300/300",
    username: "Lora Jackson",
    email: "jackson@company.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://picsum.photos/300/300",
    username: "Tommy Smith",
    email: "tommy@company.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};
