<template>
    <div class="games">
        <span v-if="loading" class="widget__loading"><i class="fas fa-spinner fa-pulse"></i> Loading…</span>
        <ul v-else class="widget__list">
            <li v-for="game in games" :key="game.guid" class="widget__list__item">
                <h2 class="widget__list__title">
                    <a href="#">{{ game.name }}</a>
                </h2>
                <ul class="widget__list__meta">
                    <li class="widget__list__meta__stat widget__list__meta__stat--started">{{ game.started }}</li>
                    <li class="widget__list__meta__stat widget__list__meta__stat--players">{{ game.players.length }} Players</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            loading: false as boolean,
        };
    },

    computed: {
        games(): Array<any> {
            return this.$store.state.games;
        }
    },

    created() {
        this.loading = true;
        this.$store.dispatch("fetchGames").then((games: Array<any>) => {
            this.loading = false;
        });
    }
});
</script>

<style lang="scss" scoped></style>
