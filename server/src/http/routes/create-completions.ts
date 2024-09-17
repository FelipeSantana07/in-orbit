import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import fastify from 'fastify'
import { createGoal } from '../../functions/create-goals'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'
import { createGoalCompletions } from '../../functions/create-goal-completion'

export const createCompletionsRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      const result = await createGoalCompletions({
        goalId,
      })
    }
  )
}
