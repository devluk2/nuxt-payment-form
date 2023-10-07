<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  pattern: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <label
    class="rounded border-b-2 invalid:border-red-500 flex-1 bg-white px-2 py-1 text-gray-800"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xs font-medium">{{ props.label }}</p>
        <input
          v-maska
          :data-maska="[props.mask]"
          data-maska-eager
          :name="props.name"
          :type="props.type"
          :placeholder="props.placeholder"
          :required="props.required ? true : undefined"
          :pattern="!!props.pattern ? props.pattern : undefined"
          :value="props.modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          class="focus:outline-none placeholder:text-gray-500"
        />
      </div>
      <slot class="flex-shrink-0" />
    </div>
    <span v-show="props.error?.length">{{ props.error }}</span>
  </label>
</template>
