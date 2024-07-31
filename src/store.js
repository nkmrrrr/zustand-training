import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useStore = create(
//   persist(
//     (set) => ({
//       count: 1,
//       increase: () => set((state) => ({ count: state.count + 1 })),
//       decrease: () => set((state) => ({ count: state.count - 1 })),
//       reset: () => set({ count: 0 }),
//     }),
//     {
//       name: "count-store",
//     }
//   )
// );

const useStore = create(
  persist(
    (set) => ({
      users: [],
      getUsers: async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        set({ users: await response.json() });
      },
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
    }),
    { name: "user-store" }
  )
);

export default useStore;
