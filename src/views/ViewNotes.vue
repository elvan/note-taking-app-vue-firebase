<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue';

/*
  notes
*/

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
</script>
