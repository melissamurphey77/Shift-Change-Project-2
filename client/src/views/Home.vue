<template>
  <div>
    <mdb-carousel :interval="0" showControls top>
      <mdb-carousel-item alt="First slide">
        <shift-list />
      </mdb-carousel-item>
      <mdb-carousel-item alt="Second slide">
        <br><br>
        <create-employee />
        <br><br>
        <login />
        <br><br>
      </mdb-carousel-item>
      <mdb-carousel-item img src="./assets/shift-change-transparent.png" class="about" alt="Third slide">
        <img src="../assets/shift-change-transparent.png">
      </mdb-carousel-item>
      <mdb-carousel-item alt="Fourth slide">
        <shift-form />
      </mdb-carousel-item>
    </mdb-carousel>
  </div>
</template>

<script>

// @ is an alias to /src
import ShiftList from '@/components/ShiftList.vue'

import CreateEmployee from '@/components/CreateEmployee'

import ShiftForm from '@/components/ShiftForm'

import Login from '@/components/Login'

// import components from '@/components'

import { mdbCarousel, mdbCarouselItem } from 'mdbvue'

export default {
  name: 'CarouselPage',
  components: {
    // components,
    ShiftList,
    CreateEmployee,
    Login,
    ShiftForm,
    mdbCarousel,
    mdbCarouselItem
  }
}
