<template>
  <div
    class="drop"
    :class="getClasses"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)"
  >
    <h1 v-if="mobileImages.length == 0 && !isDragging">Drop some images</h1>
    <h1 v-else>{{ currentImages.length }} Images Added</h1>

    <div class="manual">
      <label for="uploadmyfile">
        <p>or pick from device</p>
      </label>
      <input
        type="file"
        id="uploadmyfile"
        :accept="'image/*'"
        multiple
        @change="requestUploadFile"
      />
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "DropImages",
  data() {
    return {
      isDragging: false,
    };
  },
  computed: {
    getClasses() {
      return { isDragging: this.isDragging };
    },
    imagesAmount() {
      return this.mobileImages.length;
    },
    ...mapState("imageStore", [
      "mobileImages",
      "tabletImages",
      "desktopImages",
    ]),
    ...mapState(["currentScreenType"]),
    ...mapGetters("imageStore", ["currentImages"]),
  },
  methods: {
    ...mapActions("imageStore", ["sendImagesToStore"]),
    dragOver() {
      this.isDragging = true;
    },
    dragLeave() {
      this.isDragging = false;
    },
    async drop(e) {
      const files = [...e.dataTransfer.files];
      const images = files.filter((file) => file.type.indexOf("image/") >= 0);
      const promises = [];
      images.forEach((file) => {
        promises.push(this.getBase64(file));
      });
      const sources = await Promise.all(promises);
      this.sendImagesToStore({ type: this.currentScreenType, images: sources });
      //   this.imageSources = this.imageSources.concat(sources);
      this.isDragging = false;
    },
    requestUploadFile() {
      const src = this.$el.querySelector("#uploadmyfile");
      this.drop({ dataTransfer: src });
    },
    getBase64(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
  },
};
</script>



<style scoped>
.drop {
  max-width: 800px;
  height: 400px;
  background-color: var(--main);
  border: 10px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
  font-family: sans-serif;
  overflow: hidden;
  position: relative;
  margin: 50px auto;
  color: white;
  transition: 0.5s ease;
}
.isDragging {
  /* background-color: #999; */
  border-color: var(--secondary);
}
.img {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.manual {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  text-decoration: underline;
}
#uploadmyfile {
  display: none;
  cursor: pointer;
}
</style>