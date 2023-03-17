<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="input"
      type="text"
      placeholder="Do you love NoteTakingApp??"
      v-autofocus
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import { vAutofocus } from '@/directives/vAutofocus';
import { useStoreNotes } from '@/stores/storeNotes';

/*
  store
*/

const storeNotes = useStoreNotes();
</script>
