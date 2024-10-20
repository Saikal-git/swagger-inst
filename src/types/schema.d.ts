interface IAuthToken {
  email: string
  password: string;
  message: string;
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}

interface IUser {
  profile: {
    id: number;
    username: string;
    role: string;
    email: string;
    isActive: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}
