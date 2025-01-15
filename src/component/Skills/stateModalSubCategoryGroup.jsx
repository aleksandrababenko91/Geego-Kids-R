import { create } from 'zustand';

const stateModalSubCategoryGroup = create((set) => ({
  isOpen: false,
  selectedData: null, 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, selectedData: null }), 
  setSelectedData: (skills) => set({ selectedData: skills }), 
}));

export default stateModalSubCategoryGroup;