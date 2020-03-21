<template>
    <div class="trafficlight">
        Red
        <Light startColor='1'></Light>
    </div>
</template>
<script>
import Light from '@/components/Light'

export default {
    components:{
        Light
    }
}
</script>