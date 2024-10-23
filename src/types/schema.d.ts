interface IAuthToken {
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

interface SignUpReq {
  email: string;
  password: string;
  username: string;
  photo: string;
}

interface ICreatePost {
  file?: string[];
  caption: string;
  mediaUrl?: string;
  mediaType: string;
}

interface IPost {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
}
