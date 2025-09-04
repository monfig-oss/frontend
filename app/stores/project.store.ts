import { defineStore } from 'pinia'
import type { Project } from '~/types/project'

export interface ProjectState {
  selectedProject: Project | null
}

export interface ProjectStore extends ProjectState {
  setSelectedProject(project: Project): void
  clearSelectedProject(): void

  isProjectSelected: boolean
}

export const useProjectStore = defineStore('project', {
  state: (): ProjectState => ({
    selectedProject: null
  }),
  getters: {
    isProjectSelected: (state: ProjectState): boolean => state.selectedProject !== null
  },
  actions: {
    setSelectedProject(project: Project) {
      this.selectedProject = project
    },
    clearSelectedProject() {
      this.selectedProject = null
    }
  },
  persist: true
}) as () => ProjectStore