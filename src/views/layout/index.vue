<template>
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <div>
            <BreadCrumb></BreadCrumb>
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
import BreadCrumb from './BreadCrumb'
export default {
    data() {
        return{
            isCollapse: false
        }

    },
    components: {
        Menu,
        Content,
        Navbar,
        BreadCrumb
    }
}
</script>

<style scoped>
.menu{
        position: fixed;
        left: 0;
        top: 45px;
        bottom: 0;
        width: 200px;
        background: #AD9D9D;
    }

.content{
    padding-left: 200px;
}

</style>

