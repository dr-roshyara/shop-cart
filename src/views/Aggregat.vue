<template>
<div>
    <alle-produkte :products="getAggregat"></alle-produkte>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import AlleProdukte from '@/components/AlleProdukte'
export default {
    components: {
        AlleProdukte
    },
    computed: {
        ...mapGetters([
            'getAggregat'
        ])
    }
}
</script>
