<template>
  <div class="shadow bg-white p-3 p-md-4 repo-card">
    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
      {{repo.full_name}}
    </a>
    <p class="repo-card__description mt-3">
      {{repo.description}}
    </p>
    <div class="row">
      <div class="col">
        <p class="text-muted mb-0">Created: {{formatDate(repo.created_at)}}</p>
      </div>
      <div class="col d-flex">
        <span class="d-flex justify-content-center ms-auto">
          <img src="@/assets/images/star.svg" alt="stars" height="22" />
          <span class="ps-1">{{repo.stargazers_count}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/functions";

export default {
  name: "RepoCard",
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate
  }
};
</script>