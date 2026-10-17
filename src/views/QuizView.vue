<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/game";
import { playSound } from "../utils/sound";

const router = useRouter();
const game = useGameStore();
const {
  currentQuestion,
  isAnswered,
  isCorrect,
  isSessionComplete,
  progress,
  selectedAnswer,
} = storeToRefs(game);
const tutorialVisible = ref(true);
const letters = ["A", "B", "C", "D"];
const feedbackTitle = computed(() =>
  isCorrect.value ? "Hebat! Jawabanmu benar!" : "Hampir benar!",
);

function continueGame() {
  if (game.nextQuestion()) {
    playSound("ui-tap", game.soundOn);
    return;
  }
  playSound("badge-earned", game.soundOn);
  router.replace({ name: "result" });
}

function chooseAnswer(index: number) {
  game.chooseAnswer(index);
  if (game.isCorrect) {
    playSound("answer-correct", game.soundOn);
    window.setTimeout(() => playSound("point-earned", game.soundOn), 280);
    return;
  }
  playSound("answer-try-again", game.soundOn);
}
</script>

<template>
  <main class="page-shell quiz-page">
    <header class="quiz-header">
      <button
        class="back-button"
        type="button"
        aria-label="Kembali ke peta"
        @click="
          playSound('ui-tap', game.soundOn);
          router.push({ name: 'home' });
        "
      >
        ←
      </button>
      <div class="progress-wrap">
        <div class="progress-label">
          <span>Soal {{ progress }}</span
          ><span>✦ {{ game.sessionScore }}</span>
        </div>
        <div class="progress-track">
          <span
            :style="{
              width: `${((game.currentIndex + 1) / game.zoneQuestions.length) * 100}%`,
            }"
          ></span>
        </div>
      </div>
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
    </header>

    <section v-if="currentQuestion" class="question-card">
      <div class="question-art" aria-hidden="true">
        <span>{{ currentQuestion.emoji }}</span
        ><i>✦</i><b>●</b>
      </div>
      <p class="eyebrow">DATA RASA DITEMUKAN</p>
      <h1>{{ currentQuestion.question }}</h1>
    </section>

    <p v-if="tutorialVisible" class="tip" role="status">
      👆 Ketuk satu jawaban yang menurutmu benar!
      <button type="button" @click="tutorialVisible = false">Mengerti</button>
    </p>

    <section
      v-if="currentQuestion"
      class="answers"
      aria-label="Pilihan jawaban"
    >
      <button
        v-for="(option, index) in currentQuestion.options"
        :key="option"
        class="answer-button"
        :class="{
          selected: selectedAnswer === index,
          correct: isAnswered && index === currentQuestion.answer,
          wrong:
            isAnswered &&
            selectedAnswer === index &&
            index !== currentQuestion.answer,
        }"
        type="button"
        :disabled="isAnswered"
        @click="chooseAnswer(index)"
      >
        <span class="letter">{{ letters[index] }}</span
        ><span>{{ option }}</span
        ><span
          v-if="isAnswered && index === currentQuestion.answer"
          class="answer-mark"
          >✓</span
        >
      </button>
    </section>

    <aside
      v-if="isAnswered && currentQuestion"
      class="feedback"
      :class="{ success: isCorrect }"
    >
      <div>
        <strong>{{ feedbackTitle }}</strong>
        <p>{{ currentQuestion.fact }}</p>
      </div>
      <button class="primary-button" type="button" @click="continueGame">
        {{ isSessionComplete ? "Lihat Hasil" : "Soal Berikutnya" }}
        <span>→</span>
      </button>
    </aside>
  </main>
</template>
