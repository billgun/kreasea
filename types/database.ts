export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      user_following: {
        Row: {
          following_id: string
          user_id: string
        }
        Insert: {
          following_id: string
          user_id?: string
        }
        Update: {
          following_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_following_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_following_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_message: {
        Row: {
          created_at: string
          from_user: string
          id: string
          message: string
          to_user: string
        }
        Insert: {
          created_at?: string
          from_user: string
          id?: string
          message: string
          to_user: string
        }
        Update: {
          created_at?: string
          from_user?: string
          id?: string
          message?: string
          to_user?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_message_from_user_fkey"
            columns: ["from_user"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_message_from_user_fkey"
            columns: ["from_user"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_message_to_user_fkey"
            columns: ["to_user"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_message_to_user_fkey"
            columns: ["to_user"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_post_likes: {
        Row: {
          post_id: string
          user_id: string
        }
        Insert: {
          post_id: string
          user_id?: string
        }
        Update: {
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "user_home_feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "user_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "user_posts_feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_post_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_post_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          tags: string[] | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_post_duplicate_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_post_duplicate_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          background_url: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          username: string
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          background_url?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          name: string
          username: string
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          background_url?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          username?: string
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_social_links: {
        Row: {
          facebook: string | null
          id: string
          instagram: string | null
          twitch: string | null
          twitter: string | null
          website: string | null
          youtube: string | null
        }
        Insert: {
          facebook?: string | null
          id: string
          instagram?: string | null
          twitch?: string | null
          twitter?: string | null
          website?: string | null
          youtube?: string | null
        }
        Update: {
          facebook?: string | null
          id?: string
          instagram?: string | null
          twitch?: string | null
          twitter?: string | null
          website?: string | null
          youtube?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_social_links_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_profile_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_social_links_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      user_home_feed: {
        Row: {
          content: string | null
          created_at: string | null
          id: string | null
          is_liked: boolean | null
          like_count: number | null
          title: string | null
          username: string | null
        }
        Relationships: []
      }
      user_posts_feed: {
        Row: {
          avatar_url: string | null
          content: string | null
          created_at: string | null
          id: string | null
          is_liked: boolean | null
          like_count: number | null
          name: string | null
          title: string | null
          username: string | null
        }
        Relationships: []
      }
      user_profile_view: {
        Row: {
          avatar_url: string | null
          background_url: string | null
          created_at: string | null
          description: string | null
          has_followed: boolean | null
          id: string | null
          name: string | null
          username: string | null
          website_url: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      change_user_password: {
        Args: {
          current_plain_password: string
          new_plain_password: string
        }
        Returns: Json
      }
      generate_username: {
        Args: {
          full_name: string
        }
        Returns: string
      }
    }
    Enums: {
      tags: "Art" | "Music" | "Games"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
