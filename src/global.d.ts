// src/global.d.ts

declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
  
  export {};
  