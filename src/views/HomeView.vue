<template>
  <div class="home mt-5">
    <h3 class="fw-bold mb-2">Most stars: '{{ language }}'</h3>
    <p>
      <i> Repos created since {{monthAgoDate}} </i>
    </p>

    <div class="pt-4">
      <RepoCard class="mb-4" v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';
import { fetchRepoWithMostStars, formatDate, monthAgo } from "@/utils/functions";

export default {
  components: { RepoCard },
  name: "HomeView",
  data() {
    return {
      error: '',
      loading: false,
      repos: []
    }
  },
  computed: {
    language() {
      return "javascript";
    },
    monthAgoDate(){
      return formatDate(monthAgo)
    }
  },
  async created(){
    this.loading = true;
    this.error = '';
    try{
      this.repos = (await fetchRepoWithMostStars(this.language)).data.items || []
    } catch(_){
      this.error = "There was error loading the repositories, please try again later"
    } finally{
      this.loading = false
    }
  }
};
</script>
