import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';

// this will contain our api logic and url
export const appRouter = router({
  authCallBack: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    if(!user.id || !user.email) {
      throw new TRPCError({ code: 'UNAUTHORIZED'})
    }
    
    // check if user in database
    const dbUser = await db.user.firstFind({
      where: {
        id: user.id,

      }
    })

    if(!dbUser){
      // means no user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        }
      })  
    }
    return({success: true})
  })
});

export type AppRouter = typeof appRouter;