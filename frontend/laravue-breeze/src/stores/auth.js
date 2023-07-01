/* Setup/ Composition method */
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
    const router = useRouter();

    /* State = ref */
    const user = ref(null);
    const errors = ref([]);
    const status = ref(null);
    const isLoading = ref(false);

    /* Getters = computed() */
    // const user = computed(() => authUser.value);
    // const errors = computed(() => authErrors.value);

    /* Actions = function */
    const getToken = async () => {
        await axios.get("/sanctum/csrf-cookie");
    };

    const getCurrentUser = async () => {
        errors.value = [];
        try {
            const data = await axios.get("/api/user");
            user.value = data.data;
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.log(error);
            }

            user.value = null;
        }
    };

    const login = async (form) => {
        errors.value = [];
        isLoading.value = true;
        try {
            await getToken();
            await axios.post("/login", form);
            router.push({ name: "dashboard" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.log(error);
            }
        }
        isLoading.value = false;
    };

    const register = async (form) => {
        errors.value = [];
        isLoading.value = true;
        try {
            await getToken();
            await axios.post("/register", form);
            router.push({ name: "home" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.log(error);
            }
        }
        isLoading.value = false;
    };

    const logout = async () => {
        if (confirm("Are you sure?")) {
            await axios.post("/logout");
            user.value = null;
            router.push({ name: "login" });
        }
    };

    const forgotPassword = async (form) => {
        status.value = null;
        isLoading.value = true;
        try {
            await getToken();
            const response = await axios.post("/forgot-password", form);
            status.value = response.data.status;
        } catch (error) {
            console.log(error);
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
        isLoading.value = false;
    };

    const resetPassword = async (form) => {
        status.value = null;
        isLoading.value = true;
        try {
            await getToken();
            const response = await axios.post("/reset-password", form);
            status.value = response.data.status;
        } catch (error) {
            console.log(error);
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
        isLoading.value = false;
    };

    const isLoggedIn = async () => {
        if (!user.value) await getCurrentUser();
        return user.value !== null;
    };

    // Static medthod
    router.beforeEach((to, from) => {
        if (to.path !== from.path && errors.value) {
            errors.value = [];
        }
    });

    return {
        user,
        errors,
        status,
        isLoading,
        getCurrentUser,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        isLoggedIn,
    };
});

// import { defineStore } from "pinia";
// import axios from "axios";
// import { useRouter } from "vue-router";

/* Option method */
// export const useAuthStore = defineStore("auth", {
//     state: () => ({
//         authUser: null,
//         authErrors: [],
//         authStatus: null,
//     }),
//     getters: {
//         user: (state) => state.authUser,
//         errors: (state) => state.authErrors,
//         status: (state) => state.authStatus,
//     },
//     actions: {
//         async getToken() {
//             await axios.get("/sanctum/csrf-cookie");
//         },
//         async getUser() {
//             await this.getToken();
//             const data = await axios.get("/api/user");
//             this.authUser = data.data;
//         },
//         async login(data) {
//             this.authErrors = [];
//             await this.getToken();

//             try {
//                 await axios.post("/login", data);
//                 this.router.push("/dashboard");
//             } catch (error) {
//                 if (error.response.status === 422) {
//                     this.authErrors = error.response.data.errors;
//                 } else {
//                     console.log(error);
//                 }
//             }
//         },
//         async register(data) {
//             this.authErrors = [];
//             await this.getToken();
//             try {
//                 await axios.post("/register", data);
//                 this.router.push("/dashboard");
//             } catch (error) {
//                 if (error.response.status === 422) {
//                     this.authErrors = error.response.data.errors;
//                 }
//             }
//         },
//         async logout() {
//             await axios.post("/logout");
//             this.authUser = null;
//         },
//         async handleForgotPassword(email) {
//             this.authErrors = [];
//             this.getToken();
//             try {
//                 const response = await axios.post("/forgot-password", {
//                     email: email,
//                 });
//                 this.authStatus = response.data.status;
//             } catch (error) {
//                 if (error.response.status === 422) {
//                     this.authErrors = error.response.data.errors;
//                 }
//             }
//         },
//         async handleResetPassword(resetData) {
//             this.authErrors = [];
//             try {
//                 const response = await axios.post("/reset-password", resetData);
//                 this.authStatus = response.data.status;
//             } catch (error) {
//                 if (error.response.status === 422) {
//                     this.authErrors = error.response.data.errors;
//                 }
//             }
//         },
//     },
// });
