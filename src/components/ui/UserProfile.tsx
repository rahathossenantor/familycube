import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TAddress, TName, TUser } from "@/types/userTypes";

const UserProfile = ({ user }: { user: TUser }) => {
    const formatName = (name: TName) => `${name.firstName} ${name.middleName || ""} ${name.lastName}`.trim();

    const formatAddress = (address: TAddress) => {
        return `${address.village}, ${address.union || ""}-${address.ward}, ${address.subDistrict}, ${address.district}, ${address.division}, ${address.postOffice || ""}-${address.postalCode}, ${address.country}`.trim();
    };

    return (
        <Box sx={{ p: 3, backgroundColor: "#f0f2f5", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={6} sx={{ p: 5, maxWidth: 900, borderRadius: 4, backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mb: 4 }}>
                    <Avatar src={user.image} sx={{ bgcolor: "#1976d2", width: 100, height: 100, mb: 2 }}>
                        {!user.image && <AccountCircleIcon sx={{ fontSize: 80 }} />}
                    </Avatar>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        User Information
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Name (English):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatName(user.nameInEnglish)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Name (Bangla):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatName(user.nameInBangla)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Gender:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.gender}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Date of Birth:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.dateOfBirth}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Blood Group:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.bloodGroup || "N/A"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Mobile:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.mobile || "N/A"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Email:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email || "N/A"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Present Address (English):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.presentAddressInEnglish ? formatAddress(user.presentAddressInEnglish) : "N/A"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Permanent Address (English):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatAddress(user.permanentAddressInEnglish)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Present Address (Bangla):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.presentAddressInBangla ? formatAddress(user.presentAddressInBangla) : "N/A"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" fontWeight="bold" color="#424242">
                            Permanent Address (Bangla):
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.permanentAddressInBangla ? formatAddress(user.permanentAddressInBangla) : "N/A"}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default UserProfile;
