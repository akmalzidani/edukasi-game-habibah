import { computed, ref } from "vue";
import { defineStore } from "pinia";

export type Question = {
  id: number;
  zone: string;
  question: string;
  options: string[];
  answer: number;
  fact: string;
  emoji: string;
};

const questionBank: Question[] = [
  // Lab Bandeng
  {
    id: 1,
    zone: "bandeng",
    question: "Apa proses yang membuat bandeng asap beraroma khas?",
    options: ["Dibekukan", "Diasapkan", "Dibuat es", "Dimasak dengan salju"],
    answer: 1,
    fact: "Bandeng asap dibuat dengan proses pengasapan yang memberi aroma khas.",
    emoji: "🐟",
  },
  {
    id: 2,
    zone: "bandeng",
    question: "Manakah yang merupakan olahan ikan bandeng?",
    options: ["Otak-otak bandeng", "Jus bandeng", "Es bandeng", "Roti bandeng"],
    answer: 0,
    fact: "Otak-otak bandeng adalah olahan bandeng berbumbu yang lezat.",
    emoji: "🐟",
  },
  {
    id: 3,
    zone: "bandeng",
    question: "Bandeng termasuk jenis hewan …",
    options: ["Ikan", "Burung", "Serangga", "Mamalia"],
    answer: 0,
    fact: "Bandeng adalah ikan yang banyak dibudidayakan di daerah pesisir.",
    emoji: "🐠",
  },
  {
    id: 4,
    zone: "bandeng",
    question: "Sebelum menjadi otak-otak bandeng, daging ikannya biasanya …",
    options: [
      "Dipisahkan dari durinya",
      "Dijadikan es batu",
      "Ditanam di tanah",
      "Ditiup angin",
    ],
    answer: 0,
    fact: "Daging bandeng diolah bersama bumbu untuk membuat otak-otak bandeng.",
    emoji: "🍽️",
  },
  {
    id: 5,
    zone: "bandeng",
    question:
      "Benar atau salah: Bandeng asap memiliki aroma dari proses pengasapan.",
    options: ["Benar", "Salah"],
    answer: 0,
    fact: "Asap dari proses pengolahan membantu memberi aroma khas pada bandeng asap.",
    emoji: "💨",
  },
  {
    id: 6,
    zone: "bandeng",
    question: "Bandeng sering hidup dan dibudidayakan di air …",
    options: [
      "Payau",
      "Berwarna ungu",
      "Manis seperti sirup",
      "Panas mendidih",
    ],
    answer: 0,
    fact: "Tambak air payau cocok untuk budidaya ikan bandeng.",
    emoji: "🌊",
  },
  {
    id: 7,
    zone: "bandeng",
    question: "Mengapa bandeng perlu diolah dengan hati-hati?",
    options: [
      "Karena memiliki duri",
      "Karena bisa terbang",
      "Karena berubah menjadi buah",
      "Karena tumbuh di pohon",
    ],
    answer: 0,
    fact: "Bandeng dikenal memiliki banyak duri sehingga perlu diolah dengan teliti.",
    emoji: "🦴",
  },
  {
    id: 8,
    zone: "bandeng",
    question: "Warna yang paling sering kita lihat pada ikan bandeng adalah …",
    options: [
      "Keperakan",
      "Merah muda terang",
      "Ungu neon",
      "Bermotif pelangi",
    ],
    answer: 0,
    fact: "Ikan bandeng umumnya memiliki tubuh berwarna keperakan.",
    emoji: "✨",
  },
  {
    id: 9,
    zone: "bandeng",
    question: "Otak-otak bandeng cocok disebut sebagai …",
    options: [
      "Makanan olahan ikan",
      "Minuman buah",
      "Alat menangkap ikan",
      "Tanaman laut",
    ],
    answer: 0,
    fact: "Otak-otak bandeng memadukan daging ikan dan bumbu menjadi satu sajian.",
    emoji: "🥢",
  },
  {
    id: 10,
    zone: "bandeng",
    question: "Saat menyantap bandeng, sikap yang baik adalah …",
    options: [
      "Makan perlahan dan hati-hati",
      "Terburu-buru",
      "Membuang makanan",
      "Bermain dengan makanan",
    ],
    answer: 0,
    fact: "Makan perlahan membantu kita menikmati makanan dan tetap berhati-hati terhadap duri.",
    emoji: "😊",
  },

  // Pelabuhan Kupang
  {
    id: 11,
    zone: "kupang",
    question:
      "Lontong kupang biasanya disajikan dengan bahan laut kecil bernama …",
    options: ["Kepiting", "Kupang", "Ikan paus", "Ubur-ubur"],
    answer: 1,
    fact: "Kupang adalah hewan laut kecil yang menjadi bahan utama lontong kupang.",
    emoji: "🐚",
  },
  {
    id: 12,
    zone: "kupang",
    question: "Pelengkap yang sering ada pada sajian lontong kupang adalah …",
    options: ["Petis", "Selai stroberi", "Susu cokelat", "Keju biru"],
    answer: 0,
    fact: "Petis memberi cita rasa gurih-manis pada banyak kuliner Jawa Timur.",
    emoji: "🍲",
  },
  {
    id: 13,
    zone: "kupang",
    question: "Lontong dibuat dari bahan utama …",
    options: ["Beras", "Tepung cokelat", "Daun teh", "Keju"],
    answer: 0,
    fact: "Lontong merupakan nasi yang dimasak dan dibungkus hingga padat.",
    emoji: "🍚",
  },
  {
    id: 14,
    zone: "kupang",
    question: "Kupang termasuk hewan yang hidup dekat …",
    options: [
      "Laut atau pesisir",
      "Puncak gunung bersalju",
      "Awan",
      "Padang pasir",
    ],
    answer: 0,
    fact: "Kupang banyak ditemukan di lingkungan perairan pesisir.",
    emoji: "🌊",
  },
  {
    id: 15,
    zone: "kupang",
    question: "Apa bentuk lontong yang umum disajikan?",
    options: [
      "Potongan padat",
      "Cair seperti jus",
      "Serbuk halus",
      "Gelembung sabun",
    ],
    answer: 0,
    fact: "Lontong dipotong-potong sebelum disajikan bersama kuah dan lauk.",
    emoji: "⬜",
  },
  {
    id: 16,
    zone: "kupang",
    question:
      "Benar atau salah: Lontong kupang adalah salah satu kuliner yang dikenal di Sidoarjo.",
    options: ["Benar", "Salah"],
    answer: 0,
    fact: "Lontong kupang dikenal sebagai salah satu kuliner khas daerah pesisir Jawa Timur, termasuk Sidoarjo.",
    emoji: "📍",
  },
  {
    id: 17,
    zone: "kupang",
    question: "Sebelum makan makanan laut, kita perlu memastikan makanan …",
    options: [
      "Bersih dan matang",
      "Berwarna paling terang",
      "Paling besar",
      "Paling dingin",
    ],
    answer: 0,
    fact: "Kebersihan dan kematangan makanan penting untuk menjaga tubuh tetap sehat.",
    emoji: "🧼",
  },
  {
    id: 18,
    zone: "kupang",
    question: "Kuah pada lontong kupang membuat sajian terasa lebih …",
    options: [
      "Berkuah dan hangat",
      "Kering seperti kerupuk",
      "Bekas terbakar",
      "Beku",
    ],
    answer: 0,
    fact: "Kuah adalah bagian penting yang menyatukan rasa pada sajian lontong kupang.",
    emoji: "🥄",
  },
  {
    id: 19,
    zone: "kupang",
    question: "Sate kerang dibuat dari bahan utama …",
    options: ["Kerang", "Pisang", "Kentang", "Roti tawar"],
    answer: 0,
    fact: "Sate kerang adalah salah satu pelengkap yang dapat dinikmati bersama sajian khas pesisir.",
    emoji: "🦪",
  },
  {
    id: 20,
    zone: "kupang",
    question: "Makanan khas membantu kita mengenal …",
    options: [
      "Budaya daerah",
      "Kode rahasia robot",
      "Nama planet baru",
      "Jenis kendaraan",
    ],
    answer: 0,
    fact: "Kuliner khas adalah bagian menarik dari cerita dan budaya suatu daerah.",
    emoji: "🗺️",
  },

  // Pasar Bumbu Pixel
  {
    id: 21,
    zone: "petis",
    question: "Petis paling tepat disebut sebagai …",
    options: ["Bumbu khas", "Minuman dingin", "Buah tropis", "Alat masak"],
    answer: 0,
    fact: "Petis adalah bumbu bercita rasa khas yang digunakan dalam berbagai sajian.",
    emoji: "🥣",
  },
  {
    id: 22,
    zone: "petis",
    question: "Petis dapat memberi rasa … pada makanan.",
    options: [
      "Gurih dan khas",
      "Seperti es batu",
      "Sangat hambar",
      "Seperti sabun",
    ],
    answer: 0,
    fact: "Petis dikenal karena rasa gurih dan manisnya yang khas.",
    emoji: "😋",
  },
  {
    id: 23,
    zone: "petis",
    question: "Petis sering dipakai sebagai …",
    options: [
      "Saus atau bumbu pelengkap",
      "Bahan membuat layang-layang",
      "Pewarna kertas",
      "Mainan robot",
    ],
    answer: 0,
    fact: "Petis dapat menjadi bumbu pelengkap dalam aneka makanan Jawa Timur.",
    emoji: "🥄",
  },
  {
    id: 24,
    zone: "petis",
    question: "Sebelum mencoba makanan berbumbu baru, sebaiknya …",
    options: [
      "Mencicipi sedikit dahulu",
      "Langsung mengambil sebanyak-banyaknya",
      "Membuangnya",
      "Memakainya untuk bermain",
    ],
    answer: 0,
    fact: "Mencicipi sedikit membantu kita mengenali rasa makanan dengan nyaman.",
    emoji: "👍",
  },
  {
    id: 25,
    zone: "petis",
    question: "Kerupuk udang dibuat dengan bahan yang berkaitan dengan …",
    options: ["Udang", "Apel", "Susu", "Cokelat"],
    answer: 0,
    fact: "Kerupuk udang adalah camilan yang dibuat dengan cita rasa udang.",
    emoji: "🦐",
  },
  {
    id: 26,
    zone: "petis",
    question: "Kerupuk biasanya memiliki tekstur yang …",
    options: ["Renyah", "Cair", "Licin seperti es", "Lembek seperti bubur"],
    answer: 0,
    fact: "Kerupuk dinikmati karena teksturnya yang renyah.",
    emoji: "💥",
  },
  {
    id: 27,
    zone: "petis",
    question:
      "Benar atau salah: Bumbu membantu membuat rasa makanan lebih beragam.",
    options: ["Benar", "Salah"],
    answer: 0,
    fact: "Bumbu dipadukan agar makanan memiliki rasa dan aroma yang nikmat.",
    emoji: "🌟",
  },
  {
    id: 28,
    zone: "petis",
    question: "Agar makanan tetap bersih, kita perlu …",
    options: [
      "Mencuci tangan sebelum makan",
      "Menyentuh semua makanan",
      "Makan sambil berlari",
      "Meletakkan makanan di lantai",
    ],
    answer: 0,
    fact: "Mencuci tangan adalah kebiasaan baik sebelum menikmati makanan.",
    emoji: "🧼",
  },
  {
    id: 29,
    zone: "petis",
    question: "Membeli makanan khas sebagai oleh-oleh dapat membantu …",
    options: [
      "Usaha warga lokal",
      "Awan menjadi hujan",
      "Ikan terbang",
      "Jam berhenti",
    ],
    answer: 0,
    fact: "Mendukung produk lokal dapat membantu para pembuat makanan di daerah.",
    emoji: "🎁",
  },
  {
    id: 30,
    zone: "petis",
    question:
      "Saat tidak yakin dengan bahan makanan, kita bisa bertanya kepada …",
    options: ["Orang dewasa yang mendampingi", "Mainan", "Meja makan", "Awan"],
    answer: 0,
    fact: "Bertanya kepada orang dewasa adalah pilihan baik saat kita tidak yakin tentang makanan.",
    emoji: "💬",
  },
];

