"use client";

import { useGetSingleUserQuery } from "@/redux/api/usersAPI";
import { Box, Container } from "@mui/material";
import { FadeLoader } from "react-spinners";
import UserProfile from "@/components/ui/UserProfile";

const SingleUser = ({ params }: any) => {
    const { data, isLoading } = useGetSingleUserQuery(params.id);

    return (
        <Container>
            {
                !isLoading
                    ? (
                        <UserProfile user={data} />
                    )
                    : <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <FadeLoader color="#3f51b5" />
                    </Box>
            }
        </Container>
    );
};

export default SingleUser;
