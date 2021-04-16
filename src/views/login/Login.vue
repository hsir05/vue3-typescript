<template>
<div class="login-container">
    <a-form
        name="custom-validation"
        class="form-wrap"
        ref="formRef"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed">
        <div class="login-title">后台管理系统</div>
        <a-form-item required has-feedback label="账号" name="account">
            <a-input v-model:value="formState.account" type="account" :size="size" autocomplete="off" />
        </a-form-item>
        <a-form-item required has-feedback label="密码" name="password">
            <a-input v-model:value="formState.password" type="password" :size="size" autocomplete="off" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 16, offset: 4 }">
            <a-button type="primary" style="width:99%" shape="round" html-type="submit" :size="size">登录</a-button>
        </a-form-item>
    </a-form>
</div>
</template>

<script lang="ts">
import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import { FormState } from "@/types/interface"
export default defineComponent({
    name: "Login",
    setup() {
        const formRef = ref();
        const formState: UnwrapRef<FormState> = reactive({
            account: '',
            password: ''
        });
        let validateAccount = async (rule: RuleObject, value: string) => {
            if (value === '') {
                return Promise.reject('请输入账号');
            } else {
                if (formState.password !== '') {
                    formRef.value.validateField('password');
                }
                return Promise.resolve();
            }
        };
        let validatePassword = async (rule: RuleObject, value: string) => {
            if (value === '') {
                return Promise.reject('请输入密码');
            } else {
                return Promise.resolve();
            }
        };

        const rules = {
            account: [{ validator: validateAccount, trigger: 'change' }],
            password: [{ validator: validatePassword, trigger: 'change' }],
        };
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        const handleFinish = (values: FormState) => {
            console.log(values, formState);
        };
        const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
            console.log(errors);
        };
        return {
            size: ref('large'),
            formState,
            formRef,
            rules,
            layout,
            handleFinishFailed,
            handleFinish
        };
    }
})
</script>

<style lang="scss" scoped>
.login-container{
    .login-title{
        font-size: 18px;
        margin: 10px 0 20px;
        font-weight: 500;
    }
    .form-wrap{
        width: 400px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        margin: 0 auto;
        transform: translateY(50%);
        padding: 20px;
    }
}
.ant-form-explain{
    text-align: left;
}
</style>