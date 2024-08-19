import JSConfetti from "js-confetti";

let jsConfetti: JSConfetti;
export const useConfetti = () => {
  return {
    init: () => {
      jsConfetti = new JSConfetti();
    },
    addConfetti: () => {
      jsConfetti.addConfetti();
    },
  };
};
