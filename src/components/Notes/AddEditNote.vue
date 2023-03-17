<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="newNoteRef"
          class="textarea"
          placeholder="Add a new note..."
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  props
*/

const props = defineProps({
  newNote: {
    type: String,
    required: true,
  },
});

/*
  emits
*/

const emit = defineEmits(['update:modelValue']);
</script>
