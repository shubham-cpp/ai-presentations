/* eslint-disable node/prefer-global/process */
/* eslint-disable node/no-process-env */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import type { Slide } from "@/types";

type SlideState = {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
};

export const SLIDE_STORAGE_NAME = "slides-store-data" as const;

const useSlideStore = create<SlideState>()(devtools(persist((set) => {
  return {
    slides: [],
    setSlides: slides => set({ slides }),
  };
}, { name: SLIDE_STORAGE_NAME }), { enabled: process.env?.NODE_ENV !== "production" }));

export default useSlideStore;
