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
        {
          id: 'id3',
          content:
            'Embarkation with said from horses design important. To fur or his how name stands been founder, pain forth. The human the and how invitation but not, having needs considerations, the preparations however far to that yet by approved royal tell have on drops. Concepts the brief is that was intended.',
        },
      ],
    };
  },
});
