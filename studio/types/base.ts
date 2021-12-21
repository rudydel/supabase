export interface Organization {
  id: number
  slug: string
  name: string
  billing_email: string
  is_owner: boolean
}

export interface Project {
  id: number
  ref: string
  name: string
  status: string
  organization_id: number
  cloud_provider: string
  region: string
  connectionString: string
  inserted_at: string
  subscription_tier: string
  subscription_tier_prod_id: string
}

export interface User {
  id: number
  mobile: string
  primary_email: string
  username: string
  first_name: string
  last_name: string
  is_alpha_user: boolean
  total_free_projects_owned: number
}

export interface Member {
  id: number
  is_owner: boolean
  profile: {
    id: number
    primary_email: string
    username: string
  }
}

export interface ResponseError {
  message: string
}

export interface ResponseFailure {
  error: ResponseError
}

export type SupaResponse<T> = T & ResponseFailure
