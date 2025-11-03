
export class UserInstance {
  private username: string;
  private email: string;
  private password: string;
  private date_of_birth: string;
  private avatar: string | null;

  constructor(
    name: string,
    email: string,
    password: string,
    date_of_birth: string,
    avatar: string | null
  ) {
    this.username = name,
    this.email = email,
    this.password = password,
    this.date_of_birth = date_of_birth,
    this.avatar = avatar;
  }
  
    getUserName(): string{
      return this.username
    }
  
    getEmail(): string{
      return this.email
    }
  
    getPassword(): string{
      return this.password
    }
  
    getAvatar(): string | null{
      return this.avatar
    }
    getDate_of_birth(): string{
      return this.date_of_birth
    }
}
