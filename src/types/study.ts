export type StudyItem = {
  id: string
  itemNumber: string
  category: string
  question: string
  answer: string
  sourceBlock?: string
  isDuplicate?: boolean
  orderIndex: number
}

export type UserProgress = {
  id: string
  userId?: string
  studyItemId: string
  reviewed: boolean
  difficult: boolean
  gotItRight?: boolean
  gotItWrong?: boolean
  reviewLater: boolean
  updatedAt: string
}

export type StudySession = {
  id: string
  userId?: string
  mode: string
  totalAnswered: number
  totalRight: number
  totalWrong: number
  createdAt: string
}
