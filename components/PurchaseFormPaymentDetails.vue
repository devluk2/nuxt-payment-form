<script setup>
const emit = defineEmits([
  "update:creditCardNumber",
  "update:securityCode",
  "update:expirationDate",
]);

const props = defineProps({
  errors: {
    type: Object,
    default: () => ({}),
  },

  creditCardNumber: {
    type: String,
    default: "",
  },

  securityCode: {
    type: String,
    default: "",
  },

  expirationDate: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <BaseInput
      name="creditCardNumber"
      type="select"
      label="Credit Card Number"
      placeholder="0000-0000-0000-0000"
      mask="####-####-####-####"
      pattern="([0-9\-]+){19}"
      required
      :model-value="props.creditCardNumber"
      @update:model-value="emit('update:creditCardNumber', $event)"
    >
      <Icon name="formkit:visa" size="2em" class="text-blue-900" />
    </BaseInput>

    <div class="grid md:grid-cols-2 gap-4 md:gap-2">
      <BaseInput
        name="securityCode"
        type="tel"
        label="Security code"
        placeholder="***"
        required
        mask="###"
        pattern="[0-9]{3}"
        :model-value="props.securityCode"
        @update:model-value="emit('update:securityCode', $event)"
      >
        <Icon name="ph:question" size="1.5em" class="cursor-help text-gray-300" title="Tooltip for CVV code" />
      </BaseInput>
      <BaseInput
        name="expirationDate"
        type="text"
        label="Expiration date"
        placeholder="MM / YY"
        mask="##/##"
        pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
        required
        :model-value="props.expirationDate"
        @update:model-value="emit('update:expirationDate', $event)"
      />
    </div>
  </div>
</template>
