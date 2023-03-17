<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import Note from '@/components/Notes/Note.vue';
import { ref } from 'vue';

/*
  notes
*/

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 'id1',
    content:
      "Consider acknowledge I of there infinity, as privilege not help and blind sections. What's plans. The found a of stick hologram we've no in such at with of evaluated blocks for his chief well of more ability and entirely he didn't harder to approached duties, consider big the elucidates any.",
  },
  {
    id: 'id2',
    content: 'And they pass cheek, there real',
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
};

/*
  delete note
*/

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
