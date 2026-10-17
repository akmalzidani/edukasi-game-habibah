import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnboardingView from '../views/OnboardingView.vue'
import QuizView from '../views/QuizView.vue'
import ResultView from '../views/ResultView.vue'
import { useGameStore } from '../stores/game'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/panduan', name: 'onboarding', component: OnboardingView },
    { path: '/kuis/:zone', name: 'quiz', component: QuizView, props: true },
    { path: '/hasil', name: 'result', component: ResultView },
  ],
})

router.beforeEach((to) => {
  const game = useGameStore()
  if (to.name !== 'onboarding' && !game.onboardingDone) return { name: 'onboarding' }
  return true
})

export default router
