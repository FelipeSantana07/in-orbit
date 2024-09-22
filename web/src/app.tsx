import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export function App() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null)

  const { data } = useQuery<SummaryResponse>({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  console.log(data)
  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      {/* <EmptyGoals /> */}
      {/* <Summary /> */}
      <CreateGoal />
    </Dialog>
  )
}
