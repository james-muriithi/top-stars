<template>
  <div class="home mt-5">
    <h3 class="fw-bold mb-2">Most stars: '{{ language }}'</h3>
    <p>
      <i> Repos created since 1st may 2022 </i>
    </p>

    <div class="pt-4">
      <RepoCard class="mb-4" />
    </div>
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';

export default {
  components: { RepoCard },
  name: "HomeView",
  computed: {
    language() {
      return "javascript";
    },
  },
};
</script>
