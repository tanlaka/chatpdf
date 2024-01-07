import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

// this will contain our api logic and url
export const appRouter = router({
  authCallBack: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    if(!user.id || !user.email) {
      throw new TRPCError({ code: 'UNAUTHORIZED'})
    }
    
    //
  })
});

export type AppRouter = typeof appRouter;