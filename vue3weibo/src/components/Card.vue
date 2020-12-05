<template>
   <div class="card">
       <div class="food-card">
           <div class="food-card__image">
              <slot name="image"></slot>

           </div>

           <div class="food-card__details">
               <span class="food-card__name"><slot name="title"></slot></span>
               <span class="food-card__desc"><slot name="content"></slot></span>
               <div class="food-card__rating">
                   <div class="food-card__star food-card__star--gold"></div>
                   <div class="food-card__star food-card__star--gold"></div>
                   <div class="food-card__star food-card__star--gold"></div>
                   <div class="food-card__star"></div>
               </div>
           </div>
           <div class="footer">
               <slot name="contro"></slot>
           </div>
       </div>
   </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'Card',
        setup() {
            return {}
        }
    });
</script>

<style scoped>
    .food-card {
        background-color: #fcfcfc;
        position: relative;
        width: 400px;
        overflow: hidden;
        border-radius: 30px;
        box-shadow: -10px 7px 15px -10px rgba(51, 51, 51, 0.25);
        transition: transform 0.3s;
        margin: 20px auto;

    }

    .food-card:hover {
        z-index: 5;
    }
    .food-card__image {

        height: 230px;
    }
    .food-card__image > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .food-card__details {
        display: grid;
        grid-row-gap: 8px;
        grid-template: 1fr 3fr / 3fr ;
        padding: 8px 30px 5px;
    }
    .food-card__name {
        grid-column: 1;
        grid-row: 1;
        font-size: 18px;
        font-weight: bold;
        color: #11313c;
    }
    .food-card__desc {
        grid-column-start: 1;
        grid-row: 2;
        font-size: 14px;
        font-weight: 500;
        color: #949a98;
    }
    .food-card__rating {
        grid-column: 2;
        grid-row: 1;
        text-align: right;
    }
    .food-card__star {
        width: 16px;
        height: 16px;
        background-color: #dadada;
        display: inline-block;
        clip-path: polygon(
                50% 0%,
                61% 35%,
                98% 35%,
                68% 57%,
                79% 91%,
                50% 70%,
                21% 91%,
                32% 57%,
                2% 35%,
                39% 35%
        );
    }
    .food-card__star:not(:last-child) {
        margin-right: 6px;
    }
    .food-card__star--gold {
        background-color: #e6c356;
    }
    .footer{
        border-top: #cfcfcf 3px solid;
        height: 50px;
    }
</style>
