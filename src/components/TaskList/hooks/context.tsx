import { createContext, ReactNode, useContext, useState } from 'react'

interface TodoListContextType {
  isCreateModalOpen: boolean
  openCreateModal: () => void
  closeCreateModal: () => void
}

const TodoListContext = createContext<TodoListContextType | undefined>(undefined)

export function TodoListProvider({ children }: { children: ReactNode }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const openCreateModal = () => setIsCreateModalOpen(true)
  const closeCreateModal = () => setIsCreateModalOpen(false)

  return (
    <TodoListContext.Provider value={{ isCreateModalOpen, openCreateModal, closeCreateModal }}>
      {children}
    </TodoListContext.Provider>
  )
}

export function useTodoListContext() {
  const context = useContext(TodoListContext)
  if (context === undefined) {
    throw new Error('useTodoListContext must be used within a TodoListProvider')
  }
  return context
}
