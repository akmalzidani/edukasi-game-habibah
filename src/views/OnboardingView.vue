<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";
import { playSound } from "../utils/sound";

const router = useRouter();
const game = useGameStore();
const step = ref(0);

const slides = [
  {
    icon: "🤖",
    title: "Halo, Penjelajah Rasa!",
    body: "Bantu Robo Rasa mengumpulkan data makanan khas Sidoarjo yang hilang.",
  },
  {
    icon: "👆",
    title: "Jawab pertanyaannya",
    body: "Baca soal, lalu ketuk satu jawaban yang menurutmu paling tepat.",
  },
  {
    icon: "🏅",
    title: "Kumpulkan lencana!",
    body: "Jawaban benar memberimu Poin Rasa untuk membuka petualangan baru.",
  },
];

function complete() {
  playSound("ui-tap", game.soundOn);
  game.finishOnboarding();
  router.replace({ name: "home" });
}
</script>

<template>
  <main class="onboarding page-shell">
    <button class="text-button skip" type="button" @click="complete">
      Lewati
    </button>

    <section class="onboarding-card" aria-live="polite">
      <div class="mascot-orbit" aria-hidden="true">
        <span class="orbit-dot dot-one"></span
        ><span class="orbit-dot dot-two"></span>
        <div class="mascot">{{ slides[step].icon }}</div>
      </div>
      <div class="slide-copy">
        <p class="eyebrow">PANDUAN {{ step + 1 }} DARI {{ slides.length }}</p>
        <h1>{{ slides[step].title }}</h1>
        <p>{{ slides[step].body }}</p>
      </div>
    </section>

    <div class="pager" aria-label="Progres panduan">
      <span
        v-for="(_, index) in slides"
        :key="index"
        :class="{ active: index === step }"
      ></span>
    </div>

    <button
      v-if="step < slides.length - 1"
      class="primary-button"
      type="button"
      @click="
        playSound('ui-tap', game.soundOn);
        step += 1;
      "
    >
      Lanjut <span aria-hidden="true">→</span>
    </button>
    <button v-else class="primary-button" type="button" @click="complete">
      Ayo Main! <span aria-hidden="true">🚀</span>
    </button>
  </main>
</template>
