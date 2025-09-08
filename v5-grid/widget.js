Vue.component('widget', {
  template: ` 
  <transition-group name="cards" tag="div" :class="['wrapper-item', { 'wrapper-item-open': selected != (null) }]" >
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      class="item"
      :class="{ 'is-open': selected === index }"
      @click="toggleCard(index)"
    >
    <button  v-if="selected === (index)" class="btn-close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
    </button>
      <div class="wrap-icon-name">
        <div :class="['icon', 'icon-' + (index)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                    d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
            </svg>
        </div>
        <div class="name">{{card.name}}</div>
        <div class="name-is-open">{{card.name}}</div>
      </div>
      
      <transition name="expand">
        <div v-if="selected === index" class="description">
          <div class="title">{{card.title}}</div>
          <div v-if="card.lists" class="lists">
              <div v-for="list in card.lists" :key="list.id" class="list">
                  <div class="icon-name">
                      <div class="list-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                              <path
                                  d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z" />
                          </svg>
                      </div>
                      <div class="name">{{list.name}}</div>
                  </div>
                  <div class="text">{{list.text}}</div>
              </div>
          </div>
        </div>
      </transition>
      <div class="wrap-bottom">
          <button class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                      d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
              </svg>
              <span>High-Churn Events</span>
          </button>
      </div>
    </div>
  </transition-group>
  `,

  data() {
    return {
      selected: null,
      cards: [
        {
          id: 1,
          name: 'Negative User Experience',
          title: 'Very Low Next Day Retention',
          lists: [
            {
              id: 1,
              name: 'Likely explanation',
              text: 'A negative User Experience occurs during minute 1 of your onboarding.',
            },
            {
              id: 2,
              name: 'We recommend',
              text: 'Pay close attention to the experience for cohorts Platform: iOs in Canada. The negative experience is more prominent for them.',
            },
          ],
        },
        {
          id: 2,
          name: 'Negative User Experience',
          title: 'Very Low Next Day Retention',
          lists: [
            {
              id: 1,
              name: 'Likely explanation',
              text: 'A negative User Experience occurs during minute 1 of your onboarding.',
            },
            {
              id: 2,
              name: 'We recommend',
              text: 'Pay close attention to the experience for cohorts Platform: iOs in Canada. The negative experience is more prominent for them.',
            },
          ],
        },
        // {
        //   id: 3,
        //   name: 'Negative User Experience',
        //   title: 'Very Low Next Day Retention',
        //   lists: [
        //     {
        //       id: 1,
        //       name: 'Likely explanation',
        //       text: 'A negative User Experience occurs during minute 1 of your onboarding.',
        //     },
        //     {
        //       id: 2,
        //       name: 'We recommend',
        //       text: 'Pay close attention to the experience for cohorts Platform: iOs in Canada. The negative experience is more prominent for them.',
        //     },
        //   ],
        // },
      ],
    };
  },

  methods: {
    toggleCard(i) {
      // если нажата та же карточка → закрываем
      if (this.selected === i) {
        this.selected = null;
      } else {
        // иначе закрываем предыдущую и открываем новую
        this.selected = i;
      }
    },
  },
});
