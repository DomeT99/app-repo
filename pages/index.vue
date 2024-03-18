<template>
  <section class="flex lg:flex-row flex-column m-3 mt-6 mb-6 gap-4">
    <div class="flex flex-column gap-2">
      <label>Keyword</label>
      <CommonInputText />
    </div>
    <div class="flex flex-column gap-2">
      <label>Platform</label>
      <CommonComboBox />
    </div>
  </section>

  <section
    class="flex lg:flex-row flex-column justify-content-center gap-4 m-3 mt-6 mb-6"
  >
    <div class="flex-auto">
      <CommonCard />
    </div>
    <div class="flex-auto">
      <CommonCard />
    </div>
    <div class="flex-auto">
      <CommonCard />
    </div>
    <div class="flex-auto">
      <CommonCard />
    </div>
  </section>
</template>
