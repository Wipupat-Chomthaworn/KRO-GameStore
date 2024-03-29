import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    add(item) {
     if(this.cart.find((i) => i.Id == item.Id)){
        const index = this.cart.findIndex((i) => i.Id === item.Id);
        this.cart[index].quantity += 1;
        return;
     }

      this.cart.push({...item, quantity: 1});
    },
    remove(id) {
      const index = this.cart.findIndex((i) => i.Id === id);
      this.cart.splice(index, 1);
    },
    edit(index, item) {
      this.cart[index] = item;
    },
    decreaseQuantity(id) {
      const index = this.cart.findIndex((i) => i.Id === id);
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      }
      if (this.cart[index].quantity === 0) {
        this.cart.splice(index, 1);
      }
    },
    increaseQuantity(id) {
      const index = this.cart.findIndex((i) => i.Id === id);
      this.cart[index].quantity += 1;
    },
    clearCart(){
      this.cart = [];
    }
  
    
  },
  getters: {
    totalCartItems() {
      if (this.cart.length === 0) {
        return 0;
      }
      return this.cart.reduce((acc, item) => acc + (item.price*item.quantity), 0);
    },
  },
  persist: {
    storage: persistedState.localStorage,
    
  },
});
