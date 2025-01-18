"use client";

import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FormWrapper from "@/components/sections/form/FormWrapper";
import { FieldValues } from "react-hook-form";
import InputWrapper from "@/components/sections/form/InputWrapper";
import FormSection from "@/components/sections/form/FormSection";
import InputSelectWrapperExtended from "@/components/sections/form/InputSelectWrapperExtended";
import { bloodGroups, bnDistricts, bnDivisions, bnWards, enDistricts, enDivisions, enWards } from "@/constants/data";
import InputSelectWrapper from "@/components/sections/form/InputSelectWrapper";
import { useCreateUserMutation } from "@/redux/api/usersAPI";
import { toast } from "sonner";

const Register = () => {
    const [enPresentLocationInfo, setEnPresentLocationInfo] = useState({
        division: "",
        district: ""
    });
    const [bnPresentLocationInfo, setBnPresentLocationInfo] = useState({
        division: "",
        district: ""
    });
    const [enPermanentLocationInfo, setEnPermanentLocationInfo] = useState({
        division: "",
        district: ""
    });
    const [bnPermanentLocationInfo, setBnPermanentLocationInfo] = useState({
        division: "",
        district: ""
    });

    const [createUser] = useCreateUserMutation();

    const onSubmit = async (data: FieldValues) => {
        data.presentAddressInBangla = {
            ...data.presentAddressInBangla,
            ...bnPresentLocationInfo,
            country: "বাংলাদেশ"
        };
        data.presentAddressInEnglish = {
            ...data.presentAddressInEnglish,
            ...enPresentLocationInfo,
            country: "Bangladesh"
        };
        data.permanentAddressInBangla = {
            ...data.permanentAddressInBangla,
            ...bnPermanentLocationInfo,
            country: "বাংলাদেশ"
        };
        data.permanentAddressInEnglish = {
            ...data.permanentAddressInEnglish,
            ...enPermanentLocationInfo,
            country: "Bangladesh"
        };
        data.image = "";
        console.log(data);

        try {
            const res = await createUser(data);
            console.log(res);
            if (res.error) {
                toast.error((res?.error as any)?.message || "An error occurred!");
                return;
            };
            toast.success("Member registered successfully!");
        } catch (err: any) {
            toast.error(err?.message || "An error occurred!");
            console.error(err);
        };
    };

    return (
        <Container>
            <Box sx={{ my: 8 }}>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">Member Registration</h1>
                    <p className="mt-2 text-sm text-gray-600">Fill up the form to register a new member</p>
                </div>
                <FormWrapper onSubmit={onSubmit}>
                    <Stack
                        direction="column"
                        gap={4}
                    >
                        <FormSection title="Name in English">
                            <InputWrapper
                                name="nameInEnglish.firstName"
                                label="First Name"
                                placeholder="First Name in English"
                            />
                            <InputWrapper
                                name="nameInEnglish.middleName"
                                label="Middle Name"
                                required={false}
                                placeholder="Middle Name in English"
                            />
                            <InputWrapper
                                name="nameInEnglish.lastName"
                                label="Last Name"
                                placeholder="Last Name in English"
                            />
                        </FormSection>
                        <FormSection title="Name in Bangla">
                            <InputWrapper
                                name="nameInBangla.firstName"
                                label="First Name"
                                placeholder="First Name in Bangla"
                            />
                            <InputWrapper
                                name="nameInBangla.middleName"
                                label="Middle Name"
                                required={false}
                                placeholder="Middle Name in Bangla"
                            />
                            <InputWrapper
                                name="nameInBangla.lastName"
                                label="Last Name"
                                placeholder="Last Name in Bangla"
                            />
                        </FormSection>

                        <FormSection title="Present Address in English">
                            <InputSelectWrapperExtended
                                name="presentAddressInEnglish.division"
                                fieldName="division"
                                label="Division in English"
                                placeholder="Select Division"
                                items={enDivisions}
                                setState={setEnPresentLocationInfo}
                            />
                            <InputSelectWrapperExtended
                                name="presentAddressInEnglish.district"
                                fieldName="district"
                                label="District in English"
                                placeholder="Select District"
                                items={(enDistricts as any)[enPresentLocationInfo.division]}
                                disabled={!enPresentLocationInfo.division}
                                setState={setEnPresentLocationInfo}
                            />
                            <InputWrapper
                                name="presentAddressInEnglish.subDistrict"
                                label="Sub District"
                                placeholder="Sub District in English"
                            />
                            <InputWrapper
                                name="presentAddressInEnglish.union"
                                label="Union"
                                required={false}
                                placeholder="Union in English"
                            />
                            <InputSelectWrapper
                                name="presentAddressInEnglish.ward"
                                label="Ward in English"
                                required={false}
                                placeholder="Select Ward in English"
                                items={enWards}
                            />
                            <InputWrapper
                                name="presentAddressInEnglish.postOffice"
                                label="Post Office"
                                placeholder="Post Office in English"
                            />
                            <InputWrapper
                                name="presentAddressInEnglish.postalCode"
                                label="Postal Code"
                                type="number"
                                placeholder="Postal Code in English"
                            />
                            <InputWrapper
                                name="presentAddressInEnglish.village"
                                label="Village"
                                placeholder="Village in English"
                            />
                        </FormSection>
                        <FormSection title="Present Address in Bangla">
                            <InputSelectWrapperExtended
                                name="presentAddressInBangla.division"
                                fieldName="division"
                                label="Division in Bangla"
                                placeholder="Select Division"
                                items={bnDivisions}
                                setState={setBnPresentLocationInfo}
                            />
                            <InputSelectWrapperExtended
                                name="presentAddressInBangla.district"
                                fieldName="district"
                                label="District in Bangla"
                                placeholder="Select District"
                                items={(bnDistricts as any)[enPresentLocationInfo.division]}
                                disabled={!bnPresentLocationInfo.division}
                                setState={setBnPresentLocationInfo}
                            />
                            <InputWrapper
                                name="presentAddressInBangla.subDistrict"
                                label="Sub District"
                                placeholder="Sub District in Bangla"
                            />
                            <InputWrapper
                                name="presentAddressInBangla.union"
                                label="Union"
                                required={false}
                                placeholder="Union in Bangla"
                            />
                            <InputSelectWrapper
                                name="presentAddressInBangla.ward"
                                label="Ward in Bangla"
                                required={false}
                                placeholder="Select Ward in Bangla"
                                items={bnWards}
                            />
                            <InputWrapper
                                name="presentAddressInBangla.postOffice"
                                label="Post Office"
                                placeholder="Post Office in Bangla"
                            />
                            <InputWrapper
                                name="presentAddressInBangla.postalCode"
                                label="Postal Code"
                                placeholder="Postal Code in Bangla"
                            />
                            <InputWrapper
                                name="presentAddressInBangla.village"
                                label="Village"
                                placeholder="Village in Bangla"
                            />
                        </FormSection>

                        <FormSection title="Permanent Address in English">
                            <InputSelectWrapperExtended
                                name="permanentAddressInEnglish.division"
                                fieldName="division"
                                label="Division in English"
                                placeholder="Select Division"
                                items={enDivisions}
                                setState={setEnPermanentLocationInfo}
                            />
                            <InputSelectWrapperExtended
                                name="permanentAddressInEnglish.district"
                                fieldName="district"
                                label="District in English"
                                placeholder="Select District"
                                items={(enDistricts as any)[enPermanentLocationInfo.division]}
                                disabled={!enPermanentLocationInfo.division}
                                setState={setEnPermanentLocationInfo}
                            />
                            <InputWrapper
                                name="permanentAddressInEnglish.subDistrict"
                                label="Sub District"
                                placeholder="Sub District in English"
                            />
                            <InputWrapper
                                name="permanentAddressInEnglish.union"
                                label="Union"
                                required={false}
                                placeholder="Union in English"
                            />
                            <InputSelectWrapper
                                name="permanentAddressInEnglish.ward"
                                label="Ward in English"
                                required={false}
                                placeholder="Select Ward in English"
                                items={enWards}
                            />
                            <InputWrapper
                                name="permanentAddressInEnglish.postOffice"
                                label="Post Office"
                                placeholder="Post Office in English"
                            />
                            <InputWrapper
                                name="permanentAddressInEnglish.postalCode"
                                label="Postal Code"
                                type="number"
                                placeholder="Postal Code in English"
                            />
                            <InputWrapper
                                name="permanentAddressInEnglish.village"
                                label="Village"
                                placeholder="Village in English"
                            />
                        </FormSection>
                        <FormSection title="Permanent Address in Bangla">
                            <InputSelectWrapperExtended
                                name="permanentAddressInBangla.division"
                                fieldName="division"
                                label="Division in Bangla"
                                placeholder="Select Division"
                                items={bnDivisions}
                                setState={setBnPermanentLocationInfo}
                            />
                            <InputSelectWrapperExtended
                                name="permanentAddressInBangla.district"
                                fieldName="district"
                                label="District in Bangla"
                                placeholder="Select District"
                                items={(bnDistricts as any)[enPermanentLocationInfo.division]}
                                disabled={!bnPermanentLocationInfo.division}
                                setState={setBnPermanentLocationInfo}
                            />
                            <InputWrapper
                                name="permanentAddressInBangla.subDistrict"
                                label="Sub District"
                                placeholder="Sub District in Bangla"
                            />
                            <InputWrapper
                                name="permanentAddressInBangla.union"
                                label="Union"
                                required={false}
                                placeholder="Union in Bangla"
                            />
                            <InputSelectWrapper
                                name="permanentAddressInBangla.ward"
                                label="Ward in Bangla"
                                required={false}
                                placeholder="Select Ward in Bangla"
                                items={bnWards}
                            />
                            <InputWrapper
                                name="permanentAddressInBangla.postOffice"
                                label="Post Office"
                                placeholder="Post Office in Bangla"
                            />
                            <InputWrapper
                                name="permanentAddressInBangla.postalCode"
                                label="Postal Code"
                                placeholder="Postal Code in Bangla"
                            />
                            <InputWrapper
                                name="permanentAddressInBangla.village"
                                label="Village"
                                placeholder="Village in Bangla"
                            />
                        </FormSection>

                        <FormSection title="Personal Information">
                            <InputSelectWrapper
                                name="gender"
                                label="Select Gender"
                                items={["Male", "Female"]}
                            />
                            <InputSelectWrapper
                                name="bloodGroup"
                                label="Select Blood Group"
                                required={false}
                                items={bloodGroups}
                            />
                            <InputWrapper
                                name="dateOfBirth"
                                label="Date of Birth (YYYY-MM-DD)"
                            />
                            <InputWrapper
                                name="email"
                                type="email"
                                required={false}
                                label="Email Address"
                            />
                            <InputWrapper
                                name="mobile"
                                type="tel"
                                required={false}
                                label="Mobile Number"
                            />
                        </FormSection>

                        <FormSection title="Document Information">
                            <InputWrapper
                                name="birthCertificate"
                                type="number"
                                required={false}
                                label="Birth Certificate Number"
                            />
                            <InputWrapper
                                required={false}
                                name="nonSmartId"
                                type="number"
                                label="Non-Smart ID Number"
                            />
                            <InputWrapper
                                required={false}
                                name="smartId"
                                type="number"
                                label="Smart ID Number"
                            />
                            <InputWrapper
                                required={false}
                                name="oldPassport"
                                label="Old Passport Number"
                            />
                            <InputWrapper
                                required={false}
                                name="currentPassport"
                                label="Current Passport Number"
                            />
                        </FormSection>

                        <Box>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Register
                            </button>
                        </Box>
                    </Stack>
                </FormWrapper>
            </Box>
        </Container>
    );
};

export default Register;
