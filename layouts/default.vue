<template>
  <CommonToolbar />
  <section class="min-h-80">
    <slot />
  </section>
  <CommonFooter />
</template>

<style scoped>
.min-h-80 {
  min-height: 80vh;
}
</style>
