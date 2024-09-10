<script lang="ts">
  import { onMount } from "svelte"

  import "../app.css"
  import "@fortawesome/fontawesome-free/css/all.min.css"

  import { Storage } from "@plasmohq/storage"

  let old_text_area_input: string | null = null
  let old_text_image_link: string | null = null

  let text_area_input: string | null = null
  let text_image_link: string | null = null
  let should_save: boolean = false

  $: if (
    old_text_area_input != text_area_input ||
    old_text_image_link != text_image_link
  ) {
    should_save = true
  } else {
    should_save = false
  }

  onMount(() => {
    getData()
  })

  async function getData() {
    console.log("getting data ")

    const storage = new Storage()
    text_area_input = await storage.get("blocked_websites_stored")
    text_image_link = await storage.get("image_link_stored")

    console.log("GET")
    console.log(text_area_input)
    console.log(text_image_link)
  }

  async function saveData() {
    const storage = new Storage()

    let _websites: Array<string> = text_area_input.split(",")
    _websites.forEach((element) => {
      element = element.trim()
    })

    if (_websites) {
      await storage.set("blocked_websites_stored", _websites)
    }
    if (text_image_link) {
      await storage.set("image_link_stored", text_image_link)
    }

    getData()
    should_save = false
  }
</script>

<svelte:head>
  <title>Settings - Website Blocker</title>
</svelte:head>

<div
  class="bg-background min-h-screen flex flex-col items-center overflow-scroll justify-evenly">
  <div class="flex flex-col justify-center items-center w-full space-y-20">
    <h1 class="text-5xl font-black text-primary text-center mx-20 mb-20">
      Settings - Website Blocker
    </h1>

    <!-- *** Settings *** -->
    <div class="flex flex-col items-center justify-center space-y-10 w-full">
      <div class="w-full flex flex-col justify-center items-center">
        <input
          bind:value={text_image_link}
          placeholder="https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212_1280.jpg"
          class="w-[40%] px-6 py-1 border-primary border-4 rounded-3xl bg-slate-100 text-primary text-lg placeholder:text-primary placeholder:text-opacity-50" />
        <p class="text-primary font-extrabold text-center mx-[5%] my-2">
          Here you can change the image that is shown on the block-site.
        </p>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <textarea
          bind:value={text_area_input}
          placeholder="example.com, x.com, reddit.com"
          class="w-[40%] px-6 py-1 border-primary border-4 rounded-3xl bg-slate-100 text-primary text-lg placeholder:text-primary placeholder:text-opacity-50" />
        <p class="text-primary font-extrabold text-center mx-[5%] my-2">
          Here you can input the website to block. Please separate websites with
          a comma.
        </p>
      </div>
    </div>

    <button
      on:click={() => saveData()}
      class={should_save === true
        ? "bg-primary rounded-full text-white font-bold py-4 px-12 text-2xl"
        : "bg-slate-500 rounded-full text-white font-bold py-4 px-12 text-2xl"}
      >Save</button>
  </div>
</div>
