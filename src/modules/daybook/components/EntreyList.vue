<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entradas"
        v-model="term"
      />
    </div>
  </div>
  <div class="mt-2 d-flex flex-column"></div>
  <button
    class="btn btn-primary mx-3"
    @click="$router.push({ name: 'entries', params: { id: 'new' } })"
  >
    <i class="fa fa-plus-circle"></i>
    Nueva entreda
  </button>
  <div class="entry-scrollarea">
    <Entry
      v-for="entry in entriesByTemr"
      :key="entry.id"
      :entry="entry"
    ></Entry>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTemr() {
      return this.getEntriesByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1 px solid #2c3e50;
  // height: calc( 100vh - 960px);
}
.entry-scrollarea {
  height: calc(100vh - 150px);
  overflow: scroll;
}
</style>