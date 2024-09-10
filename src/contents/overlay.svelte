<script context="module" lang="ts">
  import cssText from "data-text:~app.css" // needs to be importent in txt format!
  import type { PlasmoCSConfig } from "plasmo"

  export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    all_frames: true,
    css: ["components/font.css"]
  }

  // Inject into the ShadowDOM
  export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
  }
</script>

<script lang="ts">
  import { onMount } from "svelte"

  import { Storage } from "@plasmohq/storage"

  let blocked_websites: Array<string>
  let image_link: string

  let block_this_site: Boolean = false

  onMount(() => {
    console.log("Hey there!")
    checkToBlock()
  })

  async function checkToBlock() {
    const storage = new Storage()
    blocked_websites = await storage.get("blocked_websites_stored")
    image_link = await storage.get("image_link_stored")

    blocked_websites.forEach((element) => {
      if (window.location.href.includes(element)) {
        block_this_site = true
        console.log("Blocking site ...")
      }
    })
  }
</script>

{#if block_this_site}
  <div
    id="main-overlay"
    class="bg-white flex flex-col justify-center items-center">
    <h1 class="text-center my-5 font-extrabold underline text-primary text-5xl">
      This Site is blocked
    </h1>
    <img
      src={image_link
        ? image_link
        : "https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212_1280.jpg"}
      alt="image_x"
      class="h-[50%] object-cover border-8 border-blue-600 border-opacity-50 rounded-3xl" />
  </div>
{/if}

<style>
  #main-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999999999;
  }
</style>
