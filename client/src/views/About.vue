<template>
    <div class="col-8 offset-2">
        <b-container class="background">

            <div>
                <b-navbar class="nav" toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"disabled><b-img data-src="./shift-change-logo-only.jpg"/> </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#"disabled>Menu</b-nav-item>
      <b-nav-item href="#"disabled>Our Story</b-nav-item>
      <b-nav-item href="#"disabled>Location</b-nav-item>
      <b-nav-item href="#"disabled>Specials</b-nav-item>
      <b-nav-item href="#"disabled>Apply Now</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

    </b-carousel>

  </div>

</div>  
        <b-row>
            <b-col>
                <b-img src="@/assets/scShop.jpg"/> 
            </b-col>
            <b-col>
                <h1>OUR STORY</h1>
                    <p>
                        The Shift-Change project was established in November of 2018. It is a fictional pizzeria that has built its reputation unrealisticly fast on quality coding! Our first "Shift-Change" restaurant was located in Overland Park, MO. It's become a hotspot for imaginary pizza lovers alike.
                    </p>
                    <br>
                    <p>
                        There's nothing quite like it in Overland Park because it doesnt exist, from the backend to the frontend coding topping; you get a glimps of what Shift-Change actually is this is just a demo site and we needed some filler, Thank you and enjoy!
                    </p>
            </b-col>
        </b-row>
            <div class="p-4 thumbnail">
                <h1>GET SOCIAL</h1>
                <b-row>
                        <b-col>
                            <b-img thumbnail fluid src="@/assets/pizza1.jpg" alt="Thumbnail"/>
                        </b-col>
                        <b-col>
                            <b-img thumbnail fluid src="./assets/pizza2.jpg" alt="Thumbnail"/>
                        </b-col>
                        <b-col>
                            <b-img thumbnail fluid src="./assets/pizza3.jpg" alt="Thumbnail"/>
                        </b-col>
                </b-row>
                <b-row>
                        <b-col>
                            <b-img thumbnail fluid src="./client/src/assets/pizza4.jpg" alt="Thumbnail"/>
                        </b-col>
                        <b-col>
                            <b-img thumbnail fluid src="./client/src/assets/pizza5.jpg" alt="Thumbnail"/>
                        </b-col>
                        <b-col>
                            <b-img thumbnail fluid src="./client/src/assets/pizza6.jpg" alt="Thumbnail"/>
                        </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
h1 {
  color:  #42b983;
}
.background {
  box-shadow: 0 0 30px black;
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding: 30px;
  background-image: radial-gradient(rgb(207, 252, 201), #42b983);
}

.thumbnail {
    box-shadow: 0 0 30px black;
    margin-top: 20px;
    border-radius: 10px;
    margin-bottom: 25px;
    padding: 30px;
    background-image: radial-gradient(rgb(248, 241, 241), rgb(146, 143, 143));
}

.nav {
      background-image: radial-gradient(rgb(77, 80, 77), #111111);
        border-radius: 10px;


}
</style>