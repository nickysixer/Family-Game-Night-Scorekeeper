<template>
    <div id="app" class="app">
        <header class="app__header">
            <button @click.prevent="showMenu = !showMenu" class="app__menu-toggle"><i class="fa fa-bars"></i></button>
            <nav :class="{ 'app__nav--show': showMenu }" class="app__nav">
                <router-link class="app__nav__item" to="/"><i class="app__nav__icon fad fa-fw fa-home"></i> Dashboard</router-link>
                <router-link class="app__nav__item" to="/"><i class="app__nav__icon fad fa-fw fa-dice"></i> Start a Game</router-link>
                <router-link class="app__nav__item" to="/"><i class="app__nav__icon fad fa-fw fa-sliders-h-square"></i> Settings</router-link>
            </nav>
        </header>
        <router-view class="app__content" />
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            showMenu: false as boolean,
        }
    }
};
</script>

<style lang="scss">
.app {
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "header content";
    font-family: "Zilla Slab", serif;
    color: #2c3e50;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    &__header {
        grid-area: header;
        background-color: white;
        box-shadow: 0 0 15px rgba(black, 0.5);
    }

    &__menu-toggle {
        background-color: transparent;
        border: none;
        color: #6176dc;
        padding: 1em;
        line-height: 1;

        &:focus {
            outline: none;
        }
    }

    &__nav {
        grid-area: navigation;
        max-width: 0;
        overflow: hidden;
        transition: all 0.4s ease-in-out;

        &__item {
            display: block;
            font-weight: bold;
            padding: 1em;
            padding-right: 1.5em;
            white-space: nowrap;
            font-size: 1.1rem;

            &:hover {
                text-decoration: none;
                color: #f76b00;
            }
        }

        &__icon {
            margin-right: 0.5em;
        }

        &--show {
            max-width: 500px;
        }
    }

    &__content {
        grid-area: content;
    }

    a {
        color: #2c3e50;

        &:hover {
            text-decoration: none;
            color: #f76b00;
        }
    }
}
</style>
