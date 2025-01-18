import { TUser } from "@/types/userTypes";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton } from "@mui/material";
import { Delete, Visibility, Edit } from "@mui/icons-material";
import Link from "next/link";

const tableCellStyles = { fontWeight: "bold", fontSize: "1rem" };

const UserTable = ({ users }: { users: TUser[] }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                boxShadow: 0,
                borderRadius: 2,
                marginBottom: 4,
                padding: 2,
                border: "1px solid #f0f0f0"
            }}
        >
            <Table sx={{ width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={tableCellStyles}>Image</TableCell>
                        <TableCell sx={tableCellStyles}>Full Name</TableCell>
                        <TableCell sx={tableCellStyles}>National ID</TableCell>
                        <TableCell sx={tableCellStyles}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow key={user._id} sx={{ "&:nth-of-type(even)": { backgroundColor: "#f9f9f9" } }}>
                                <TableCell>
                                    <Avatar alt={user.fullNameInEnglish} src={user.image} sx={{ width: 50, height: 50 }} />
                                </TableCell>
                                <TableCell
                                    sx={{ cursor: "pointer", ":hover": { color: "#3f51b5" } }}
                                >
                                    <Link href={`/users/${user._id}`}>
                                        {user.fullNameInEnglish}
                                    </Link>
                                </TableCell>
                                <TableCell>{user.smartId || user.nonSmartId}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" sx={{ marginRight: 1 }}>
                                        <Link href={`/users/${user._id}`}>
                                            <Visibility />
                                        </Link>
                                    </IconButton>
                                    <IconButton onClick={() => { }} color="warning" sx={{ marginRight: 1 }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => { }} color="error">
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
