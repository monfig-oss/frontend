import { defineStore } from 'pinia'
import type { Project } from '~/types/project'

// @ts-ignore (Idk why but typescript won't recognize the persist value, even with the types.d file)
export const useProjectStore = defineStore('project', {
  state: () => ({
    selectedProject: null as Project | null
  }),

  getters: {
    isProjectSelected: (state) => state.selectedProject !== null
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
})
