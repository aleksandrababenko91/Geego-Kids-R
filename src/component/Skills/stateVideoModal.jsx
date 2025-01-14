import { create } from 'zustand';

const stateVideoModal = create((set) => ({
  isOpen: false,
  selectedTask: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, selectedTask: null }),
  setSelectedTask: (task) => set({ selectedTask: task }),
}));

export default stateVideoModal;