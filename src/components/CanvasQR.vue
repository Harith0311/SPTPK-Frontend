<template>
    <canvas ref="canvasQR" class="mx-auto"></canvas>
</template>

<script>
import QRCode from "qrcode";

export default {
    props: {
        kanakId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // canvasQR: null,
        };
    },

    async mounted() {
        QRCode.toCanvas(
            this.$refs.canvasQR,
            this.kanakId,
            { width: 350, height: 350 },
            function (error) {
                if (error) console.error(error);
            }
        );
    },
};
</script>
