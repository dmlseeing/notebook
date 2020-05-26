// 高精度全局权限处理
// 造车轮，挂在全局上对权限进行处理
// 处理某按钮显示权限问题（处理包含多种角色的项目）
//
// 项目里新建common文件夹存放全局.js文件
// common/jurisdiction.js（译为管辖权），用于存放与权限相关的全局函数/变量

export function checkJurisdiction(key) {
    // 权限数组
    let jurisdictionList = ['1', '2', '3', '4'];
    let index = jurisdictionList.indexOf(key);
    console.log('index:', index);
    return index > -1;
    // if (index > -1) {
    //     有权限
    //     return true;
    // } else {
    //     有权限
    //     return false;
    // }
}

// 将全局权限js挂载到全局中    main.js
import {checkJurisdiction} from './common/jurisdiction'

// vue自定义指令--Vue.directive
Vue.directive('permission', {
    inserted(el, binding) {
        // inserted -> 元素插入的时候
        // 获取到 v-permission到值
        let permission = binding.value;

        if (permission) {
            let hasPermission = checkJurisdiction(permission);
            if (!hasPermission) {
                // 没有权限，移除DOM元素
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error('需要传key');
        }
    }
});
