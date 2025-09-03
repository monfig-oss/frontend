export interface Project {
    id?: string
    name: string
    projectIdentifier: string
}

export interface ProjectMember {
  id: string
  username: string
  role: "member" | "developer"
  addedAt?: string
}

export interface ProjectPermission {
  projectId: string
  userId: string
  role: "member" | "developer"
}
