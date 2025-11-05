export interface SocialMediaEntry {
  platform: string;
  handle: string;
}

export interface Profile {
  _id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  otherName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  website?: string;
  companyName?: string;
  socialMedia?: SocialMediaEntry[];
  profilePhoto?: string;
  status?: string;
  createdAt?: Date;
}