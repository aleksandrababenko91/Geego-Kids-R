import { create } from 'zustand';

const stateVideoModal = create((set) => ({
  isOpen: false,
  selectedTaskIndex: null,
  tasksWithVideos: [],
  open: (tasks, index) => set({ isOpen: true, tasksWithVideos: tasks, selectedTaskIndex: index }),
  close: () => set({ isOpen: false, selectedTaskIndex: null, tasksWithVideos: [] }),
  next: () => set((state) => {
    const nextIndex = (state.selectedTaskIndex + 1) % state.tasksWithVideos.length;
    return { selectedTaskIndex: nextIndex };
  }),
  prev: () => set((state) => {
    const prevIndex = (state.selectedTaskIndex - 1 + state.tasksWithVideos.length) % state.tasksWithVideos.length;
    return { selectedTaskIndex: prevIndex };
  }),
}));

export default stateVideoModal;
