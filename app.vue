<template>
  <div class="h-screen">
    <div>
      <div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>

        <div class="fixed inset-0 flex">
          <div class="relative mr-16 flex w-full max-w-xs flex-1">
            <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button type="button" class="-m-2.5 p-2.5">
                <span class="sr-only">Close sidebar</span>
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
              <div class="flex h-16 shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company">
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li>
                    <div>
                      <label for="numberOfRocks" class="block text-sm font-medium leading-6 text-gray-900">Nombre de 🪨 :</label>
                      <div class="mt-2">
                        <input type="number" v-model="numberOfRocks" name="numberOfRocks" id="numberOfRocks"
                               class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label for="numberOfPapers" class="block text-sm font-medium leading-6 text-gray-900">Nombre de 📄 :</label>
                      <div class="mt-2">
                        <input type="number" v-model="numberOfPapers" name="numberOfPapers" id="numberOfPapers"
                               class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label for="numberOfScissors" class="block text-sm font-medium leading-6 text-gray-900">Nombre de ✂️ :</label>
                      <div class="mt-2">
                        <input type="number" v-model="numberOfScissors" name="numberOfScissors" id="numberOfScissors"
                               class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
          <div class="flex h-16 shrink-0 items-center">
            <p class="text-3xl select-none">✌️</p>
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <div>
                  <label for="numberOfRocks" class="block text-sm font-medium leading-6 text-gray-900">Nombre de 🪨 :</label>
                  <div class="mt-2">
                    <input type="number" v-model="numberOfRocks" name="numberOfRocks" id="numberOfRocks"
                           class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <label for="numberOfPapers" class="block text-sm font-medium leading-6 text-gray-900">Nombre de 📄 :</label>
                  <div class="mt-2">
                    <input type="number" v-model="numberOfPapers" name="numberOfPapers" id="numberOfPapers"
                           class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <label for="numberOfScissors" class="block text-sm font-medium leading-6 text-gray-900">Nombre de ✂️ :</label>
                  <div class="mt-2">
                    <input type="number" v-model="numberOfScissors" name="numberOfScissors" id="numberOfScissors"
                           class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>
        <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
        <a href="#">
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full bg-gray-50"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt="">
        </a>
      </div>

      <main class="py-10 lg:pl-72 h-screen">
        <div class="px-4 sm:px-6 lg:px-8 flex justify-center items-center h-full">
          <div :class="`relative border border-black`" :style="`width: ${areaSize}px; height: ${areaSize}px;`">
            <div v-for="(item, index) in items" :key="index"
                 :class="`absolute flex items-center justify-center text-lg item ${item.type} transition-all duration-500`"
                 :style="item.style">
              <span class="text-5xl">{{ item.icon }}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      icons: {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
      },
      numberOfRocks: 4,
      numberOfPapers: 4,
      numberOfScissors: 4,
      numberOfPixelMovement: 5,
      areaSize: 800,
    };
  },
  watch: {
    numberOfRocks() {
      this.generateItems();
    },
    numberOfPapers() {
      this.generateItems();
    },
    numberOfScissors() {
      this.generateItems();
    }
  },
  created() {
    this.generateItems();
  },
  mounted() {
    this.moveItemsRandomly();
  },
  computed: {
    maximumArrayPixels() {
      return this.areaSize - 40;
    }
  },
  methods: {
    generateItems() {
      this.items = [];
      this.addItems('rock', this.numberOfRocks);
      this.addItems('paper', this.numberOfPapers);
      this.addItems('scissors', this.numberOfScissors);
    },
    addItems(type, count) {
      for (let i = 0; i < count; i++) {
        this.items.push({
          type,
          icon: this.icons[type],
          style: {
            top: `${Math.floor(Math.random() * this.maximumArrayPixels)}px`,
            left: `${Math.floor(Math.random() * this.maximumArrayPixels)}px`,
          }
        });
      }
    },
    moveItemsRandomly() {
      setInterval(() => {
        this.items.forEach(item => {
          const target = this.findTarget(item);
          const currentTop = parseInt(item.style.top);
          const currentLeft = parseInt(item.style.left);

          const newTop = currentTop + (target.top > currentTop ? this.numberOfPixelMovement : -this.numberOfPixelMovement);
          const newLeft = currentLeft + (target.left > currentLeft ? this.numberOfPixelMovement : -this.numberOfPixelMovement);

          item.style.top = `${Math.max(0, Math.min(this.maximumArrayPixels, newTop))}px`;
          item.style.left = `${Math.max(0, Math.min(this.maximumArrayPixels, newLeft))}px`;
        });

        this.checkCollisions();
      }, 500);
    },
    findTarget(item) {
      const winningTargets = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      };
      const targetType = winningTargets[item.type];
      let closestTarget = null;
      let minDistance = Infinity;

      this.items.forEach(target => {
        if (target.type === targetType) {
          const distance = this.calculateDistance(item, target);
          if (distance < minDistance) {
            minDistance = distance;
            closestTarget = target;
          }
        }
      });

      return closestTarget ? {
        top: parseInt(closestTarget.style.top),
        left: parseInt(closestTarget.style.left)
      } : { top: Math.random() * this.maximumArrayPixels, left: Math.random() * this.maximumArrayPixels };
    },
    calculateDistance(item1, item2) {
      const x1 = parseInt(item1.style.left);
      const y1 = parseInt(item1.style.top);
      const x2 = parseInt(item2.style.left);
      const y2 = parseInt(item2.style.top);

      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    },
    checkCollisions() {
      for (let i = 0; i < this.items.length; i++) {
        for (let j = i + 1; j < this.items.length; j++) {
          if (this.isColliding(this.items[i], this.items[j])) {
            console.log(`Collision detected between ${this.items[i].type} and ${this.items[j].type}`);
            this.resolveCollision(this.items[i], this.items[j]);
          }
        }
      }
    },
    isColliding(item1, item2) {
      const rect1 = {
        left: parseInt(item1.style.left),
        top: parseInt(item1.style.top),
        right: parseInt(item1.style.left) + 40,
        bottom: parseInt(item1.style.top) + 40
      };

      const rect2 = {
        left: parseInt(item2.style.left),
        top: parseInt(item2.style.top),
        right: parseInt(item2.style.left) + 40,
        bottom: parseInt(item2.style.top) + 40
      };

      return !(
          rect1.right < rect2.left ||
          rect1.left > rect2.right ||
          rect1.bottom < rect2.top ||
          rect1.top > rect2.bottom
      );
    },
    resolveCollision(item1, item2) {
      const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      };

      if (winningCombinations[item1.type] === item2.type) {
        item2.type = item1.type;
        item2.icon = this.icons[item1.type];
      } else if (winningCombinations[item2.type] === item1.type) {
        item1.type = item2.type;
        item1.icon = this.icons[item2.type];
      }
    }
  }
};
</script>

<style scoped>
.game-area {
  @apply relative border border-black;
  width: 800px;
  height: 800px;
}

.item {
  @apply absolute flex items-center justify-center text-lg transition-all duration-500;
  transition: top 0.5s ease, left 0.5s ease;
}
</style>
