import { create } from 'zustand';

const stateModalSubCategoryGroup = create((set) => ({
  isOpen: false,
  selectedData: null, 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, selectedData: null }), 
  setSelectedData: (challenges) => set({ selectedData: challenges }), 
}));

export default stateModalSubCategoryGroup;