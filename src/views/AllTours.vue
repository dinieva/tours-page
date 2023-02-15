<template>
  <div class="container">
    <div class="grid d-flex justify-content-between flex-wrap">
      <tour-item-component
        v-for="card in tours"
        :key="card.id"
        :card="card"
        @onNavigate="navigate"
      />
    </div>
  </div>
</template>

<script>
import TourItemComponent from "@/components/TourItemComponent.vue";
import { navigate } from "../mixins/navigate";
export default {
  components: {
    TourItemComponent,
  },
  computed: {
    tours() {
      return this.$store.getters["getTourInfo"];
    },
  },
  mixins: [navigate],
  data() {
    return {
      name: "tours",
    };
  },
};
</script>