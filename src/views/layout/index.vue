<template>
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <div>
            <Content></Content>
        </div>
    </div>    
</template>
  
<script>
import Menu from './Menu'
import Content from './Content'
import Navbar from './Navbar'
export default {
    data() {
        return{
            isCollapse: false
        }

    },
    components: {
        Menu,
        Content,
        Navbar
    }
}
</script>

<style scoped>
.menu{
        position: fixed;
        left: 0;
        top: 70px;
        bottom: 0;
        width: 200px;
        background: #AD9D9D;
    }

.content{
    padding-left: 200px;
}

</style>

