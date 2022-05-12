<template>
  <div class="home mt-5">
    <h3 class="fw-bold mb-2">Most stars: '{{ language }}'</h3>
    <p>
      <i> Repos created since {{ monthAgoDate }} </i>
    </p>

    <div class="pt-4">
      <div v-if="!loading">
        <RepoCard
          v-for="repo in repos"
          :key="repo.id"
          :repo="repo"
          class="mb-4"
        />
      </div>
      <div v-else>
        <RepoCardSkeleton v-for="i in 3" :key="i" class="mb-3" />
      </div>
    </div>
  </div>
</template>

<script>
import RepoCard from "@/components/RepoCard.vue";
import {
  fetchRepoWithMostStars,
  formatDate,
  monthAgo,
} from "@/utils/functions";
import RepoCardSkeleton from "@/components/RepoCardSkeleton.vue";

export default {
  components: { RepoCard, RepoCardSkeleton },
  name: "HomeView",
  data() {
    return {
      error: "",
      loading: false,
      language: "javascript",
      repos: [],
    };
  },
  computed: {
    monthAgoDate() {
      return formatDate(monthAgo);
    },
  },
  async created() {
    this.loading = true;
    this.error = "";
    if (this.$route.params.language) {
      this.language = this.$route.params.language
    }
    try {
      this.repos =
        (await fetchRepoWithMostStars(this.language)).data.items || [];
    } catch (_) {
      this.error =
        "There was error loading the repositories, please try again later";
    } finally {
      this.loading = false
    }
  },
};
</script>
