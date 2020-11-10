<template>
<div>
    <alle-produkte :products="getAlleProdukte"> </alle-produkte>
</div>
</template>

<script>
import AlleProdukte from '@/components/AlleProdukte'
import {
    mapGetters
}
from 'vuex'
export default {
    components: {
        AlleProdukte
    },
    computed: {
        ...mapGetters([
            'getAlleProdukte'
        ])
    }
}
</script>
