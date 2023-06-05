import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing",
            component: () => import("../views/LandingView.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../views/RegisterView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/forgotPassword",
            name: "forgotPassword",
            component: () => import("../views/ForgotPasswordView.vue"),
        },
        {
            path: "/OTPInput",
            name: "OTPInput",
            component: () => import("../views/OTPInputView.vue"),
        },
        {
            path: "/resetPassword",
            name: "resetPassword",
            component: () => import("../views/ResetPasswordView.vue"),
        },
        {
            path: "/registrationForm1",
            name: "registrationForm1",
            component: () => import("../views/RegistrationForm1View.vue"),
        },
        {
            path: "/registrationForm2",
            name: "registrationForm2",
            component: () => import("../views/RegistrationForm2View.vue"),
        },
        {
            path: "/registrationForm3",
            name: "registrationForm3",
            component: () => import("../views/RegistrationForm3View.vue"),
        },
        {
            path: "/registrationForm4",
            name: "registrationForm4",
            component: () => import("../views/RegistrationForm4View.vue"),
        },
        {
            path: "/homePage",
            name: "homePage",
            component: () => import("../views/HomeView.vue"),
        },

        {
            path: "/manageRegister",
            name: "manageRegister",
            component: () => import("../views/ManageRegistrationView.vue"),
        },

        {
            path: "/manageRegisterDetail/:id",
            name: "manageRegisterDetail",
            component: () =>
                import("../views/ManageRegistrationDetailView.vue"),
        },
        {
            path: "/QRcode",
            name: "QRcode",
            component: () => import("../views/QRcodeView.vue"),
        },

        {
            path: "/QRcode2",
            name: "QRcode2",
            component: () => import("../views/QRcodeView2.vue"),
        },

        {
            path: "/activity",
            name: "activity",
            component: () => import("../views/ActivityView.vue"),
            children: [
                {
                    path: "",
                    // name: "base",
                    component: () =>
                        import("../views/ActivityListBaseView.vue"),
                },
                {
                    path: "add",
                    component: () => import("../views/ActivityListAddView.vue"),
                },
                {
                    path: "update/:id",
                    component: () =>
                        import("../views/ActivityListUpdateView.vue"),
                },
                {
                    path: "tahun1",
                    component: () =>
                        import("../views/ActivityListToday1View.vue"),
                },
            ],
        },
        {
            path: "/report",
            name: "report",
            component: () => import("../views/ReportView.vue"),
            children: [
                {
                    path: "",
                    // name: "base",
                    component: () =>
                        import("../views/ReportBaseView.vue"),
                },
                {
                    path: "attendance",
                    // name: "attendance",
                    component: () =>
                        import("../views/ReportAttendanceView.vue"),
                },
                {
                    path: "activity",
                    // name: "activity",
                    component: () =>
                        import("../views/ReportActivityView.vue"),
                }
                
            ]
        },
    ],
    // linkActiveClass is for router-link classname in that particular router
    // linkActiveClass: "bg-sky-600 rounded-2xl",
    linkActiveClass: "text-white rounded-lg bg-black",
});

export default router;
