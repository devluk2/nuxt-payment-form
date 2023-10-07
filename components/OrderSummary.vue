<script setup>
const purchaseItems = [
  {
    id: 1,
    title: "Apple Watch Sport",
    qty: 1,
    price: 580,
  },
  {
    id: 2,
    title: "Modern Buckle",
    qty: 1,
    price: 380,
  },
];

const totalPurchases = computed(() => {
  return purchaseItems.reduce((prev, curr) => {
    return prev + curr.qty * curr.price;
  }, 0);
});

const estimatedTax = computed(() => {
  return 0;
});

const total = computed(() => {
  return totalPurchases.value + estimatedTax.value
})
</script>

<template>
  <div class="bg-white rounded flex border-b-2">
    <div class="m-1 p-3 w-full border border-dashed text-sm">
      <p class="mb-4 uppercase font-bold">Your order</p>
      <div class="flex flex-col gap-2 text-xs">
        <div
          v-for="item in purchaseItems"
          :key="item.id"
          class="flex items-center justify-between"
        >
          <p>{{ item.title }}</p>
          <p>$ {{ item.qty * item.price }}</p>
        </div>
      </div>
      <hr class="my-3 border-dashed" />
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <p>Total purchases</p>
          <p>$ {{ totalPurchases }}</p>
        </div>
        <div class="flex items-center justify-between">
          <p>Estimated tax</p>
          <p>$ {{ estimatedTax }}</p>
        </div>
      </div>
      <hr class="my-3 border-dashed" />
      <div class="flex items-start justify-between">
        <p class="font-semibold">Total</p>
        <p class="text-2xl font-bold">$ {{ total }}</p>
      </div>
    </div>
  </div>
</template>
