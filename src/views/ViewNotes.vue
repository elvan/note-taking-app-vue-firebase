<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-info"
      max="100"
    />

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
/*
  imports
*/

import AddEditNote from '@/components/Notes/AddEditNote.vue';
import Note from '@/components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';
import { ref } from 'vue';

/*
  store
*/

const storeNotes = useStoreNotes();

/*
  notes
*/

const newNote = ref('');
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextarea();
};

/*
  watch characters
*/

useWatchCharacters(newNote);
</script>
