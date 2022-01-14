const builder = {
    data() {
        return {
            isLoading: false,
            isActive: false,
            isMove: false,
            activeTransition: 1.1,
            active: "",
        }
    },
 // срендерит class="focus" //
    methods: {
        getClasses(value){
            if (value) return "focus";
        },
            acTiming(selectCategory){
                this.active = selectCategory;
        },
        },
    mounted() {},
    computed: {
    },
    template: `
    <div class="row">
        <div @mouseover="isLoading = true" @mouseleave="isLoading = false" class="col cm1" :class="getClasses(isLoading)">
            <div class="frame_4592"></div>
            <div class="data">
                <div class="frame_4611"></div>
                <div class="bbloxx-1" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4591"></div>
                    <div class="grax-1"></div>
                    </div>
                <div class="frame_4609">
                    <div class="frame_4592"></div>
                    <div class="frame_4593"></div>
                </div>
                <div class="bbloxx-2" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4592"></div>
                    <div class="grax-2"></div>
                </div>
                <div class="frame_4592"></div>
            </div>
            <div class="frame_4591"></div>
        </div>
        <div  @mouseover="isActive = true" @mouseleave="isActive = false" class="col cm2" :class="getClasses(isActive)">
            <div class="frame_4592"></div>
            <div class="data">
                <div class="bbloxx-1" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4593"></div>
                    <div class="grax-1"></div>
                    <div class="frame_4594"></div>
                </div>
                <div class="frame_4606">
                    <div class="frame_4593"></div>
                    <div class="frame_4591"></div>
                    <div class="frame_4594"></div>
                </div>
                <div class="bbloxx-2" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4593"></div>
                    <div class="grax-2"></div>
                    <div class="frame_4594"></div>
                </div>
            </div>
            <div class="frame_4611"></div>
        </div>
        <div  @mouseover="isMove = true" @mouseleave="isMove = false" class="col cm3" :class="getClasses(isMove)">
            <div class="frame_4591"></div>
            <div class="data">
            <div class="frame_4611"></div>
                <div class="bbloxx-1" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4591"></div>
                    <div class="grax-1"></div>
                </div>
                <div class="frame_4609">
                    <div class="frame_4592"></div>
                    <div class="frame_4593"></div>
                </div>
                <div class="bbloxx-2" :style="{transition: activeTransition + 's', 'transition-timing-function': active}">
                    <div class="frame_4592"></div>
                    <div class="grax-2"></div>
                </div>
                <div class="frame_4592"></div>
            </div>
            <div class="frame_4592"></div>
        </div>
        <click-counter v-model="activeTransition"></click-counter>
        <input-radio @select-tab="acTiming"></input-radio>
        <graf></graf>
        </div>
        `
};
const app = Vue.createApp(builder);

app.component('click-counter', {
    data(){
        return {
            activeOpacity: "0",
        }
    },
    props: ['modelValue'],
    emits: ['update:modelValue'],

    template: `<div class="sliderContainer">
    <output class="out" for="fader" id="volume">Transition time: {{ modelValue }} s</output>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="range" id="fader" class="slider" min="0.5" max="7" step="0.5">
    </div>
    `,
});

app.component('input-radio', {
    data() {
        return {
            active: "",
        }
    },
    created() {
      },
      
    methods: { 
        selectTab() {
            this.$emit("select-tab", this.active);
          },
    },
    mounted() {},
    computed: {},
    template: `
    <div class="switchContainer">
    <input v-model="active" class="switch" id="switch1" value="linear" data-easing="0,0,1,1" @change="selectTab" type="radio">
        <label class="switch-for" for="switch1">linear</label>
    <input v-model="active" class="switch" id="switch2" value="ease-out" data-easing="0,0,58,1" @change="selectTab" type ="radio">
        <label class="switch-for" for="switch2">ease-out</label>
    <input v-model="active" class="switch" id="switch3" value="ease-in-out" data-easing="42,0,58,1" @change="selectTab" type="radio">
        <label class="switch-for" for="switch3">ease-in-out</label>
    <input v-model="active" class="switch" id="switch4" value="ease-in" data-easing="42,0,1,1" @change="selectTab" type="radio">
        <label class="switch-for" for="switch4">ease-in</label>
    </div>
    `,
});
app.component('graf', {
    data(){
      return {
        x1: 0.40,
        x2: 0.51,
        y1: 0.75,
        y2: 0.36,
      }
    },
    created() {
    },
    mounted(){
        let scripts = [
            "js/grafik.js"];
          scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script);
            document.head.appendChild(tag);
          });
    },
    methods: {},
    computed: {
        changeTab() {
            let span = document.getElementById("cX1").innerText;
            console.log(span);
       }, },
   watch:{},
   template: `
   <div class="edit">
   <span class="customBezier">cubic-bezier(
   <span class="editable" ref="first" id="cX1">{{ x1 }}</span>
   <span class="editable" id="cY1">{{ x2 }}</span>, 
   <span class="editable" id="cX2">{{ y1 }}</span>, 
   <span class="editable" id="cY2">{{ y2 }}</span>
    ) &larr; Редактируемый!</span>
    </div>
    <canvas id="bezier" width="160" height="160"></canvas>
      `,
  });
app.mount("#app");