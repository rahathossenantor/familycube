import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TAddress, TName, TUser } from "@/types/userTypes";

const UserProfileField = ({ label, value }: { label: string; value?: string }) => (
    <Grid item xs={12} sm={6}>
        <Typography variant="body1" fontWeight="bold" color="#424242">
            {label}:
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {value || "N/A"}
        </Typography>
    </Grid>
);

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
                <Grid container spacing={2}>
                    <UserProfile.Field
                        label="Name (English)"
                        value={formatName(user.nameInEnglish)}
                    />
                    <UserProfile.Field
                        label="Name (Bangla)"
                        value={formatName(user.nameInBangla)}
                    />

                    <UserProfile.Field
                        label="Gender"
                        value={user.gender}
                    />
                    <UserProfile.Field
                        label="Blood Group"
                        value={user.bloodGroup}
                    />

                    <UserProfile.Field
                        label="Date of Birth"
                        value={user.dateOfBirth}
                    />
                    <UserProfile.Field
                        label="Birth Certificate"
                        value={user.birthCertificate}
                    />

                    <UserProfile.Field
                        label="Non Smart ID"
                        value={user.nonSmartId}
                    />
                    <UserProfile.Field
                        label="Smart ID"
                        value={user.smartId}
                    />

                    <UserProfile.Field
                        label="Previous Passport"
                        value={user.oldPassport}
                    />
                    <UserProfile.Field
                        label="Current Passport"
                        value={user.currentPassport}
                    />

                    <UserProfile.Field
                        label="Mobile"
                        value={user.mobile}
                    />
                    <UserProfile.Field
                        label="Email"
                        value={user.email}
                    />

                    <UserProfile.Field
                        label="Present Address (English)"
                        value={user.presentAddressInEnglish ? formatAddress(user.presentAddressInEnglish) : undefined}
                    />
                    <UserProfile.Field
                        label="Present Address (Bangla)"
                        value={user.presentAddressInBangla ? formatAddress(user.presentAddressInBangla) : undefined}
                    />

                    <UserProfile.Field
                        label="Permanent Address (English)"
                        value={formatAddress(user.permanentAddressInEnglish)}
                    />
                    <UserProfile.Field
                        label="Permanent Address (Bangla)"
                        value={user.permanentAddressInBangla ? formatAddress(user.permanentAddressInBangla) : undefined}
                    />
                </Grid>
            </Paper>
        </Box>
    );
};

UserProfile.Field = UserProfileField;

export default UserProfile;
