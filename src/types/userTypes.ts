export type TName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TGender = "Male" | "Female";

type TBloodGroup =
    | "A"
    | "B"
    | "AB"
    | "O"
    | "A+"
    | "A-"
    | "B+"
    | "B-"
    | "AB+"
    | "AB-"
    | "O+"
    | "O-";

export type TAddress = {
    country: string;
    division: string;
    district: string;
    subDistrict: string;
    union?: string;
    ward?: string;
    postOffice?: string;
    postalCode: string;
    village: string;
};

export type TUser = {
    _id?: string;
    nameInEnglish: TName;
    nameInBangla: TName;
    gender: TGender;
    dateOfBirth: string;
    birthCertificate?: string;
    bloodGroup?: TBloodGroup;
    smartId?: string;
    nonSmartId?: string;
    currentPassport?: string;
    mobile?: string;
    email?: string;
    presentAddressInEnglish?: TAddress;
    permanentAddressInEnglish: TAddress;
    presentAddressInBangla?: TAddress;
    permanentAddressInBangla: TAddress;
    image?: string;
    fullNameInEnglish?: string;
    fullNameInBangla?: string;
    isDeleted: boolean;
};
