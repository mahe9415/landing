<template>
  <div class="contain-app">
    <div class="container rectangle centerify">
      <div class="header-wrapper">
      <div class="header">
      <div class="brand brand-head"> Mahesh </div>

      <div class="social">
        Follow Me: <i>fb</i> <i>tw</i>  <i>insta</i>
      </div>
      </div>
    </div>


    <div class="hero-wrapper">
      <div class="hero-container">
      <p class="hero-txt hello-txt">Hello, I’m Mahesh. I am an Front end Developer. I Love Pixel Perfection</p>
      <div class="hero-img">
        <img class="mahe-avatar" src="/static/mahe2X.jpg" alt="">
      </div>
    </div>
  </div>

<div class="articles-wrapper">
    <h2 class="articles-head">Check my recent articles:</h2>
    <div class="articles">
      <a class="article" href="https://codeburst.io/message-passing-using-window-object-b928df8077a6" target="_blank">
        <h4>Listen to localStorage and dance </h4>
        <p class="is-line-2">
         Yup! We can use window object to pass message between tabs(which is yours) in a same window. Lets walk together 🚶🏻‍♂️
        </p>
      </a>


            <a class="article" href="https://codeburst.io/vuex-store-d888de10d499" target="_blank">
        <h4>Vuex Store</h4>
        <p class="is-line-2">
         Vuex is a simple state management library for Vue js. It is very easy to use. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
        </p>
      </a>

            <a class="article" href="https://medium.com/@mahesh9415/publish-chrome-extension-test-build-to-google-group-b4bc4d92d4d1" target="_blank">
        <h4>Publish Chrome Extension Test Build To Google</h4>
        <p class="is-line-2">
        Ohh NOOO!!! Latest chrome update doesn’t allow manual installation of chrome extension (.crx) file.
        </p>
      </a>
    </div>
</div>

  <!-- <MyFooter twitter_handle="twitter" fb_handle="fb" google_handle="goo" /> -->
</div></div>
</template>

<script>
import MyFooter from '@/components/MyFooter'
export default {
  name:'Landing',
  components:{
    MyFooter:MyFooter
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

.header-wrapper,.hero-wrapper,.articles-wrapper{
  width:100%;
}
.hero-wrapper{
  margin-top: 2rem;
  margin: 2rem;
}
.articles{
  display: flex;
}
.article{
    margin-top: 2%;
    padding:1.8%;
    text-decoration: none;
    font-family: inherit;
    font-style: inherit;
    height: 100%;
    width: 100%;
  color:#4A4A4A;
  margin-left: 1%;
  text-align: left;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);
}
.article:first-child{
  margin-left:0;
  border-top: #47C1BF;
}
.article h4{
  margin-top: 0;
  color:#212B36;
font-family: 'Lato', sans-serif;
font-weight: 700;
  font-size: 1rem;
}
.article p{
  color: #4A4A4A;
}
.articles h2{
  color: #FFFFFF;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 34px;
}
.brand-head {
  opacity: 0.5;
  color: #FFFFFF;
  font-family: Avenir;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 25px;
}
.hello-txt {
  /*height: 88px;*/
  /*width: 735px;*/
  color: #FFFFFF;
  font-family: Avenir;
  font-size: 2rem;
  font-weight: 500;
  line-height: 44px;
  max-width: 715px;
  text-align: left;
  /*margin: 2%;*/
}
.rectangle {
  min-height: 100vh;
  /*height: 700px;*/
  /*width: 1280px;*/
  padding: 2%;
  /*border: 1px solid #979797;*/
  background-color: #0D071E;
}

.contain-app{
  position: relative;
  text-align: center;
    font-family: 'Nunito', sans-serif;
  /*padding: 2%;*/
}
.header{
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    /*margin: 2%;*/
}
.mahe-avatar{
  max-width: 100%;
  border-radius: 50%;
}
.hero-img{
  max-width: 300px;
}
.hero-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mahe-avatar{
  max-width: 300px;
  /*height: 300px*/
}
.centerify{
      display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
}
.articles-head{
    width: 100%;
    text-align: left;
}

.is-line-2{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 21px;
    max-height: 40px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.t-left{
  float: left;
}
@media only screen 
and (max-device-width : 667px){
  .t-left{
    float: none;
  }
.hello-txt{
  color: red;
  text-align: center;
}
.hero-container{
  flex-direction: column-reverse;
}
.articles{
  flex-direction: column;
}
.article{
    margin:1rem auto;
}
.article:first-child{
   margin:1rem auto;
}
}

@media only screen 
and (min-device-height : 900px){
  .centerify{
    justify-content: center;
  }
}
/*.post-link{
  text-decoration: none;
}
.my-card{
  background: inherit;
  color:#fff;
}*/
</style>