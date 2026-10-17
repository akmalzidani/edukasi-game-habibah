import answerCorrectUrl from '../assets/music/answer-correct.ogg'
import answerTryAgainUrl from '../assets/music/answer-try-again.ogg'
import badgeEarnedUrl from '../assets/music/badge-earned.ogg'
import pointEarnedUrl from '../assets/music/point-earned.ogg'
import uiTapUrl from '../assets/music/ui-tap.ogg'

type SoundName = 'answer-correct' | 'answer-try-again' | 'badge-earned' | 'point-earned' | 'ui-tap'

const sources: Record<SoundName, string> = {
  'answer-correct': answerCorrectUrl,
  'answer-try-again': answerTryAgainUrl,
  'badge-earned': badgeEarnedUrl,
  'point-earned': pointEarnedUrl,
  'ui-tap': uiTapUrl,
}

export function playSound(name: SoundName, enabled: boolean) {
  if (!enabled) return

  const audio = new Audio(sources[name])
  audio.volume = name === 'ui-tap' ? 0.35 : 0.6
  void audio.play().catch(() => undefined)
}
