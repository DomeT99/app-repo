<template>
  <Card style="overflow: hidden">
    <template #title>
      <section class="flex">
        <div class="flex-1">Joplin</div>
        <div>
          <i class="pi pi-pencil cursor-pointer"></i> &nbsp;
          <i class="pi pi-trash text-red-600 cursor-pointer"></i>
        </div>
      </section>
    </template>
    <template #subtitle>
      <section class="flex gap-1 mt-4">
        <Badge severity="secondary" value="Android" />
        <Badge severity="secondary" value="MacOS" />
        <Badge severity="secondary" value="Windows" />
        <Badge severity="secondary" value="iOS" />
        <Badge severity="secondary" value="Linux" />
      </section>
    </template>
    <template #content>
      <p>Fantastico editor markdown per la creazione di siti web</p>
    </template>
    <template #footer>
      <section class="flex justify-content-center gap-3">
        <div class="flex-1 align-items-center justify-content-center">
          <Button
            label="Website"
            severity="secondary"
            outlined
            class="w-full"
          />
        </div>
        <div class="flex-1 align-items-center justify-content-center">
          <Button label="Source Code" class="w-full" />
        </div>
      </section>
    </template>
  </Card>
</template>


