const products = [
  {
    id: "1",
    name: "Test Product 1",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "shoes",
    price: 99.99,
    hasSize: true,
    rating: 4.5,
    reviewCount: 12,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "2",
    name: "Test Product 2",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "shoes",
    price: 9.99,
    hasSize: true,
    rating: 5,
    reviewCount: 10,
    sizes: [8, 9, 10, 11, 12],
  },
  {
    id: "3",
    name: "Test Product 3",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "shoes",
    price: 49.99,
    hasSize: true,
    rating: 3,
    reviewCount: 12,
    sizes: [8, 9, 10],
  },
  {
    id: "4",
    name: "Test Product 4",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "shoes",
    price: 79.99,
    hasSize: true,
    rating: 4.5,
    reviewCount: 12,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "5",
    name: "Test Product 5",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "beauty",
    price: 9.99,
    hasSize: false,
    rating: 3.5,
    reviewCount: 5,
    sizes: ["300ml", "500ml"],
  },
  {
    id: "6",
    name: "Test Product 6",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "beauty",
    price: 4.99,
    hasSize: false,
    rating: 2,
    reviewCount: 1,
    sizes: ["300ml", "500ml"],
  },
  {
    id: "7",
    name: "Test Product 7",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "shoes",
    price: 99.99,
    hasSize: true,
    rating: 4.5,
    reviewCount: 12,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "8",
    name: "Test Product 8",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "shoes",
    price: 9.99,
    hasSize: true,
    rating: 5,
    reviewCount: 10,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "9",
    name: "Test Product 9",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "shoes",
    price: 49.99,
    hasSize: true,
    rating: 3,
    reviewCount: 12,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "10",
    name: "Test Product 10",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "shoes",
    price: 79.99,
    hasSize: true,
    rating: 4.5,
    reviewCount: 12,
    sizes: [8, 9, 10, 11, 12, 13],
  },
  {
    id: "11",
    name: "Test Product 11",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "M",
    category: "beauty",
    price: 9.99,
    hasSize: false,
    rating: 3.5,
    reviewCount: 5,
    sizes: ["30ml", "50ml"],
  },
  {
    id: "12",
    name: "Test Product 12",
    image: "https://picsum.photos/600/600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    gender: "F",
    category: "beauty",
    price: 4.99,
    hasSize: false,
    rating: 2,
    reviewCount: 1,
    sizes: ["30ml", "50ml"]

  },
];

export default products;