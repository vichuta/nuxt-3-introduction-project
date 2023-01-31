export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false;
    if(!userIsLoggedIn){
        //ถ้าเงื่อนไขของการ login == false  --> route หน้าปฏิเสธ
        return navigateTo({name: "login"});
    }
})
