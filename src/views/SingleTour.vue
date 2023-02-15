<template>
  <div class="container">
    <div class="col-lg-10 offset-1">
      <img
        class="mb-4 w-100"
        :src="require(`@/assets/img/${card.image}`)"
        :alt="card.image"
      />
      <h2>{{ card.name }}</h2>
      <div class="description">
        {{ card.description }}
      </div>
    </div>
    <router-link to="/">Назад</router-link>
  </div>
</template>


<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      return this.$store.getters["getTourById"](this.$route.params.id);
    },
  },
};
</script>