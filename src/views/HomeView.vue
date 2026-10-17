<script setup lang="ts">
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";
import { playSound } from "../utils/sound";

const router = useRouter();
const game = useGameStore();

const zones = [
  {
    id: "bandeng",
    icon: "🐟",
    number: "01",
    title: "Lab Bandeng",
    text: "Bandeng asap & otak-otak",
    color: "blue",
  },
  {
    id: "kupang",
    icon: "🐚",
    number: "02",
    title: "Pelabuhan Kupang",
    text: "Lontong kupang & cerita laut",
    color: "orange",
  },
  {
    id: "petis",
    icon: "🥣",
    number: "03",
    title: "Pasar Bumbu Pixel",
    text: "Petis & rasa khas Jawa Timur",
    color: "purple",
  },
];

function play(zoneId: string) {
  playSound("ui-tap", game.soundOn);
  game.startZone(zoneId);
  router.push({ name: "quiz", params: { zone: zoneId } });
}
</script>

<template>
  <main class="page-shell home-page">
    <header class="topbar">
      <button
        class="sound-button"
        type="button"
        :aria-label="game.soundOn ? 'Matikan suara' : 'Nyalakan suara'"
        @click="
          game.toggleSound();
          playSound('ui-tap', true);
        "
      >
        {{ game.soundOn ? "🔊" : "🔇" }}
      </button>
      <div class="brand"><span>✦</span> DIGI RASA</div>
      <button
        class="help-button"
        type="button"
        aria-label="Ulangi panduan"
        @click="
          playSound('ui-tap', game.soundOn);
          router.push({ name: 'onboarding' });
        "
      >
        ?
      </button>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">SELAMAT DATANG, PENJELAJAH!</p>
        <h1>Jelajah <span>Digi-Sidoarjo</span></h1>
        <p>Kumpulkan data rasa dan kenali makanan khas dari kota Sidoarjo.</p>
      </div>
      <div class="hero-illustration" aria-hidden="true">
        <span class="cloud cloud-one">✦</span
        ><span class="cloud cloud-two">☁</span>
        <div class="robo">🤖</div>
        <div class="food-bubble">🐟</div>
      </div>
    </section>

    <section class="score-card" aria-label="Poin Rasa terkumpul">
      <span class="score-icon">✦</span>
      <div>
        <strong>{{ game.totalScore }}</strong
        ><span>Poin Rasa terkumpul</span>
      </div>
      <span class="badge-count">🏅 {{ game.completedZones.length }}/3</span>
    </section>

    <section class="map-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">PETA PETUALANGAN</p>
          <h2>Pilih zona rasa</h2>
        </div>
        <span class="map-pin">⌖</span>
      </div>
      <div class="zone-list">
        <article
          v-for="zone in zones"
          :key="zone.id"
          class="zone-card"
          :class="`zone-${zone.color}`"
        >
          <div class="zone-number">{{ zone.number }}</div>
          <div class="zone-icon">{{ zone.icon }}</div>
          <div class="zone-copy">
            <h3>{{ zone.title }}</h3>
            <p>{{ zone.text }}</p>
          </div>
          <button
            type="button"
            class="play-button"
            :aria-label="`Main ${zone.title}`"
            @click="play(zone.id)"
          >
            Main <span>→</span>
          </button>
          <span v-if="game.completedZones.includes(zone.id)" class="completed"
            >✓</span
          >
        </article>
      </div>
    </section>
  </main>
</template>
