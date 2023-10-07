<script setup>
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  postalCode: "",
  phoneNumber: "",
  creditCardNumber: "",
  securityCode: "",
  expirationDate: "",
});

const currentStep = ref(1);

const submit = () => {
  if (currentStep.value === 1) {
    currentStep.value = currentStep.value + 1;
  } else {
    console.log(toRaw(form));
  }
};
</script>

<template>
  <form class="max-w-3xl mx-auto" @submit.prevent="submit">
    <div class="-ml-8 flex items-center gap-2 text-sm mb-4 uppercase font-bold">
      <p
        class="flex-shrink-1 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center leading-none"
      >
        {{ currentStep }}
      </p>
      <p>
        {{ currentStep === 1 ? "Personal information" : "Payment details" }}
      </p>
    </div>

    <div class="grid grid-cols-3 gap-2">
      <div class="col-span-2">
        <PurchaseFormPersonalInformation
          v-if="currentStep === 1"
          v-model:firstName="form.firstName"
          v-model:lastName="form.lastName"
          v-model:email="form.email"
          v-model:country="form.country"
          v-model:postalCode="form.postalCode"
          v-model:phoneNumber="form.phoneNumber"
        />
        <PurchaseFormPaymentDetails
          v-if="currentStep === 2"
          v-model:creditCardNumber="form.creditCardNumber"
          v-model:securityCode="form.securityCode"
          v-model:expirationDate="form.expirationDate"
        />
      </div>
      <OrderSummary />

      <div class="col-span-2 flex flex-col gap-2 mt-8">
        <button
          class="flex items-center justify-center gap-2 rounded border-b-2 border-lime-600 invalid:border-red-500 flex-1 bg-lime-500 px-2 py-3 font-bold text-white text-sm uppercase"
          type="submit"
        >
          <Icon size="1.1em" name="mdi:trolley" />
          {{ currentStep === 1 ? "Next" : "Complete Purchase" }}
        </button>
        <button
          v-show="currentStep > 1"
          class="flex items-center justify-center gap-2 px-2 py-3 text-sm text-gray-400"
          type="button"
          @click="currentStep = currentStep - 1"
        >
          <Icon name="tdesign:arrow-left" />
          <span>previous step</span>
        </button>
      </div>
    </div>
  </form>
</template>
