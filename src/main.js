import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


app.component('custom-input' , {
   props:['modalValue'] ,
   template:`
     <div >
         <input
           :value="modalValue" 
        @input="$emit('update:modelValue', $event.target.value)"
         > 
     </div>
   `
});
//HTML PART 
<custom-input :modal-value="SearchText"> </custom-input>
//or the long form : 
<custom-input
   :model-value="SearchText"
   @update:model-value="SearchText =$event" 
> </custom-input> 
