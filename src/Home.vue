<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2 bg-white">
            <a href="#" @click="currentPage='entypo'" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
              <svg class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" viewBox="0 0 24 24">
                  <path d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"/>
              </svg>
                Entypo
              </a>
              <a href="#" @click="currentPage='hero'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 24 24">
                  <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                </svg>
                Heroicons UI
              </a>
              <a href="#" @click="currentPage='zond'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 24 24">
                  <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
                </svg>
              Zondicons
            </a>
            <a href="#" @click="currentPage='octi'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 16 16">
                  <path d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"/>
                </svg>
              Octicons
            </a>
            <a href="#" @click="currentPage='material'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" viewBox="0 0 24 24">
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
                </svg>
              Material
            </a>
            <a href="#" @click="currentPage='awesome'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" viewBox="0 0 1792 1792">
                  <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"/>
                </svg>
              Font Awesome
            </a>
            <a href="#" @click="currentPage='jam'" class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
              <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" viewBox="-2 -2 24 24">
                <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"/>
              </svg>
              Jam
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabindex="0">
        <div v-if="currentPage === 'entypo'" class="flex flex-wrap px-4 pb-10">
            <svg-card
              v-for="(svg, index) in entypo"
              :key="`svg-${index}`"
              :viewBox="'0 0 20 20'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'hero'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in heroicons"
              :key="`svg-${index}`"
              :viewBox="'0 0 24 24'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'zond'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in zondicons"
              :key="`svg-${index}`"
              :viewBox="'0 0 20 20'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'octi'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in octicons"
              :key="`svg-${index}`"
              :viewBox="'0 0 16 16'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'material'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in material"
              :key="`svg-${index}`"
              :viewBox="'0 0 24 24'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'awesome'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in awesome"
              :key="`svg-${index}`"
              :viewBox="'0 0 1792 1792'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
        <div v-else-if="currentPage === 'jam'" class="flex flex-wrap px-4 pb-10">
          <svg-card
              v-for="(svg, index) in jam"
              :key="`svg-${index}`"
              :viewBox="'-2 -2 24 24'"
              :svg="svg"
              :callback="showSvgPath">
            </svg-card>
        </div>
      </main>
    </div>
    <!-- input modal begin -->
    <div v-if="this.showInputModal">
      <div class="unselectable fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button type="button" @click="cancelInputModal" class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <div class="pt-4 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 class="text-lg leading-6 font-medium text-gray-900 pb-6" id="modal-headline">
                {{ currentSvgName }}
              </h3>
              <div class="mt-2 max-w-full">
                <div class="mt-1 relative rounded-md shadow-sm mr-16">
                  <input  type="text"
                          id="idPathInput"
                          autofocus
                          spellcheck="false"
                          autocomplete="off"
                          autocorrect="off"
                          autocapitalize="off"
                          v-model="currentSvgPath"
                          class="w-full form-input font-medium block sm:text-sm sm:leading-5 focus:shadow-outline-green" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button type="button"  @click="okInputModal" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-primary-400 focus:outline-none focus:border-primary-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                Ok
              </button>
            </span>
            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button @click="copyToClipboard" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                Copy
              </button>
            </span>
            <span v-if="copyMessage !== ''" class="flex w-full sm:ml-3 sm:w-auto mx-3 pt-2 italic font-hairline">
              {{ copyMessage }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- input modal end --->
  </div>
</template>

<script>
import { iconsEntypo } from '@/icons/entypo.js'
import { iconsMaterial } from '@/icons/material.js'
import { iconsOcticons } from '@/icons/octicons.js'
import { iconsAwesome } from '@/icons/awesome.js'
import { iconsJam } from '@/icons/jam.js'
import { iconsHeroicons } from '@/icons/heroicons.js'
import { iconsZondicons } from '@/icons/zondicons.js'
import SvgCard from '@/components/SvgCard.vue'

export default {
  name: 'Home',
  components: { SvgCard },
  data: () => ({
    currentPage: 'entypo',
    currentSvgName: '',
    currentSvgPath: '',
    showInputModal: false,
    copymessage: '',
    entypo: iconsEntypo,
    material: iconsMaterial,
    octicons: iconsOcticons,
    awesome: iconsAwesome,
    jam: iconsJam,
    heroicons: iconsHeroicons,
    zondicons: iconsZondicons
  }),
  mounted () {
  },
  watch: {
    showInputModal: function (newValue) {
      if (newValue) {
        setTimeout(() => { document.getElementById('idPathInput').focus() }, 50)
      }
    }
  },
  methods: {
    showSvgPath (svg) {
      this.currentSvgName = svg.name
      this.currentSvgPath = svg.path
      this.copyMessage = ''
      this.showInputModal = true
    },
    cancelInputModal () {
      this.showInputModal = false
    },
    okInputModal () {
      this.showInputModal = false
    },
    copyToClipboard () {
      const copyText = document.getElementById('idPathInput')
      copyText.select()
      document.execCommand('copy')
      copyText.blur()
      this.copyMessage = 'svg path copied to the clipboard'
      this.$forceUpdate()
    }
  }
}
</script>

<style>
  .unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

</style>
