<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
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

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/*
  imports
*/

import AddEditNote from '@/components/Notes/AddEditNote.vue';
import Note from '@/components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
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
</script>
