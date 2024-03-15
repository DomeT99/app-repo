<template>
  <Card style="width: 22rem; overflow: hidden">
    <template #title> Joplin </template>
    <template #subtitle>
      <div class="mt-1">
        <Badge severity="secondary" value="Android" />
        <Badge severity="secondary" value="MacOS" />
        <Badge severity="secondary" value="Windows" />
        <Badge severity="secondary" value="iOS" />
        <Badge severity="secondary" value="Linux" />
      </div>
    </template>
    <template #content>
      <p>Fantastico editor markdown per la creazione di siti web</p>
    </template>
    <template #footer>
      <div class="space-between">
        <Button label="Website" severity="secondary" outlined class="w-full" />
        <Button label="Source Code" class="w-full" />
      </div>
      <div class="mt-1 justify-end">
        <i class="pi pi-pencil pointer"></i> &nbsp; &nbsp;
        <i class="pi pi-trash red pointer"></i>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.space-between {
  display: flex;
  justify-content: space-between;
}
.justify-end {
  display: flex;
  justify-content: flex-end;
}
.mt-1 {
  margin-top: 1rem;
}
.red {
  color: red;
}
.pointer {
  cursor: pointer;
}
</style>
