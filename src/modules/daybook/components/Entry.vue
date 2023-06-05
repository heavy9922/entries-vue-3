<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2023</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla et
      quo architecto nam quisquam repellendus nihil. Corrupti cum sint, fuga
      repudiandae corporis dolores provident sunt quam veritatis quis, sed,
      vitae perspiciatis saepe delectus deserunt aut perferendis voluptatibus
      aliquam repellat accusamus quae placeat natus quia vero. Quam error quo
      illum consequatur obcaecati cupiditate odit.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>