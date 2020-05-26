<!--手脚架的<template></template>标签-->
<!--template的缺陷：存在一值多判断-->
<!--vue提供render函数，解决template一值多判断问题，减少冗余-->
<!--适合业务简单，使用次数多的组件-->

<!--创建一个button.vue文件-->
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'normal'
            },
            text: {
                type: String,
                default: 'button'
            }
        },
        // 了解render用法
        render(h) {
        //    h类似于 createElement，接受2个参数
        //    1 - 元素    2 - 选项
            return h('button', {
                class: {
                    btn: true,
                    'btn-success': this.type === 'success',
                    'btn-danger': this.type === 'danger',
                    'btn-warning': this.type === 'warning',
                    'btn-normal': this.type === 'normal',
                },
                domProps: {
                    innerText: this.text || '默认'
                },
                on: {
                    click: this.handleClick
                }
            })
        },
        methods: {
            handleClick() {
                this.$emit('myClick');
            }
        }
    }
</script>

<style scoped>
    .btn {
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: 0;
        border-radius: 5px;
        color: #fff;
    }

    .btn-success {
        background: #2ecc71;
    }

    .btn-danger {
        background: #e74c3c;
    }

    .btn-warning {
        background: #f39c12;
    }

    .btn-normal {
        background: #bdc3c7;
    }
</style>

<!--分割线 --------------- -->
<!--引入-->
<template>
    <div>
        <h1>I am Home</h1>
        <!-- 按钮根据value显示不同类型的button-->
        <Button type="success" text="button1" @myClick="..."></Button>
    </div>
</template>

<script>
    import Button from './button.vue'
    export default {
        name: 'Home',
        data() {
            return {
                value: 1
            }
        },
        components: {
            Button
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
</style>