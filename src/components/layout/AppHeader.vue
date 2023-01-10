<template>
  <header>
    <div>
      <h1>Vue Router Test</h1>
    </div>
    <div>
      <ul>
        <router-link to="/register"> <li>Register</li> </router-link>
        <router-link to="/login"> <li>Login</li> </router-link>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  height: 5rem;
  background-color: rgb(53, 53, 53);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

div {
  margin: 1rem;
}

ul {
  list-style-type: none;
  display: flex;
}

li {
  padding: 1rem;
  color: white;
  border: 0;
  text-decoration: none;
}

.active__route {
  border: 1px solid white;
}
</style>
