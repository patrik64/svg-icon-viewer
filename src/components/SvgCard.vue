<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-48">
    <div class="wcard unselectable mx-4 mt-4 h-40 relative" @click="cardClick">
      <div class="flex flex-col px-4 py-5 sm:p-6 absolute inset-0 flex items-center justify-center">
        <div>
          <svg :viewBox="viewBox" width="32" height="32">
            <path :d="svg.path"/>
          </svg>
        </div>
        <div>
          <p class="mt-4 text-center font-medium">{{ svg.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgCard',
  props: {
    svg: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    },
    viewBox: {
      type: String,
      required: true
    }
  },
  methods: {
    cardClick () {
      if (this.callback) {
        this.callback(this.svg)
      }
    }
  }
}
</script>

<style>
  .wcard {
    border: 1px solid rgba(0,0,0,.125);
    margin-top: 20px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,.08),0 2px 12px rgba(0,0,0,.06);
  }

  .wcard:hover {
      background-color: rgb(221, 230, 238);
      box-shadow: 2px 4px 8px rgba(0,0,0,.08),2px 4px 24px rgba(0,0,0,.06);
  }
  .cardfooter {
    font-size: 0.7rem;
  }

  .removeBtn {
    float: right;
    margin-top: 0.3rem;
    display: inline-block;
  }

  .removeBtn:hover {
    border: 1px dotted rgba(0,0,0,0.6 );
  }

  .slide-enter {
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
