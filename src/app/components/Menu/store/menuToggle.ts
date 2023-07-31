import { create } from "zustand"
import { MenuToggleStateProps } from "../interfaces/Menu"

export const useMenuToggle = create<MenuToggleStateProps>()((set) => ({
  activeKeys: [],
  clearState: () => set(() => ({ activeKeys: [] })),
  setState: (value: string | number, parentMenu?: boolean) =>
    set((state) => {
      let temp = state.activeKeys
      const exist = state.activeKeys.some((item) => item === value)
      if (exist) {
        if (temp.length === 1 || parentMenu) {
          state.clearState()
        }
        temp = temp.filter((item) => item !== value)
      } else {
        if (parentMenu) {
          temp = []
        }
        temp.push(value)
      }
      return { ...state, activeKeys: [...temp] }
    }),
}))
