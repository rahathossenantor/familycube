"use client";

import { useGetAllUsersQuery } from "@/redux/api/usersAPI";
import { Box, Container } from "@mui/material";
import { FadeLoader } from "react-spinners";
import UserTable from "@/components/ui/UserTable";

const AllUsers = () => {
    const { data, isLoading } = useGetAllUsersQuery({});

    return (
        <Container>
            <Box>
                {
                    !isLoading
                        ? (
                            <Box sx={{
                                margin: 4,
                                paddingY: 2
                            }}>
                                <UserTable users={data || []} />
                            </Box>
                        )
                        : (
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                                <FadeLoader color="#3f51b5" />
                            </Box>
                        )
                }
            </Box>
        </Container>
    );
};

export default AllUsers;
