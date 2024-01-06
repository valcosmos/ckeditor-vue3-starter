<script setup lang="ts">
import { ref } from 'vue'
import editor from './components/editor.vue'

const data = ref(`<h2>Bilingual Personality Disorder</h2><figure class="image image-style-side"><img style="aspect-ratio:600/431;" src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg" width="600" height="431"><figcaption>One language, one person.</figcaption></figure><p>This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies that were conducted almost half a century show that <strong>the language you speak has more effects on you than you realize</strong>.</p><p>One of the very first experiments conducted on this topic dates back to 1964. <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a> designed by linguist Ervin-Tripp who is an authority expert in psycholinguistic and sociolinguistic studies, adults who are bilingual in English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized drastically different dynamics for stories in English and French.</p><figure class="table"><table><thead><tr><th>&nbsp;</th><th>English</th><th>Japanese</th></tr></thead><tbody><tr><td>Real friends should</td><td>Be very frank</td><td>Help each other</td></tr><tr><td>I will probably become</td><td>A teacher</td><td>A housewife</td></tr><tr><td>When there is a conflict with family</td><td>I do what I want</td><td>It's a time of great unhappiness</td></tr></tbody></table></figure><p>Another ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked to complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed differently in <strong>different language mindsets</strong>. Here is a sample from the the experiment:</p><p>More recent <a target="_blank" rel="noopener noreferrer" href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects their cognition, behaviour, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a> that different regions of the brain become more active depending on the person’s activity at hand. Since structure, information and especially <strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life.</p>`)
</script>

<template>
  <div flex space-x-2>
    <editor v-model="data" w="50%" />
    <editor v-model="data" w="50%" preview />
  </div>
</template>

<style scoped>

</style>
