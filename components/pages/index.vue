<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <section class="socialMedia">
    <ul class="sci">
      <li
        v-for="icon in ['facebook', 'youtube', 'twitter', 'instagram']"
        :data-text="icon"
        :data-color="`--color-${icon}`"
      >
        <a href="#" ref="liTilt" :class="icon">
          <i :class="`fa fa-${icon}`" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import 'assets/scss/main.scss'
import vanillaTilt from 'vanilla-tilt'
const liTilt = ref<HTMLElement>()

onMounted(() => {
  const icons = document.querySelectorAll('.sci li')
  const socialMedia = document.querySelector('.socialMedia') as HTMLElement

  vanillaTilt.init(liTilt.value!, {
    max: 30,
    speed: 400,
    glare: true,
    'max-glare': 1
  })

  icons.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      let color = el.getAttribute('data-color') as string

      socialMedia!.style.backgroundColor = `var(${color})`
    })

    el.addEventListener('mouseleave', () => {
      socialMedia!.style.backgroundColor = `#fff`
    })
  })
})
</script>

<style scoped lang="scss">
$colors: 'facebook', 'youtube', 'twitter', 'instagram';
.socialMedia {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 0.5s;
  .sci {
    position: relative;
    display: flex;
    li {
      list-style: none;
      &::before {
        content: attr(data-text);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-50% + 120px));
        font-size: 14vw;
        pointer-events: none;
        font-weight: 700;
        transition: 0.5s;
        opacity: 0;
      }
      &:hover {
        &::before {
          opacity: 0.1;
          transform: translate(-50%, calc(-50% + 150px));
        }
      }
      a {
        position: relative;
        display: inline-block;
        width: 120px;
        height: 120px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        border-radius: 10px;
        text-decoration: none;
        margin: 20px;
        font-size: 4em;
        transform-style: preserve-3d;
        perspective: 500px;
        box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
        transition: background 0.45s;
        .js-tilt-glare {
          border-radius: 10px;
        }
        @each $color in $colors {
          $i: index($colors, $color);
          &:hover.#{$color} {
            background: var(--color-#{$color}, $i);
            .fa {
              color: #fff;
              transform: scale(1.75) translateZ(50px);
            }
          }
        }
        .fa {
          transition: 0.25s;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
