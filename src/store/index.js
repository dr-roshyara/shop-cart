import { createStore } from 'vuex'
import shop from '@/api/shop';

export default createStore({
  state: {
    
    heber:[],
    aggregat: [],
    AufzugZubehoer: [],
    cartProducts: [],
    cart :[],
    //
    currentProduct: {},
    showModal:true,
    showPopupCart:false,
    checkoutStatus:null,
  },
  getters: {
    getHeber:           state => {

      return state.heber.filter(product=>product.inventory>0)
    },
    getAggregat:        state => state.aggregat.filter(product=>product.inventory>0),
    getAufzugZubehoer:  state=>state.AufzugZubehoer.filter(product=>product.inventory>0),
    getProductsInCart:  state=>state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal:      state=>state.showModal,
    getPopupCart:      state => state.showPopupCart,
    getAlleProdukte:  (state)=>{
        const _alleProdukute =state.heber.concat(state.aggregat).concat(state.AufzugZubehoer);
      return _alleProdukute.filter(product=>product.inventory>0);
    },
    cartProducts(state,getters){
      const products =getters.getAlleProdukte;
      return state.cart.map(cartItem=>{
        const product =products.find( product=> product.id===cartItem.id);
        //const product =products.find( product=> product.id===cartItem.id);
        return {
          id: cartItem.id,          
          quantity: cartItem.quantity,
          name: product.name, 
          preis: product.preis,
          image: product.image,           
        }
      });
    },
    cartTotal(state, getters){
      // let total =0;
      // getters.cartProducts.array.forEach(product => {
          
      //   total +=product.price*product.quantity;
        
      // });
     return  getters.cartProducts.reduce((total, product)=>total+product.preis*product.quantity,0);
      //return 1;
    },
    //next
   totalCartItem(state, getters){
      // let total =0;
      // getters.cartProducts.array.forEach(product => {
          
      //   total +=product.price*product.quantity;
        
      // });
     return  getters.cartProducts.reduce((total, product)=>total+product.quantity,0);
      //return 1;
    },
    //next
    productIsInStock(){
      return ((product)=>{
          product.inventory>0
      })
    }
    //next 
  },
  mutations: {
        SET_HEBER: (state, heber)=>{
          state.heber =heber;
        },
        SET_AGGREGAT: (state, aggregat)=>{ 
          state.aggregat =aggregat;
      },
      SET_AUFZUGZUBEHOER: (state, AufzugZubehoer)=>{
        state.AufzugZubehoer =AufzugZubehoer;
    },
        
    ADD_PRODUCT: (state, product)=>{
         state.cartProducts.push(product);
       },
       REMOVE_PRODUCT: (state, index) => {
        // state.cartProducts.splice(index, 1);
        state.cart.splice(index, 1);
        
      },
       CURRENT_PRODUCT:(state, product)=>{
         state.currentProduct =product;
       },
       SHOW_MODAL:(state)=>{
          state.showModal =!state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
          state.showPopupCart = !state.showPopupCart;
        },
        PUSH_PRODUCT_TO_CART(state, productId){
          state.cart.push({
            id: productId,
            quantity: 1
          }); 
        },
        INCREMENT_ITEM_QUANTITY(state, cartItem){
          cartItem.quantity++;
        },
        //next 
        DECREMENT_PRODUCT_INVENTORY(state,product){
          product.inventory--;
        },
        //next 
        emptyCart(state){
          state.cart=[];
        },
        //next 
        setCheckoutStatus(state,status){
          state.checkoutStatus =status
        }

  },
  actions: {
      //next function 
      addProductToCart1({state,  commit}, product)
      {
        if(product.inventory>0){
          const cartItem =state.cart.find(item=>item.id===product.id)
          if(!cartItem){
            //if 
              commit('PUSH_PRODUCT_TO_CART', product.id)
          }else{
            //else 
            commit('INCREMENT_ITEM_QUANTITY',cartItem)
          }
          commit('DECREMENT_PRODUCT_INVENTORY',product)
        }
      },
      //end of function
      checkout({state, commit}){
        shop.buyProducts(
          state.cart,
          ()=>{
           commit('emptyCart');
           commit('setCheckoutStatus','success');
          },
          ()=>{
            commit('setCheckoutStatus','fail');
          }
        )
      }, 
      //next function 
    addProduct:(context, product)=>{
      context.commit('ADD_PRODUCT',product);
      //console.log(context.state.cartProducts.length )
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHideModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
    fetchProducts({commit}){
      // you can also pass context . context is just like store. 
      // then you can write context.commit 
      return new Promise(
         (resolve)=>{
           //make the api call 
           shop.getProducts(products=>{
             commit('SET_HEBER',products.heber);
             commit('SET_AGGREGAT',products.aggregat);
             commit('SET_AUFZUGZUBEHOER',products.AufzugZubehoer); 
             resolve();
           });
         }  
      );
    }

  },
  modules: {
  }
})

