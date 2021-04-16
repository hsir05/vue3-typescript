import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Modal } from 'ant-design-vue';
import { createVNode } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { getStore } from "@/utils/store";
NProgress.configure({ showSpinner: false })

//白名单，不做拦截重定向 
const whiteList = ['/', '/login', '/404']

router.beforeEach((to, from, next) => {
    NProgress.start()
    const hasToken = getStore('access-token' )
    if (whiteList.indexOf(to.path) !== -1) {
        if (hasToken && to.path === '/login') {
            next(`${from.path}`)
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (hasToken) {
            next()
        } else {
            Modal.confirm({
                title: '此功能需登录后，方可查看',
                icon: createVNode(ExclamationCircleOutlined),
                content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
                onOk() {
                    console.log('OK');
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                },
                onCancel() {
                    console.log('Cancel');
                    next(`${from.path}`)
                    NProgress.done()
                },
                class: 'test',
            });
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