/**
 * Posisi jawaban benar diputar berdasarkan ID soal agar anak tidak terbiasa
 * selalu memilih pilihan pertama. Isi dan jawaban tetap sama.
 */
export const questions: Question[] = questionBank.map((question) => {
  const options = [...question.options];
  const targetAnswer = (question.id - 1) % options.length;
  const correctOption = options[question.answer];

  options[question.answer] = options[targetAnswer];
  options[targetAnswer] = correctOption;

  return { ...question, options, answer: targetAnswer };
});

const storageKey = "jelajah-digi-sidoarjo-progress";

export const useGameStore = defineStore("game", () => {
  const saved = localStorage.getItem(storageKey);
  const savedProgress = saved
    ? (JSON.parse(saved) as {
        onboardingDone?: boolean;
        completedZones?: string[];
        totalScore?: number;
      })
    : {};

  const onboardingDone = ref(Boolean(savedProgress.onboardingDone));
  const soundOn = ref(true);
  const completedZones = ref<string[]>(savedProgress.completedZones ?? []);
  const totalScore = ref(savedProgress.totalScore ?? 0);
  const activeZone = ref("bandeng");
  const currentIndex = ref(0);
  const selectedAnswer = ref<number | null>(null);
  const sessionScore = ref(0);

  const zoneQuestions = computed(() =>
    questions.filter((question) => question.zone === activeZone.value),
  );
  const currentQuestion = computed(
    () => zoneQuestions.value[currentIndex.value],
  );
  const isAnswered = computed(() => selectedAnswer.value !== null);
  const isCorrect = computed(
    () => selectedAnswer.value === currentQuestion.value?.answer,
  );
  const progress = computed(
    () => `${currentIndex.value + 1} / ${zoneQuestions.value.length}`,
  );
  const isSessionComplete = computed(
    () =>
      currentIndex.value >= zoneQuestions.value.length - 1 && isAnswered.value,
  );

  function persist() {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        onboardingDone: onboardingDone.value,
        completedZones: completedZones.value,
        totalScore: totalScore.value,
      }),
    );
  }

  function finishOnboarding() {
    onboardingDone.value = true;
    persist();
  }
  function startZone(zone: string) {
    activeZone.value = zone;
    currentIndex.value = 0;
    selectedAnswer.value = null;
    sessionScore.value = 0;
  }

  function chooseAnswer(answer: number) {
    if (isAnswered.value) return;
    selectedAnswer.value = answer;
    if (answer === currentQuestion.value.answer) sessionScore.value += 10;
  }

  function nextQuestion() {
    if (isSessionComplete.value) {
      if (!completedZones.value.includes(activeZone.value))
        completedZones.value.push(activeZone.value);
      totalScore.value += sessionScore.value;
      persist();
      return false;
    }
    currentIndex.value += 1;
    selectedAnswer.value = null;
    return true;
  }

  function toggleSound() {
    soundOn.value = !soundOn.value;
  }
  function resetOnboarding() {
    onboardingDone.value = false;
    persist();
  }

  return {
    activeZone,
    completedZones,
    currentIndex,
    currentQuestion,
    finishOnboarding,
    isAnswered,
    isCorrect,
    isSessionComplete,
    nextQuestion,
    onboardingDone,
    progress,
    resetOnboarding,
    selectedAnswer,
    sessionScore,
    soundOn,
    startZone,
    toggleSound,
    totalScore,
    zoneQuestions,
    chooseAnswer,
  };
});
