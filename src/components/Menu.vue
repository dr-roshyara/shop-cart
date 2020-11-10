<template>
<header class="header">
    <nav class="nav">
        <ul class="nav-links">
            <li class="link">
                <router-link to="/">Alle Produkte</router-link>
            </li>
            <li class="link">
                <router-link to="/heber">Heber</router-link>
            </li>
            <li class="link">
                <router-link to="/aggregat">Aggregat</router-link>
            </li>
            <li class="link">
                <router-link to="/aufzugzubehoer">Aufzug-Zubehör </router-link>
            </li>
        </ul>
    </nav>
    <slot></slot>
</header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
    width: 100%;
    height: 70px;
    /*background-color: rgb(145, 200, 236);*/
    background-color: #bee3f8;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav {
    width: 600px;
}

.nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.link {
    list-style: none;
    padding: 0 2em;
}

.link a {
    color: rgb(24, 22, 22);
    text-decoration: none;
}
</style>
