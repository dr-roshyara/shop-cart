<template>
<div>
    <alle-produkte :products="getAufzugZubehoer"> </alle-produkte>
</div>
</template>

<script>
import AlleProdukte from '@/components/AlleProdukte'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        AlleProdukte
    },
    computed: {
        ...mapGetters([
            'getAufzugZubehoer'
        ])
    }
}
</script>
