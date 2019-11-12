<template>
    <div class="dashboard">
        <Widget title="My Games" class="dashboard__my-games">
            <UsersGameArchive/>
        </Widget>
        <div class="dashboard__sidebar"></div>
    </div>
</template>

<script lang="ts">
import Widget from "@/components/Widget.vue";
import UsersGameArchive from "@/components/UsersGameArchive.vue";

export default {
    name: "home",
    components: {
        Widget,
        UsersGameArchive
    }
};
</script>

<style lang="scss" scoped>
.dashboard {
    $spacing: 1.5em;
    padding: $spacing;
    grid-gap: $spacing;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "myGames sidebar";

    &__my-games {
        grid-area: myGames;
    }

    &__sidebar {
        grid-area: sidebar;
    }
}
</style>
