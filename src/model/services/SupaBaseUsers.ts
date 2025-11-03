import {
  AuthError,
  AuthResponse,
  PostgrestSingleResponse,
} from "@supabase/supabase-js";
import { UserCreated } from "../interfaces/UserCreated";
import { supabase } from "../util/SupaBaseConection";
import { UserInstance } from "../class/UserInstance";

export class SupaBaseUsers {

  static async createUser(user: UserInstance): Promise<UserCreated> {
    try {
      const authResponse: AuthResponse = await supabase.auth.signUp({
        email: user.getEmail(),
        password: user.getPassword(),
      });

      const userId : string= authResponse.data.user?.id!;

      if (authResponse.error) {
        throw new Error(`Esso ao cadastrar usuario: ${authResponse.error.message}`);
      }

      const insertResponse: PostgrestSingleResponse<null> = await supabase
        .from("Users")
        .insert([
          {
            id : userId,
            name: user.getUserName(),
            date_of_birth: user.getDate_of_birth(),
            avatar: user.getAvatar(),
          },
        ]);


      if (insertResponse.error) {
        throw new Error(
          `Erro ao fazer a inserçao dos dados do usuario: ${insertResponse.error.message}`
        );
      }

      return {
        id: userId,
        username: user.getUserName(),
        email: user.getEmail(),
        date_of_birth: user.getDate_of_birth(),
        avatar: user.getAvatar(),
      };
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  }
}
