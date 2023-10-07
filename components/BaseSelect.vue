<script setup>
const emit = defineEmits(["input"]);
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    required: true,
  },
  default: {
    type: String,
    required: false,
    default: null,
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
});

const open = ref(false);

const selected = ref(
  props.default
    ? props.default
    : props.options.length > 0
    ? props.options[0]
    : null
);

onMounted(() => {
  emit("input", selected.value);
});
</script>

<template>
  <label
    class="relative rounded border-b-2 invalid:border-red-500 flex-1 bg-white px-2 py-1 text-gray-800"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <p class="text-xs font-medium" @click="open = !open">{{ props.label }}</p>
    <div
      class="flex justify-between items-start"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
      <Icon
        :class="{ 'rotate-180': !open }"
        name="ep:arrow-down-bold"
        size="0.8em"
      />
    </div>
    <div
      class="absolute w-full top-0 left-0 mt-[50px] bg-white shadow p-2"
      :class="{ hidden: !open }"
    >
      <div
        v-for="(option, i) of props.options"
        :key="i"
        class="hover:bg-gray-100 cursor-pointer p-2"
        @click="
          selected = option;
          open = false;
          emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </label>
</template>
