<script setup>
const emit = defineEmits([
  "update:firstName",
  "update:lastName",
  "update:email",
  "update:country",
  "update:postalCode",
  "update:phoneNumber",
]);

const props = defineProps({
  errors: {
    type: Object,
    default: () => ({}),
  },

  firstName: {
    type: String,
    default: "",
  },

  lastName: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    default: "",
  },

  country: {
    type: String,
    default: "",
  },

  postalCode: {
    type: String,
    default: "",
  },

  phoneNumber: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid md:grid-cols-2 gap-4 md:gap-2">
      <BaseInput
        name="firstName"
        type="text"
        label="First name"
        placeholder="Elon"
        required
        :model-value="props.firstName"
        @update:model-value="emit('update:firstName', $event)"
      />
      <BaseInput
        name="lastName"
        type="text"
        label="Last name"
        placeholder="Musk"
        required
        :model-value="props.lastName"
        @update:model-value="emit('update:lastName', $event)"
      />
    </div>
    <BaseInput
      name="email"
      type="email"
      label="Email"
      placeholder="elon@spacex.com"
      required
      :model-value="props.email"
      @update:model-value="emit('update:email', $event)"
    />
    <div class="grid md:grid-cols-2 gap-4 md:gap-2">
      <BaseSelect
        :options="['Poland', 'United States']"
        :default="props.country"
        label="Country"
        @input="emit('update:country', $event)"
      />
      <BaseInput
        name="postalCode"
        type="text"
        label="Postal Code"
        placeholder="10001"
        mask="#####"
        required
        :model-value="props.postalCode"
        @update:model-value="emit('update:postalCode', $event)"
      />
    </div>
    <BaseInput
      name="phoneNumber"
      type="text"
      label="Phone Number"
      placeholder="(212) 692-93-92"
      mask="(###) ###-##-##"
      required
      :model-value="props.phoneNumber"
      @update:model-value="emit('update:phoneNumber', $event)"
    />
  </div>
</template>
