<template>
  <router-link to="#" class="router-link">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${card.image}`)"
        :alt="card.image"
        class="mb-3"
      />
      <h3 class="">{{ card.name }}</h3>
      <div class="description">
        {{ card.description | addCurrency }}

        <br />
        <span @click.prevent="onEmmit(card.id)">Читать далее ...</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>