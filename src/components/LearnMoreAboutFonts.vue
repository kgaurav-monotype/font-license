<script>


import { MtTypography, MtButton, MtIconArrowLong } from '@antiqua-design-system/vue-components';

export default {
    components: {
        MtTypography,
        MtButton,
        MtIconArrowLong
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    image: "https://picsum.photos/id/20/367/267",
                    label: "Label",
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description: "Lorem ipsum dolor sit amet consectetur.",
                    ctaLink: "https://picsum.photos/400/300"
                },
                {
                    id: 2,
                    image: "https://picsum.photos/id/49/367/267",
                    label: "Label",
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description: "Lorem ipsum dolor sit amet consectetur.",
                    ctaLink: "https://picsum.photos/400/300"
                },
                {
                    id: 3,
                    image: "https://picsum.photos/id/57/367/267",
                    label: "Label",
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description: "Lorem ipsum dolor sit amet consectetur.",
                    ctaLink: "https://picsum.photos/400/300"
                },
                {
                    id: 4,
                    image: "https://picsum.photos/id/89/367/267",
                    label: "Label",
                    title: "Lorem ipsum dolor sit amet consectetur.",
                    description: "Lorem ipsum dolor sit amet consectetur.",
                    ctaLink: "https://picsum.photos/400/300"
                }
            ]
        };
    }
};
</script>


<template>
    <div class="card-container flex flex-col gap-3">
        <MtTypography class="mb-3" v-bind="{ tag: 'span', variant: 'heading7--medium' }">Learn more about the business of fonts</MtTypography>
        <div class="flex justify-between gap-6">
            <div class="card" v-for="card in cards" :key="card.id">
                <img :src="card.image" alt="Card Image" class="card-image mb-6">
                <MtTypography class="uppercase" v-bind="{ tag: 'span', variant: 'micro2--medium', color: 'spirits--700' }">{{ card.label }}</MtTypography>
                <MtTypography class="card-title" v-bind="{ tag: 'h3', variant: 'body1--medium', color: 'spirits--800' }">{{ card.title }}</MtTypography>
                <MtTypography class="card-description" v-bind="{ tag: 'p', variant: 'body2--regular', color: 'spirits--700' }">{{ card.description }}</MtTypography>
                <a :href="card.ctaLink" class="card-cta">
                    <MtButton v-bind="{ tag: 'span', variant: 'ghost'}">Read more <MtIconArrowLong slot="icon-end" rotate="up-right"></MtIconArrowLong></MtButton>
                </a>
            </div>
        </div>
    </div>
</template>



<style scoped>

.card-container {
    background-color: var(--mt-color--spirits--50);
    padding: 32px 24px 48px 24px;
}

.card {
    width: 25%;
}

.card-image {
    width: 100%;
    height: 226px;
    margin-bottom: 24px;
    border-radius: 16px;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-description {
    margin-bottom: 24px;
}

</style>