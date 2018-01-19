<template>
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <button type="button" v-on:click="submit" class="btn btn-default">提交</button>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            submit(){
                //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
                this.$store.commit("showUserName");
            }
        }
    }
</script>
