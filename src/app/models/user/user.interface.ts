interface TUser {
    username: string;
    email: string;
    password: string;
    userType: "Customer" | "Admin" 
  }

export default TUser;