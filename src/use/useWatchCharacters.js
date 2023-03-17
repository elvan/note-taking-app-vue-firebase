import { watch } from 'vue';

export function useWatchCharacters(valueToWatch, maxChars = 1000) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed gosh darnit!`);
    }
  });
}
