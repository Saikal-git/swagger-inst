namespace AUTH {
  type SignInResponse = IAuthToken;
  type SignInRequest = {
    email: string;
    password: string;
  };

  type SignUpResponse = IAuthToken;
  type SignUpRequest = {
    email: string;
    password: string;
    username: string;
    photo: string;
  };

  type GetMeResponse = IUser;
  type GetMeRequest = void;
}
