<template>
    <div class="widget">
        <header class="widget__header">
            <h2 class="widget__title">{{ title }}</h2>
        </header>
        <article class="widget__content">
            <slot></slot>
        </article>
    </div>
</template>

<script lang="ts">
export default {
    props: ["title"]
};
</script>

<style lang="scss">
.widget {
    $widget-spacing: 15px 20px;
    border-radius: 10px;

    overflow: hidden;

    &__title {
        font-weight: normal;
        margin: 0;
        padding: $widget-spacing;
        line-height: 1;
        font-size: 1.3rem;
        color: white;
    }

    &__header {
        background-color: rgba(black, 0.35);
    }

    &__content {
        background-color: white;
    }

    &__list {
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;

        &__item {
            padding: $widget-spacing;

            & + & {
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }
        }

        &__title {
            margin: 0 0 0.25em;
            font-size: 1.2rem;
            line-height: 1;
        }

        &__meta {
            font-size: 0.9rem;
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            opacity: 0.75;
            line-height: 1;

            &__stat {
                & + & {
                    &::before {
                        content: "•";
                        margin: 0 0.5em;
                    }
                }
            }
        }
    }

    &__loading {
        padding: $widget-spacing;
        display: block;
    }
}
</style>