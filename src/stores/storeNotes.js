import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            "Consider acknowledge I of there infinity, as privilege not help and blind sections. What's plans. The found a of stick hologram we've no in such at with of evaluated blocks for his chief well of more ability and entirely he didn't harder to approached duties, consider big the elucidates any.",
        },
        {
          id: 'id2',
          content: 'And they pass cheek, there real',
        },
      ],
    };
  },
});
