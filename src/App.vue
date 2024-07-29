<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/addProduct">Add Product</router-link>
      <router-link to="/addCategory">Add Category</router-link>
    </ul>
    <div @click="addTag(bool)"><span></span><span></span><span></span></div>
    <nav>
      <li v-for="(tag, index) in arr" :key="index">
        <router-link :to="tag" @click="remove()">{{ tag.name }} </router-link>
      </li>
    </nav>
  </nav>
  <router-view />
</template>

<script>

export default {
  data() {
    let arr = []
    return {
      arr,
      bool: true
    }
  },
  methods: {
    addTag() {
      if (this.bool) {
        this.arr = [{ path: "/", name: "Home" },
        { path: "/addProduct", name: "Add Product" },
        { path: "/addCategory", name: "Add Category" }]
      } else {
        this.arr = []
      }
      this.bool = !this.bool
    },
    remove() {
      console.log("ok");
      this.arr = []

    }
  },
  mount: {
    value(newValue, oldValue) {
      // Code to run when `value` changes
      console.log('Component is about to be unmounted');
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #0f202d;
  min-height: 100vh;
  box-shadow: inset 0 0 15px 10px #d8d8d851;
  color: #fff;

  @media (max-width:576px) {
    box-shadow: none
  }

  >nav {
    padding: 30px;
    background-color: #19252f;
    border-radius: 0 0 15px 15px;
    border-bottom: 1px solid #9fa6ab;

    @media (max-width:576px) {
      display: flex;
      justify-content: end;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 20px 30px;

      @media (max-width:576px) {
        display: none;
      }

      a {
        font-weight: bold;
        color: #9fa6ab;
      }

      a.router-link-exact-active {
        color: #fff;
      }
    }

    div {
      width: 50px;
      height: 50px;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px 14px;
      display: none;
      cursor: pointer;

      @media (max-width:576px) {
        display: flex;
      }

      span {
        height: 2px;
        background-color: #fff;
      }
    }

    >nav {
      position: absolute;
      right: 0;
      top: 65px;
      width: 70%;
      background-color: #19252f;
      display: grid;
      gap: 20px;
      padding-bottom: 10px;
      border-radius: 0 0 20px 20px;

      a {
        font-weight: bold;
        color: #9fa6ab;
      }

      a.router-link-exact-active {
        color: #fff;
      }
    }
  }
}
</style>
