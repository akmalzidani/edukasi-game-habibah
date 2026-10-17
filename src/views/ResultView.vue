<script setup lang="ts">
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";
import { playSound } from "../utils/sound";

const router = useRouter();
const game = useGameStore();
</script>

<template>
  <main class="page-shell result-page">
    <div class="result-stars" aria-hidden="true">✦　·　✦</div>
    <div class="result-medal" aria-hidden="true">🏅</div>
    <p class="eyebrow">ZONA SELESAI</p>
    <h1>Hebat, Penjelajah Rasa!</h1>
    <p class="result-copy">
      Kamu telah menambahkan data kuliner Sidoarjo ke arsip Digi Rasa.
    </p>
    <section class="result-score">
      <span>✦</span>
      <div>
        <strong>+{{ game.sessionScore }}</strong
        ><small>Poin Rasa sesi ini</small>
      </div>
    </section>
    <button
      class="primary-button"
      type="button"
      @click="
        playSound('ui-tap', game.soundOn);
        router.replace({ name: 'home' });
      "
    >
      Kembali ke Peta <span>⌖</span>
    </button>
  </main>
</template>
