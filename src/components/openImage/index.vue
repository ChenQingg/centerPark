<template>
    <Modal class="open-image" class-name="center-modal" title="预览图片" :width="800" :footer-hide="true" v-model="visible">
        <img :src="url" style="width: 100%">
    </Modal>
</template>

<script src="./index.js"></script>
