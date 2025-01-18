import baseApi from "./baseAPI";

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (user) => {
                console.log(user);

                return ({
                    url: "/users/create-user",
                    method: "POST",
                    body: user,
                });
            },
            invalidatesTags: ["users"],
        }),
        getAllUsers: build.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
            providesTags: ["users"],
        }),
        getSingleUser: build.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCreateUserMutation,
    useGetAllUsersQuery,
    useGetSingleUserQuery,
} = usersApi;
