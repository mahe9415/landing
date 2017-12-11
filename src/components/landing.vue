<template>
<v-container grid-list-md text-xs-center d-flex align-center>
    <v-layout row wrap>
      <!-- <v-flex xs12> -->
      <!-- </v-flex> -->
      <v-flex xs12 md6>
      <v-card>
      <v-layout row>
        <v-flex xs7>
                  <div>
                    <div class="headline"> Mahesh kumar </div>
                    <div> Front end Dev </div>
                  </div>
                </v-flex>
               <v-flex xs5>
                    <v-card-media
                      src="https://cdn-images-1.medium.com/max/1200/1*uv-FFOqpNgk-Dzp8OHl4Ew.jpeg"
                      height="125px"
                      contain
                    ></v-card-media>
                </v-flex>
      </v-layout>
      </v-card>
      </v-flex>
       <v-flex xs12 md6>
   <!--    <v-card>
        <v-card-title primary-title>
        <h3 class="headline mb-0 text-xs-center"> Writings </h3>
        </v-card-title>
             <div class="posts d-flex">
       <a class="post-link" href="https://blog.nfnlabs.in/goof-in-geeks-jungle-88c7e06e980b" target="_blank">
        <h5 class="post-heading">Goof in geeks’ jungle</h5>
        </a>
      </div>
      </v-card> -->
       <v-list two-line>
       <h2 class="headline">Writings</h2>
          <v-list-tile href="https://blog.nfnlabs.in/goof-in-geeks-jungle-88c7e06e980b" target="_blank">
            <!-- <v-list-tile-content> -->
              <v-list-tile-title class="text-xs-center">Goof in geeks’ jungle</v-list-tile-title>
              <!-- <v-list-tile-sub-title> </v-list-tile-sub-title> -->
            <!-- </v-list-tile-content> -->
          </v-list-tile>
        </v-list>
    </v-flex>

     </v-layout>
  </v-container>
</template>

<script>
export default {
name:'landing'	
}
</script>

<style>
.post-link{
  text-decoration: none;
}
</style>