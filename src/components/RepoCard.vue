<template>
  <div class="repo-card bg-white p-3 p-md-4">
    <a href="#" target="_blank" rel="noopener noreferrer">
      developit/microbundle
    </a>
    <p class="description mt-3">Zero-configuration bundler for tiny modules</p>
    <div class="row">
      <div class="col">
        <p class="text-muted mb-0">Created on 1st may 2022</p>
      </div>
      <div class="col d-flex">
        <span class="d-flex justify-content-center ms-auto">
          <img src="@/assets/images/star.svg" alt="stars" height="22" />
          <span class="ps-1">1000</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoCard",
};
</script>

<style lang="scss" scoped>
.repo-card {
  box-shadow: 0px 10px 35px -3px rgba(0, 0, 0, 0.05);
}
</style>