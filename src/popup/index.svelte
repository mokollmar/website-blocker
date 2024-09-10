<script lang="ts">
  import "../app.css"
  import "@fortawesome/fontawesome-free/css/all.min.css"

  import { onMount } from "svelte"

  onMount(() => {})
</script>

<div
  id="my_popup"
  class="bg-background flex flex-col justify-evenly items-center border-2 border-primary">
  <h1 class="text-center text-primary font-black text-4xl my-5">
    Website Blocker
  </h1>

  <a
    href="/tabs/websites.html"
    target="_blank"
    class="font-extrabold text-background bg-primary bg-opacity-75 rounded-full px-6 py-2 w-4/5 text-center shadow-secondary shadow-centered-sm text-lg hover:opacity-75 hover:shadow-centered-lg hover:shadow-secondary flex flex-row transition-none duration-150">
    <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
    <span class="grow">change Websites</span>
  </a>

  <a
    href="https://github.com/mokollmar/website-blocker"
    target="_blank"
    class="font-extrabold text-background bg-primary bg-opacity-75 rounded-full px-6 py-2 w-4/5 text-center shadow-secondary shadow-centered-sm text-lg hover:opacity-75 hover:shadow-centered-lg hover:shadow-secondary flex flex-row transition-none duration-150">
    <span><i class="fa-brands fa-github"></i></span>
    <span class="grow">Source-Code</span>
  </a>
</div>

<style>
  #my_popup {
    width: 400px;
    height: 300px;
    overflow-y: scroll;
  }
</style>
