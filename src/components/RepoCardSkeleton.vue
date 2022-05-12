<template>
  <div class="loading-skeleton">
    <div class="row bg-white shadow p-3 p-md-4">
      <p class="h-10"></p>
      <p class="description mt-3 h-20"></p>
      <div class="row g-0">
        <div class="col text-start">
          <p class="text-muted mb-0 h-15 w-75"></p>
        </div>
        <div class="col">
          <p class="h-15 w-25 ms-auto"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoCardSkeleton",
};
</script>

<style lang="scss">
%loading-skeleton {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;
  &::placeholder {
    color: transparent;
  }
}
@keyframes loading-skeleton {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;
 
  p{
    @extend %loading-skeleton;
  }
}
@for $i from 1 through 4 {
    $size: $i * 5;
    .h-#{$size} {
        height: #{$size}px !important;
    }
    .w-#{$size} {
        width: #{$size}px !important;
    }
}
</style>