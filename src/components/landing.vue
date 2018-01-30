<template>
  <div class="contain-app">
    <div class="container rectangle">
      
      <div class="header">
      <div class="brand brand-head"> Mahesh </div>

      <div class="social">
        Follow Me: <i>fb</i> <i>tw</i>  <i>insta</i>
      </div>
      </div>

      <div class="hero-container">
      <p class="hero-txt hello-txt">Hello, I’m Mahesh. I am an Front end Developer.<br>
      I Love Pixel Perfection</p>
      <div class="hero-img">
        <img class="mahe-avatar" src="/static/mahe.jpg" alt="">
      </div>
    </div>



    <div class="articles">
      <h2>Check my recent articles:</h2>
      <div class="article">
        <h4>Name</h4>
        <p>
         USPS has updated their postage rates and package options. Make sure you know how these changes affect your store.
        </p>
      </div>


            <div class="article">
        <h4>Name</h4>
        <p>
         USPS has updated their postage rates and package options. Make sure you know how these changes affect your store.
        </p>
      </div>

            <div class="article">
        <h4>Name</h4>
        <p>
         USPS has updated their postage rates and package options. Make sure you know how these changes affect your store.
        </p>
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
.articles{
  display: flex;

}
.article{
    padding:1.8%;
  /*height: 122px;*/
  width: 371px;
  color:#4A4A4A;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);
}
.article h4{
  color:#212B36;
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
  /*margin: 2%;*/
}
.rectangle {
  min-height: 100vh;
  /*height: 700px;*/
  /*width: 1280px;*/
  padding: 2%;
  border: 1px solid #979797;
  background-color: #0D071E;
}

.contain-app{
  position: relative;
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
}
/*.post-link{
  text-decoration: none;
}
.my-card{
  background: inherit;
  color:#fff;
}*/
</style>