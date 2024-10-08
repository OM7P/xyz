'use client'
import { create } from "zustand";

const useStore = create((set) => ({
  Data: [],
  popuplist: [],
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    
}}));

export default useStore;


