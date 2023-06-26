import { reactive, ref } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";

export default function useAuth() {
    // const router = useRouter();
    const users = ref(null);
    const user = ref(null);
    const errors = ref(null);

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
        }
    };

    const login = async (form) => {
        errors.value = [];
        try {
            // getToken();
            await axios.post("/login", form);
            router.push({ name: "home" });
        } catch (error) {
            if (error.response?.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                console.log(error);
            }
        }
    };

    const register = async (form) => {
        errors.value = [];
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
    };

    const logout = async () => {
        if (confirm("Are you sure?")) {
            await axios.post("/logout");
            user.value = null;
            router.push({ name: "login" });
        }
    };

    const isLoggedIn = () => {
        // if (!user.value) {
        //      getCurrentUser();

        //     return user.value === null;
        // }

        return user.value;
    };

    return {
        users,
        user,
        errors,
        getCurrentUser,
        login,
        register,
        logout,
        isLoggedIn,
    };
}
