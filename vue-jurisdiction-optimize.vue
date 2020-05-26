<!--jurisdiction使用方法-->

<template>
    <div>
        <h1>I am Home</h1>
        <!--按钮根据value-->
        <div v-permission="'10'">
            <button>权限1</button>
        </div>
        <div v-permission="'5'">
            <button>权限2</button>
        </div>
    </div>
</template>

<!--无需再通过value去判断，直接通过v-permission的值进行判断即可-->