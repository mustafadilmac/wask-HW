<template>
  <div>
    <div :id="'slide-section-' + key" class="slide-holder">
      <!--   make group items for give animation one item for better render reason   -->
      <div class="slide-container" :class="reverse ? 'reverse':'straight'">
        <div class="social-box" v-for="(slide, index) in slides" :key="'slide-' + index">
          <img :src="'src/assets/img/social/' + slide.name + '.png'" :alt="slide.name + ' logo'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: ['reverse', 'key'],
  data() {
    return {
      //you can increase or decrease items
      slides: [
        {
          name: 'facebook'
        },
        {
          name: 'youtube'
        },
        {
          name: 'instagram'
        },
        {
          name: 'shopify'
        },
        {
          name: 'snapchat'
        },
        {
          name: 'shopier'
        },
        {
          name: 'mailchimp'
        },
        {
          name: 'twitter'
        },
        {
          name: 'tiktok'
        },
        {
          name: 'whatsapp'
        },
        {
          name: 'google'
        },
        {
          name: 'analytics'
        },
        {
          name: 'wordpress'
        },
        {
          name: 'linkedin'
        },
        {
          name: 'woocommerce'
        },
        {
          name: 'yandex'
        }
      ]
    }
  },
  mounted() {
    //here I'm getting scroll height for make it dynamic offset height and other increase or decrease item issue
    let element = document.getElementById('slide-section-' + this.key);
    if(element) {
      document.documentElement.style.setProperty('--scroll-height', '-' + element.scrollHeight + 'px');
    }
  }
}
</script>

<style>
:root {
  --scroll-height: 0px;
}
.slide-holder {
  margin-top: 12vh;
  max-height: 75vh;
  overflow: hidden;
  position: relative;
}
.slide-holder::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  color: red;
  height: 10%;
  background: linear-gradient(180deg, #FFFFFF, transparent);
  pointer-events: none;
}

.slide-holder::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: linear-gradient(0deg, #FFFFFF, transparent);
  z-index: 1;
  pointer-events: none;
}
.slide-container {
  display: inline-block;
}
.social-box {
  border-radius: var(--radius);
  background-color: var(--soft-bg);
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  pointer-events: none;
  user-select: none;
}
.social-box:last-child {
  margin-bottom: 0;
}
.slide-container.reverse {
  animation: 35s reverseAnimation infinite;
}
.slide-container.straight {
  animation: 35s straightAnimation infinite;
}
.social-box img {
  pointer-events: none;
  user-select: none;
  max-height: 50px;
  /* just make it a little bit better size */
}

/* just make a infinite animation you can change it by default at figma ( not keep trucked animation  ) */
@keyframes reverseAnimation {
  0% {
    transform: translateY( calc(var(--scroll-height) + 75vh) );
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY( calc(var(--scroll-height) + 75vh) );
  }
}
@keyframes straightAnimation {
  0% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(calc(var(--scroll-height) + 75vh - 20px));
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
